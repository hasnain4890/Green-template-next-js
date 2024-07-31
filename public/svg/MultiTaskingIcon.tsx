import React from 'react';

interface MultiTaskingIconprops {
  className?: string;
}

const MultiTaskingIcon: React.FC<MultiTaskingIconprops> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 49 49"
      fill="none"
    >
      <mask id="mask0_187_107190" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
        <path
          d="M47 6.21875C47 5.09987 46.6444 4.02681 46.0115 3.23564C45.3785 2.44447 44.5201 2 43.625 2H5.375C4.47989 2 3.62145 2.44447 2.98851 3.23564C2.35558 4.02681 2 5.09987 2 6.21875V18.875H47V6.21875Z"
          fill="#555555"
          stroke="white"
          stroke-width="3.91667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.126 45.6359L15.824 28.3391L23.2265 37.1984L32.2738 27.3125L37.3138 33.455"
          stroke="white"
          stroke-width="3.91667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M47 16.0625V42.7812C47 43.9001 46.6444 44.9732 46.0115 45.7644C45.3785 46.5555 44.5201 47 43.625 47H11M19.001 10.4375H39.251M9.99875 10.4375H12.2487M2 16.0625V28.7188"
          stroke="white"
          stroke-width="3.91667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_187_107190)">
        <path d="M-2.5 -9.25H51.5V58.25H-2.5V-9.25Z" fill="#00C4F4" />
      </g>
    </svg>
  );
};

export default MultiTaskingIcon;
export { MultiTaskingIcon as ReactComponent };
