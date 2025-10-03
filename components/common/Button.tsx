import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button = ({ children, className, label }: ButtonProps) => {
  return (
    <button className={` text-white py-2 px-3 rounded-full ${className}`}>
      {label || children}
    </button>
  )
}

export default Button;