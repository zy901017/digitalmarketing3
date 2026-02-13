import React from 'react'

type SelectOption = { value: string; label: string }

export interface SelectProps {
  label?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string

  // ✅ options 变成可选（兼容两种写法）
  options?: SelectOption[]

  // ✅ 允许 children <option> 方式
  children?: React.ReactNode

  name?: string
  id?: string
  required?: boolean
  disabled?: boolean
}

export function Select({
  label,
  value,
  onChange,
  className = '',
  options,
  children,
  name,
  id,
  required,
  disabled,
}: SelectProps) {
  const selectId = id ?? name

  return (
    <div className={className}>
      {label ? (
        <label htmlFor={selectId} className="block text-sm font-medium text-slate-700 mb-2">
          {label}
        </label>
      ) : null}

      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
      >
        {/* ✅ 优先渲染 children（你当前 ContactForm 的写法） */}
        {children}

        {/* ✅ 如果没有 children 且传了 options，则渲染 options */}
        {!children && options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
