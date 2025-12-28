"use client";

import { ChangeEvent } from 'react';

type ToolTextareaProps = {
  label: string;
  labelSecondary?: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
};

export default function ToolTextarea({
  label,
  labelSecondary,
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
        <label className="text-sm font-medium text-slate-700">{label}</label>
        {labelSecondary}
      </div>
      <textarea
        value={value}
        onChange={handleChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
