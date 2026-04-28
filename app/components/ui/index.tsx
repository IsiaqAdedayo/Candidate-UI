import React from 'react';

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, required, error, children, className = '' }: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-medium text-stone-800 tracking-wide">
        {label}
        {required && <span className="text-orange-600 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 mt-0.5">{error}</p>}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error, className = '', ...props }: InputProps) {
  return (
    <input
      className={`
        w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all
        font-sans bg-stone-50 text-stone-900 placeholder:text-stone-400
        focus:border-stone-900 focus:ring-2 focus:ring-stone-900/5
        ${error ? 'border-red-400 bg-red-50' : 'border-stone-200'}
        ${className}
      `}
      {...props}
    />
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  children: React.ReactNode;
}

export function Select({ error, children, className = '', ...props }: SelectProps) {
  return (
    <select
      className={`
        w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all
        font-sans bg-stone-50 text-stone-900
        focus:border-stone-900 focus:ring-2 focus:ring-stone-900/5
        ${error ? 'border-red-400 bg-red-50' : 'border-stone-200'}
        ${className}
      `}
      {...props}
    >
      {children}
    </select>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ error, className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={`
        w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all
        font-sans bg-stone-50 text-stone-900 placeholder:text-stone-400
        focus:border-stone-900 focus:ring-2 focus:ring-stone-900/5
        resize-none min-h-[100px]
        ${error ? 'border-red-400 bg-red-50' : 'border-stone-200'}
        ${className}
      `}
      {...props}
    />
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  loading,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const base = 'flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer';
  const variants = {
    primary: 'bg-stone-900 text-white hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-transparent text-stone-600 border border-stone-200 hover:border-stone-400',
    ghost: 'bg-transparent text-stone-600 hover:bg-stone-100',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-lg bg-stone-200 ${className}`} />
  );
}
