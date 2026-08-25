'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import PricingModal from '@/components/PricingModal';
import { useSession } from '@/lib/auth-client';

type OcSheet = {
  name: string;
  role: string;
  avatar: string;
  appearance: string;
  personality: string;
  imagePrompt: string;
  image?: string;
};

const roles = ['Jester', 'Ringmaster', 'Acrobat', 'Mime', 'Puppeteer', 'Magician', 'Mascot', 'Fortune teller', 'Inventor', 'Surprise me'];
const avatarTypes = ['Toy or doll', 'Plush animal', 'Object-headed character', 'Digital creature', 'Human-like avatar', 'Surprise me'];
const materials = ['Plush and stitched fabric', 'Porcelain and lacquer', 'Rubber and plastic', 'Paper and cardboard', 'Glass and chrome', 'Mixed toy materials'];
const palettes = ['Pastel mint, peach, and cream', 'Lavender, aqua, and lemon', 'Red, black, and electric cyan', 'Cotton-candy pink and blue', 'Warm yellow, orange, and teal', 'Surprise me'];
const personalities = ['Anxious but kind', 'Mischievous and bold', 'Cheerful and chaotic', 'Quiet and mysterious', 'Overconfident performer', 'Surprise me'];
const styles = ['Toy-like 3D cartoon', 'Soft anime', 'Rubber-hose cartoon', 'Paper craft', 'Glitch surrealism', 'Surprise me'];
const ages = ['Childlike', 'Young adult', 'Adult', 'Ageless mascot', 'Surprise me'];
const bodyTypes = ['Small and round', 'Tall and lanky', 'Compact and athletic', 'Long-limbed', 'Asymmetrical', 'Surprise me'];
const hairOptions = ['No hair', 'Short and fluffy', 'Long and ribbon-like', 'Painted-on', 'Glowing strands', 'Surprise me'];
const eyeOptions = ['Button eyes', 'Dot-pattern eyes', 'Large expressive eyes', 'Screen eyes', 'Mismatched eyes', 'Surprise me'];
const outfitOptions = ['Circus costume', 'Vintage stagewear', 'Toy uniform', 'Patchwork outfit', 'Simple performer outfit', 'Surprise me'];
const accessoryOptions = ['Wind-up key', 'Oversized prop', 'Ribbons and bells', 'Tiny top hat', 'Floating digital icons', 'Surprise me'];

const fieldClass = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600';

