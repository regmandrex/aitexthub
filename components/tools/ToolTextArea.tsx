"use client";

import { TextareaHTMLAttributes } from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  helperText?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>;

export default function ToolTextArea({ label, value, onChange, helperText, ...rest }: Props) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-800">{label}</label>
        {helperText ? <span className="text-xs text-slate-500">{helperText}</span> : null}
      </div>
      <textarea
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rest.rows ?? 12}
        {...rest}
      />
    </div>
  );
}
