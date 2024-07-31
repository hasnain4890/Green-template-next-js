import React from 'react';

interface TokenModuleProps {
  className?: string;
}

const TokenModule: React.FC<TokenModuleProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="107"
      height="112"
      viewBox="0 0 107 112"
      fill="none"
    >
      <path
        d="M58.4063 100.073V89.2092C58.4063 86.8091 56.4607 84.8635 54.0607 84.8635H13.8632C11.4632 84.8635 9.51758 86.8091 9.51758 89.2092V100.073"
        stroke="#15231D"
        strokeWidth="1.08642"
      />
      <path
        d="M95.3238 0.538023L84.2243 0.551488C81.8243 0.5544 79.881 2.50238 79.8839 4.90243L79.9293 42.2903C79.9322 44.6904 81.8802 46.6336 84.2802 46.6307L95.3797 46.6172"
        stroke="#15231D"
        strokeWidth="1.08642"
      />
      <rect
        x="10.0608"
        y="0.666255"
        width="47.8023"
        height="46.7159"
        rx="3.80246"
        stroke="#15231D"
        strokeWidth="1.08642"
      />
      <circle
        cx="53.9097"
        cy="58.6385"
        r="39.7739"
        transform="rotate(24.3991 53.9097 58.6385)"
        fill="#13111C"
        stroke="#42946E"
        strokeWidth="0.65185"
      />
      <path
        d="M49 62V50.7082L57.9727 45.6426C62.9442 42.8353 71.8447 49.7594 68.1081 56.0953"
        stroke="#42946E"
        strokeLinejoin="round"
      />
      <path
        d="M49 56.6834L58.6306 51L67.2727 56.0993C72.061 58.9252 70.4392 70 63.2336 70"
        stroke="#42946E"
        strokeLinejoin="round"
      />
      <path
        d="M53.5269 53L64 58.8103V69.2445C64 75.0225 52.9138 79.2188 49 72.6984"
        stroke="#42946E"
        strokeLinejoin="round"
      />
      <path
        d="M59 56V67.2225L50.0273 72.3496C45.0558 75.191 36.1553 68.1829 39.8919 61.77"
        stroke="#42946E"
        strokeLinejoin="round"
      />
      <path
        d="M59 61.3166L48.9136 67L39.8625 61.9007C34.8396 59.0669 36.5382 48 44.0848 48"
        stroke="#42946E"
        strokeLinejoin="round"
      />
      <path
        d="M53.7749 65L44 59.1897V48.7555C44 42.9775 54.3471 38.7812 58 45.3016"
        stroke="#42946E"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TokenModule;
export { TokenModule as ReactComponent };
