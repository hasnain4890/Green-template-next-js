import { CloseIconProps } from '@/app/interfaces/Interfaces';
import React from 'react';

const CloseIcon = ({ onClick, className }: CloseIconProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="10"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M1 8.07L8.072 1M1 1L8.072 8.07" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default CloseIcon;
export { CloseIcon as ReactComponent };
