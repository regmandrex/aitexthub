"use client";

import { TextareaHTMLAttributes, type ReactNode } from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  helperText?: string;
  beforeTextarea?: ReactNode;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>;

export default function ToolTextArea({ label, value, onChange, helperText, beforeTextarea, ...rest }: Props) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-800">{label}</label>
        {helperText ? <span className="text-xs text-slate-500">{helperText}</span> : null}
      </div>
      {beforeTextarea}
      <textarea
        className="w-full rounded-xl border-3 border-black bg-white px-3 py-3 text-[15px] leading-relaxed text-slate-800 shadow-neo-sm outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:ring-2 focus:ring-brand-100 md:text-base"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rest.rows ?? 12}
        {...rest}
      />
    </div>
  );
}
