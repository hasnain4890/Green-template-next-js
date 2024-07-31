import React from 'react';

interface UtilizationIconprops {
  className?: string;
}

const UtilizationIcon: React.FC<UtilizationIconprops> = ({ className }) => {
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
        d="M43 55V37.7302L56.0104 29.9827C63.219 25.6893 76.1248 36.279 70.7067 45.9693"
        stroke="#00C4F4"
        stroke-linejoin="round"
      />
      <path
        d="M43 46.6747L57.6753 38L70.8441 45.7831C78.1406 50.0964 75.6692 67 64.6892 67"
        stroke="#00C4F4"
        stroke-linejoin="round"
      />
      <path
        d="M49.6394 43L65 51.3365V66.3074C65 74.5975 48.7402 80.6183 43 71.2629"
        stroke="#00C4F4"
        stroke-linejoin="round"
      />
      <path
        d="M57 47V63.5037L43.541 71.0436C36.0838 75.222 22.733 64.916 28.3379 55.4853"
        stroke="#00C4F4"
        stroke-linejoin="round"
      />
      <path
        d="M57 55.3253L42.3289 64L29.1637 56.2169C21.8575 51.8916 24.3282 35 35.3051 35"
        stroke="#00C4F4"
        stroke-linejoin="round"
      />
      <path
        d="M49.6624 59L35 50.4109V34.9864C35 26.445 50.5207 20.2418 56 29.8806"
        stroke="#00C4F4"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UtilizationIcon;
export { UtilizationIcon as ReactComponent };
