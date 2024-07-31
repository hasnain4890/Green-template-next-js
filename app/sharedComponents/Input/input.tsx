import { InputProps } from '@/app/interfaces/Interfaces';
import React from 'react';

const classNames = (classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

function Input({ value, onChange, className: propClassName, placeholder, name }: InputProps) {
  const defaultClassName =
    'pl-2 hover:border-gray-500 font-extralight text-xs py-3 rounded-lg border-[0.019rem] border-gray-600 bg-primary-bg focus:outline-none shadow-sm bg-transparent';

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames([defaultClassName, propClassName])}
        name={name}
      />
    </div>
  );
}

export default Input;
