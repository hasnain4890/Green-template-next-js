import { HamburgerProps } from '@/app/interfaces/Interfaces';
import React from 'react';

const Hamburger = ({ onClick, className }: HamburgerProps) => {
  return (
    <svg
      width="16"
      height="10"
      className={className}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M1 11H15M1 6H15M1 1H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Hamburger;
export { Hamburger as ReactComponent };
