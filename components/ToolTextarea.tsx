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
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-semibold text-slate-800">{label}</label>
        {labelSecondary}
      </div>
      {beforeTextarea}
      <textarea
        value={value}
        onChange={handleChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-[15px] leading-relaxed text-slate-800 shadow-sm placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 md:text-base"
      />
    </div>
  );
}