function OptionField({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="text-sm font-medium text-slate-700">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className={fieldClass}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

export function TadcOcMakerTool() {
  const { data: session } = useSession();
  const [concept, setConcept] = useState('');
  const [role, setRole] = useState(roles[0]);
  const [avatar, setAvatar] = useState(avatarTypes[0]);
  const [material, setMaterial] = useState(materials[0]);
  const [palette, setPalette] = useState(palettes[0]);
  const [personality, setPersonality] = useState(personalities[0]);
  const [style, setStyle] = useState(styles[0]);
  const [age, setAge] = useState(ages[0]);
  const [bodyType, setBodyType] = useState(bodyTypes[0]);
  const [hair, setHair] = useState(hairOptions[0]);
  const [eyes, setEyes] = useState(eyeOptions[0]);
  const [outfit, setOutfit] = useState(outfitOptions[0]);
  const [accessory, setAccessory] = useState(accessoryOptions[0]);
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [sheets, setSheets] = useState<OcSheet[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [isPro, setIsPro] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState<number | null>(null);

  useEffect(() => {
    if (!session?.user) { setIsPro(false); return; }
    fetch('/api/subscription')
      .then((response) => response.json())
      .then((data) => setIsPro(!!data.isPro))
      .catch(() => setIsPro(false));
  }, [session?.user]);

  const requestImage = async (prompt: string): Promise<string> => {
    const response = await fetch('/api/oc-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt.replace(/\s+/g, ' ').trim().slice(0, 11000) }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `Image error ${response.status}`);
    return data.image;
  };

  const generate = async () => {
    if (!isPro) {
      setPricingOpen(true);
      return;
    }
    setIsGenerating(true);
    setError('');
    const imagePrompt = `Original fan-made digital circus character, not a canon character: ${concept || 'an unexpected circus object or creature'}. ${role} performer, ${avatar} avatar, ${style}, ${age}, ${bodyType} body, ${hair}, ${eyes}, ${outfit}, ${material}, ${palette}, ${accessory}, ${personality} personality. Create a clean ${aspectRatio} character reference sheet with one full-body front view, one side or back view, and three clear expression panels. Strong readable silhouette, polished colorful 3D cartoon render, plain studio background, consistent character design, no text, no logos.`;
    try {
      const nextSheets: OcSheet[] = [{
        name: concept.trim() || `${role} OC`,
        role,
        avatar,
        appearance: `${style}, ${bodyType} body, ${material}, ${palette}, ${outfit}, ${accessory}.`,
        personality,
        imagePrompt,
      }];
      setImageLoading(0);
      try {
        const image = await requestImage(imagePrompt);
        nextSheets[0] = { ...nextSheets[0], image };
      } catch (imageError) {
        setError(imageError instanceof Error ? imageError.message : 'The character was created, but the image could not be generated.');
      }
      setSheets(nextSheets);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const copySheets = () => {
    const text = sheets.map((sheet, index) => `${index + 1}. ${sheet.name}\nRole: ${sheet.role}\nAvatar: ${sheet.avatar}\nAppearance: ${sheet.appearance}\nPersonality: ${sheet.personality}`).join('\n\n');
    if (text) navigator.clipboard.writeText(text);
  };

  const generateImage = async (index: number) => {
    const sheet = sheets[index];
    if (!sheet) return;
    setImageLoading(index);
    setError('');
    try {
      const image = await requestImage(sheet.imagePrompt);
      setSheets((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, image } : item));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not generate the image. Please try again.');
    } finally {
      setImageLoading(null);
    }
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Character Appearance</p><p className="mt-1 text-sm text-slate-600">Build the look of your original Digital Circus character.</p></div>
          <button type="button" onClick={() => setConcept('A strange performer built from a wind-up toy, a broken carnival ticket, and one impossible prop.')} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">Inspire me</button>
        </div>

        <label className="block text-sm font-medium text-slate-700">Character concept <span className="font-normal text-slate-500">(optional)</span><input value={concept} onChange={(event) => setConcept(event.target.value)} placeholder="A wind-up toy fox with a broken carnival ticket" className={fieldClass} maxLength={180} /></label>

        <div className="grid gap-4 sm:grid-cols-2">
          <OptionField label="Gender / presentation" value={role} options={roles} onChange={setRole} />
          <OptionField label="Style" value={style} options={styles} onChange={setStyle} />
          <OptionField label="Age" value={age} options={ages} onChange={setAge} />
          <OptionField label="Body type" value={bodyType} options={bodyTypes} onChange={setBodyType} />
          <OptionField label="Hair" value={hair} options={hairOptions} onChange={setHair} />
          <OptionField label="Eyes" value={eyes} options={eyeOptions} onChange={setEyes} />
          <OptionField label="Outfit" value={outfit} options={outfitOptions} onChange={setOutfit} />
          <OptionField label="Material / pattern" value={material} options={materials} onChange={setMaterial} />
          <OptionField label="Color palette" value={palette} options={palettes} onChange={setPalette} />
          <OptionField label="Accessory" value={accessory} options={accessoryOptions} onChange={setAccessory} />
          <OptionField label="Circus role" value={avatar} options={avatarTypes} onChange={setAvatar} />
          <OptionField label="Personality" value={personality} options={personalities} onChange={setPersonality} />
        </div>

        <div className="grid gap-4 border-t border-slate-200 pt-5 sm:grid-cols-2">
          <OptionField label="Image ratio" value={aspectRatio} options={['1:1', '4:3', '3:4', '16:9']} onChange={setAspectRatio} />
          <label className="text-sm font-medium text-slate-700">Image quality<select className={fieldClass} defaultValue="1K"><option>1K</option><option>2K</option></select></label>
        </div>

        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={generate} disabled={isGenerating} aria-busy={isGenerating || imageLoading === 0} className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50">{isGenerating || imageLoading === 0 ? 'Creating your TADC OC...' : 'Make my TADC OC'}</button>
          <button type="button" onClick={copySheets} disabled={!sheets.length} className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">Copy character sheet</button>
          <button type="button" onClick={() => setSheets([])} disabled={!sheets.length} className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">Clear</button>
        </div>

        {error && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
        {sheets.length > 0 && <div className="max-w-2xl">{sheets.map((sheet, index) => <article key={`${sheet.name}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><div className="mb-3 flex items-start justify-between gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">{index + 1}</span><span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Your TADC OC</span></div>{sheet.image && <img src={sheet.image} alt={`${sheet.name} TADC OC concept`} className="mb-4 aspect-square w-full rounded-lg border border-slate-200 object-cover" />}{!sheet.image && <button type="button" onClick={() => generateImage(index)} disabled={imageLoading !== null} className="mb-4 w-full rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-50">{imageLoading === index ? 'Generating image...' : 'Generate image'}</button>}<h3 className="text-lg font-semibold text-slate-900">{sheet.name}</h3><dl className="mt-3 space-y-2 text-sm text-slate-700"><div><dt className="font-semibold text-slate-900">Role</dt><dd>{sheet.role}</dd></div><div><dt className="font-semibold text-slate-900">Avatar</dt><dd>{sheet.avatar}</dd></div><div><dt className="font-semibold text-slate-900">Appearance</dt><dd>{sheet.appearance}</dd></div><div><dt className="font-semibold text-slate-900">Personality</dt><dd>{sheet.personality}</dd></div></dl></article>)}</div>}
      </div>
      {pricingOpen && <PricingModal product="tadc" onClose={() => setPricingOpen(false)} />}
    </>
  );
}
