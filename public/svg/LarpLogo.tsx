import React from 'react';

interface LarpLogoProps {
  className?: string;
}

const LarpLogo: React.FC<LarpLogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="50"
      viewBox="0 0 75 68"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.9108 0L41.6667 6.82313L25.2445 36.5442L34.0376 41.1701L47.6526 17.3469L75 68H66.4319L21.9217 42.5578L7.86385 68H0L37.9108 0ZM47.3005 30.7619L40.2582 43.5986L60.9155 55.7415L47.3005 30.7619Z"
        fill="url(#paint0_radial_261_12007)"
      />
      <path
        d="M28.5211 52.0408L34.3897 55.6259L27.4648 67.8844H19.9531L28.5211 52.0408Z"
        fill="url(#paint1_radial_261_12007)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_261_12007"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(37.5 34) rotate(90) scale(34 37.5)"
        >
          <stop offset="0.46" stop-color="#2FF5FD" stop-opacity="0.62" />
          <stop offset="1" stop-color="#00A1A7" stop-opacity="0.29" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_261_12007"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(37.5 34) rotate(90) scale(34 37.5)"
        >
          <stop offset="0.46" stop-color="#2FF5FD" stop-opacity="0.62" />
          <stop offset="1" stop-color="#00A1A7" stop-opacity="0.29" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default LarpLogo;
export { LarpLogo as ReactComponent };
