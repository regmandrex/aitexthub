'use client';

import { useEffect, useState } from 'react';
import PricingModal from '@/components/PricingModal';
import { useSession } from '@/lib/auth-client';

type MhaSheet = { name: string; quirk: string; role: string; costume: string; personality: string; image?: string };
const quirkTypes = ['Emitter', 'Transformation', 'Mutant', 'Support-focused', 'Hybrid ability', 'Surprise me'];
const heroRoles = ['Rescue hero', 'Combat hero', 'Reconnaissance hero', 'Support hero', 'Stealth hero', 'Independent vigilante', 'Surprise me'];
const combatStyles = ['Agile and evasive', 'Close-range power', 'Long-range control', 'Defensive and tactical', 'Mobility-focused', 'Rescue-first'];
const costumeStyles = ['Technical utility suit', 'Light armored uniform', 'Sporty movement gear', 'Stealth costume', 'High-visibility rescue suit', 'Minimalist hero outfit'];
const colors = ['Red, white, and charcoal', 'Electric blue and silver', 'Black with neon green accents', 'Gold, navy, and white', 'Purple and warm gray', 'Surprise me'];
const personalities = ['Calm under pressure', 'Bold and competitive', 'Friendly but anxious', 'Serious and observant', 'Chaotic but inventive', 'Quietly determined'];
const weaknesses = ['Short stamina window', 'Needs direct line of sight', 'Reduced control under stress', 'Ability affects allies too', 'Requires a physical charge-up', 'Overheats with repeated use'];
const supportItems = ['Mobility gauntlets', 'Rescue cable kit', 'Targeting visor', 'Insulated gloves', 'Capture tools', 'Custom support boots'];
const fieldClass = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600';

function OptionField({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label className="text-sm font-medium text-slate-700">{label}<select value={value} onChange={(event) => onChange(event.target.value)} className={fieldClass}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

export function MhaOcMakerTool() {
  const { data: session } = useSession();
  const [concept, setConcept] = useState('');
  const [quirkType, setQuirkType] = useState(quirkTypes[0]);
  const [role, setRole] = useState(heroRoles[0]);
  const [combatStyle, setCombatStyle] = useState(combatStyles[0]);
  const [costume, setCostume] = useState(costumeStyles[0]);
  const [color, setColor] = useState(colors[0]);
  const [personality, setPersonality] = useState(personalities[0]);
  const [weakness, setWeakness] = useState(weaknesses[0]);
  const [supportItem, setSupportItem] = useState(supportItems[0]);
  const [isPro, setIsPro] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [sheet, setSheet] = useState<MhaSheet | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!session?.user) { setIsPro(false); return; }
    fetch('/api/subscription').then((response) => response.json()).then((data) => setIsPro(!!data.isPro)).catch(() => setIsPro(false));
  }, [session?.user]);

  const generate = async () => {
    if (!isPro) { setPricingOpen(true); return; }
    setIsGenerating(true); setError('');
    const imagePrompt = `Original fan-made My Hero Academia-inspired hero character, not a canon character, no official names, logos, or copied costume: ${concept || 'a new young hero with a practical rescue ability'}. ${quirkType} Quirk, ${role}, ${combatStyle} combat style, ${costume}, ${color}, ${personality} personality, weakness: ${weakness}, support item: ${supportItem}. Create a polished full-body anime character reference image with a clear silhouette, hero costume details, one subtle ability effect, neutral studio background, consistent design, no text, no watermark.`;
    try {
      const response = await fetch('/api/oc-image', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: imagePrompt, tool: 'MHA OC Maker' }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || `Image error ${response.status}`);
      setSheet({ name: concept.trim() || 'Original Hero OC', quirk: `${quirkType} Quirk with a ${weakness.toLowerCase()}.`, role, costume: `${costume}, ${color}, ${supportItem}.`, personality, image: data.image });
    } catch (err) { setError(err instanceof Error ? err.message : 'Could not generate the hero image. Please try again.'); }
    finally { setIsGenerating(false); }
  };

  const copySheet = () => { if (sheet) navigator.clipboard.writeText(`${sheet.name}\nQuirk: ${sheet.quirk}\nRole: ${sheet.role}\nCostume: ${sheet.costume}\nPersonality: ${sheet.personality}`); };

  return <>
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Hero Design</p><p className="mt-1 text-sm text-slate-600">Build a balanced Quirk, costume, role, and limitation.</p></div><button type="button" onClick={() => setConcept('A rescue hero whose glass-like bubbles redirect force away from civilians.')} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">Inspire me</button></div>
      <label className="block text-sm font-medium text-slate-700">Character concept <span className="font-normal text-slate-500">(optional)</span><input value={concept} onChange={(event) => setConcept(event.target.value)} placeholder="A rescue hero with a clever defensive Quirk" className={fieldClass} maxLength={180} /></label>
      <div className="grid gap-4 sm:grid-cols-2"><OptionField label="Quirk type" value={quirkType} options={quirkTypes} onChange={setQuirkType} /><OptionField label="Hero role" value={role} options={heroRoles} onChange={setRole} /><OptionField label="Combat style" value={combatStyle} options={combatStyles} onChange={setCombatStyle} /><OptionField label="Costume style" value={costume} options={costumeStyles} onChange={setCostume} /><OptionField label="Costume palette" value={color} options={colors} onChange={setColor} /><OptionField label="Personality" value={personality} options={personalities} onChange={setPersonality} /><OptionField label="Quirk weakness" value={weakness} options={weaknesses} onChange={setWeakness} /><OptionField label="Support item" value={supportItem} options={supportItems} onChange={setSupportItem} /></div>
      <div className="flex flex-wrap gap-3"><button type="button" onClick={generate} disabled={isGenerating} className="rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50">{isGenerating ? 'Creating your hero...' : 'Make my MHA OC'}</button><button type="button" onClick={copySheet} disabled={!sheet} className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">Copy character sheet</button><button type="button" onClick={() => setSheet(null)} disabled={!sheet} className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">Clear</button></div>
      {error && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
      {sheet && <article className="max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-4"><div className="mb-3 flex items-start justify-between gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">1</span><span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Your MHA OC</span></div><img src={sheet.image} alt={`${sheet.name} My Hero Academia OC concept`} className="mb-4 aspect-square w-full rounded-lg border border-slate-200 object-cover" /><h3 className="text-lg font-semibold text-slate-900">{sheet.name}</h3><dl className="mt-3 space-y-2 text-sm text-slate-700"><div><dt className="font-semibold text-slate-900">Quirk</dt><dd>{sheet.quirk}</dd></div><div><dt className="font-semibold text-slate-900">Role</dt><dd>{sheet.role}</dd></div><div><dt className="font-semibold text-slate-900">Costume</dt><dd>{sheet.costume}</dd></div><div><dt className="font-semibold text-slate-900">Personality</dt><dd>{sheet.personality}</dd></div></dl></article>}
    </div>
    {pricingOpen && <PricingModal product="mha" onClose={() => setPricingOpen(false)} />}
  </>;
}
