'use client';

import { useEffect, useState } from 'react';
import PricingModal from '@/components/PricingModal';
import { useSession } from '@/lib/auth-client';

type CharacterSheet = { name: string; type: string; role: string; appearance: string; personality: string; imagePrompt: string; image?: string };
const types = ['Toon animal', 'Living object', 'Food-inspired Toon', 'Toy-like creature', 'Plant or nature Toon', 'Surprise me'];
const roles = ['Explorer', 'Shopkeeper', 'Performer', 'Helper', 'Troublemaker', 'Quiet observer', 'Surprise me'];
const bodyTypes = ['Round and bouncy', 'Small and compact', 'Tall and stretchy', 'Soft and plushy', 'Oddly shaped', 'Surprise me'];
const materials = ['Rubber and painted vinyl', 'Soft fabric and felt', 'Glossy plastic', 'Cardboard and paper', 'Wood and clay', 'Mixed cartoon materials'];
const palettes = ['Warm yellow, red, and cream', 'Mint, pink, and sky blue', 'Orange, teal, and purple', 'Black, white, and one bright accent', 'Pastel rainbow', 'Surprise me'];
const expressions = ['Cheerful but nervous', 'Confident and playful', 'Sleepy and gentle', 'Dramatic and loud', 'Curious and distracted', 'Surprise me'];
const outfits = ['Simple vintage outfit', 'Colorful work uniform', 'Patchwork stage costume', 'Small vest and accessories', 'No separate outfit', 'Surprise me'];
const accessories = ['Signature prop', 'Small satchel', 'Oversized button', 'Bell or bow', 'Useful tool', 'Surprise me'];
const fieldClass = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600';

function OptionField({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label className="text-sm font-medium text-slate-700">{label}<select value={value} onChange={(event) => onChange(event.target.value)} className={fieldClass}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

export function DandysWorldOcMakerTool() {
  const { data: session } = useSession();
  const [concept, setConcept] = useState('');
  const [type, setType] = useState(types[0]);
  const [role, setRole] = useState(roles[0]);
  const [bodyType, setBodyType] = useState(bodyTypes[0]);
  const [material, setMaterial] = useState(materials[0]);
  const [palette, setPalette] = useState(palettes[0]);
  const [expression, setExpression] = useState(expressions[0]);
  const [outfit, setOutfit] = useState(outfits[0]);
  const [accessory, setAccessory] = useState(accessories[0]);
  const [isPro, setIsPro] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [sheet, setSheet] = useState<CharacterSheet | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!session?.user) { setIsPro(false); return; }
    fetch('/api/subscription').then((response) => response.json()).then((data) => setIsPro(!!data.isPro)).catch(() => setIsPro(false));
  }, [session?.user]);

  const generate = async () => {
    if (!isPro) { setPricingOpen(true); return; }
    setIsGenerating(true); setError('');
    const imagePrompt = `Original fan-made Dandy's World-inspired Toon character, not a canon character and no franchise logos: ${concept || 'a curious new character made from an unexpected everyday object'}. ${type}, ${role} role, ${bodyType} body, ${material}, ${palette}, ${expression} expression, ${outfit}, ${accessory}. Create a clean square character reference image with one full-body view and small expression details, bold readable silhouette, playful vintage cartoon design, simple bright background, consistent colors, no text, no watermark.`;
    try {
      const response = await fetch('/api/oc-image', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: imagePrompt, tool: "Dandy's World OC Maker" }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || `Image error ${response.status}`);
      setSheet({ name: concept.trim() || `${type} Toon`, type, role, appearance: `${bodyType}, ${material}, ${palette}, ${outfit}, ${accessory}.`, personality: expression, imagePrompt, image: data.image });
    } catch (err) { setError(err instanceof Error ? err.message : 'Could not generate the character image. Please try again.'); }
    finally { setIsGenerating(false); }
  };

  const copySheet = () => { if (sheet) navigator.clipboard.writeText(`${sheet.name}\nType: ${sheet.type}\nRole: ${sheet.role}\nAppearance: ${sheet.appearance}\nPersonality: ${sheet.personality}`); };

  return <>
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Toon Appearance</p><p className="mt-1 text-sm text-slate-600">Build an original character with a clear shape, role, and personality.</p></div><button type="button" onClick={() => setConcept('A friendly snack-cart Toon who gets distracted by every shiny object.')} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">Inspire me</button></div>
      <label className="block text-sm font-medium text-slate-700">Character concept <span className="font-normal text-slate-500">(optional)</span><input value={concept} onChange={(event) => setConcept(event.target.value)} placeholder="A shy wind-up snack-cart Toon" className={fieldClass} maxLength={180} /></label>
      <div className="grid gap-4 sm:grid-cols-2"><OptionField label="Toon type" value={type} options={types} onChange={setType} /><OptionField label="World role" value={role} options={roles} onChange={setRole} /><OptionField label="Body shape" value={bodyType} options={bodyTypes} onChange={setBodyType} /><OptionField label="Material" value={material} options={materials} onChange={setMaterial} /><OptionField label="Color palette" value={palette} options={palettes} onChange={setPalette} /><OptionField label="Expression" value={expression} options={expressions} onChange={setExpression} /><OptionField label="Outfit" value={outfit} options={outfits} onChange={setOutfit} /><OptionField label="Signature accessory" value={accessory} options={accessories} onChange={setAccessory} /></div>
      <div className="flex flex-wrap gap-3"><button type="button" onClick={generate} disabled={isGenerating} className="rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50">{isGenerating ? 'Creating your Toon...' : "Make my Dandy's World OC"}</button><button type="button" onClick={copySheet} disabled={!sheet} className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">Copy character sheet</button><button type="button" onClick={() => setSheet(null)} disabled={!sheet} className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">Clear</button></div>
      {error && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
      {sheet && <article className="max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-4"><div className="mb-3 flex items-start justify-between gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">1</span><span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Your Dandy's World OC</span></div><img src={sheet.image} alt={`${sheet.name} Dandy's World OC concept`} className="mb-4 aspect-square w-full rounded-lg border border-slate-200 object-cover" /><h3 className="text-lg font-semibold text-slate-900">{sheet.name}</h3><dl className="mt-3 space-y-2 text-sm text-slate-700"><div><dt className="font-semibold text-slate-900">Toon type</dt><dd>{sheet.type}</dd></div><div><dt className="font-semibold text-slate-900">Role</dt><dd>{sheet.role}</dd></div><div><dt className="font-semibold text-slate-900">Appearance</dt><dd>{sheet.appearance}</dd></div><div><dt className="font-semibold text-slate-900">Personality</dt><dd>{sheet.personality}</dd></div></dl></article>}
    </div>
    {pricingOpen && <PricingModal product="dandys-world" onClose={() => setPricingOpen(false)} />}
  </>;
}
