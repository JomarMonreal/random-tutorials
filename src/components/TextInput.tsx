import React from 'react';
import { LiaBell } from 'react-icons/lia';

interface TextInputProps{
  label: string
  type: React.HTMLInputTypeAttribute

}
export function TextInput({label,type}:TextInputProps) {
  return <div className="mb-4 w-full">
    <label htmlFor={label.toLowerCase()} className="block text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={label.toLowerCase()}
      className="text-input"
      placeholder={`Enter your ${label.toLowerCase()}`} />
  </div>;
}
