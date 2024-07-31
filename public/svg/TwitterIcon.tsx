import React from "react";

interface TwitterProps {
  className?: string;
}

const Twitter: React.FC<TwitterProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 65 65"
      fill="none"
    >
      <path
        d="M35.5475 30.4453L46.5237 17H43.9224L34.3921 28.6741L26.7798 17H18L29.5111 34.6535L18 48.7527H20.6013L30.666 36.4244L38.7048 48.7527H47.4846L35.5467 30.4453H35.5475ZM31.9848 34.8088L30.8183 33.051L21.5384 19.0634H25.5338L33.0224 30.352L34.1887 32.1098L43.9236 46.783H39.9287L31.9848 34.8095V34.8088Z"
        fill="#878693"
      />
      <circle
        cx="32.5"
        cy="32.5"
        r="31.75"
        stroke="#39cb75"
        stroke-width="1.5"
      />
    </svg>
  );
};

export default Twitter;
export { Twitter as ReactComponent };
