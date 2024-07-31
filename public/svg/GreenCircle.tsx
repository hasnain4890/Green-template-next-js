import React from "react";

interface GreenCircleProps {
  className?: string;
}

const GreenCircle: React.FC<GreenCircleProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
    >
      <circle cx="4" cy="4" r="4" fill="#39CB75" />
    </svg>
  );
};

export default GreenCircle;
export { GreenCircle as ReactComponent };
