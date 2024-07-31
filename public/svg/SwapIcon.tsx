import React from 'react';

interface SwapIconprops {
  className?: string;
}

const SwapIcon: React.FC<SwapIconprops> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="49.5" fill="#5F5F5F" fill-opacity="0.2" stroke="#353535" />
      <path
        d="M72.9173 58.271C72.9173 66.3335 66.3965 72.8543 58.334 72.8543L60.5215 69.2085"
        stroke="#13B0D6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.084 41.6043C27.084 33.5418 33.6048 27.021 41.6673 27.021L39.4798 30.6668"
        stroke="#13B0D6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.791 52.2293H44.6452C45.9369 52.2293 46.9994 53.396 46.9994 54.5835C46.9994 55.8752 45.9577 56.9377 44.6452 56.9377H38.791V52.2293Z"
        stroke="#13B0D6"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.791 56.9377H45.4994C46.9785 56.9377 48.1869 57.9794 48.1869 59.2919C48.1869 60.5835 46.9785 61.646 45.4994 61.646H38.791V56.9377Z"
        stroke="#13B0D6"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.541 61.6252V63.9585"
        stroke="#13B0D6"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.541 49.896V52.2293"
        stroke="#13B0D6"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M55.9368 56.9377C55.9368 64.0419 50.1869 69.7918 43.0827 69.7918C35.9785 69.7918 30.2285 64.0419 30.2285 56.9377C30.2285 49.8335 35.9785 44.0834 43.0827 44.0834C43.416 44.0834 43.7285 44.1043 44.0827 44.1251C50.3952 44.6043 55.4369 49.646 55.916 55.9585C55.916 56.271 55.9368 56.5835 55.9368 56.9377Z"
        stroke="#13B0D6"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M69.7904 43.0626C69.7904 50.1668 64.0404 55.9169 56.9362 55.9169H55.9154C55.4362 49.6044 50.3945 44.5626 44.082 44.0834V43.0626C44.082 35.9585 49.832 30.2085 56.9362 30.2085C64.0404 30.2085 69.7904 35.9585 69.7904 43.0626Z"
        stroke="#13B0D6"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SwapIcon;
export { SwapIcon as ReactComponent };
