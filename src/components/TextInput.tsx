import React from 'react';

interface TextInputProps{
  label: string
  type: React.HTMLInputTypeAttribute
  value?: string
}
export function TextInput({label,type,value}:TextInputProps) {
  return <div className="mb-4 w-full">
    <label htmlFor={label.toLowerCase()} className="block text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={label.toLowerCase()}
      value={value}
      className="text-input"
      placeholder={`Enter your ${label.toLowerCase()}`} />
  </div>;
}
