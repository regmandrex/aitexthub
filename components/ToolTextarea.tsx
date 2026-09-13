"use client";

import { ChangeEvent, type ReactNode } from 'react';

type ToolTextareaProps = {
  label: string;
  labelSecondary?: ReactNode;
  /** Renders between the label row and the textarea (e.g. upsell strip). */
  beforeTextarea?: ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
};

export default function ToolTextarea({
  label,
  labelSecondary,
  beforeTextarea,
  placeholder,
  value,
  onChange,
  rows = 10,
}: ToolTextareaProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex min-h-0 flex-col gap-2.5">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-black text-slate-950">{label}</label>
        {labelSecondary}
      </div>
      {beforeTextarea}
      <textarea
        value={value}
        onChange={handleChange}
        rows={rows}
        placeholder={placeholder}
        className="min-h-[300px] w-full resize-y rounded-2xl border-3 border-black bg-white px-4 py-4 text-[15px] leading-relaxed text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-teal-100 md:min-h-[360px] md:text-base"
      />
    </div>
  );
}
