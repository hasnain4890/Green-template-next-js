import React from "react";

interface CardbgProps {
  className?: string;
}

const Cardbg: React.FC<CardbgProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="401"
      height="307"
      viewBox="0 0 401 307"
      fill="none"
    >
      <path
        d="M1 65.071L53.6298 1H400.3V306.481H53.6298L1 245.843V65.071Z"
        fill="white"
        fill-opacity="0.04"
        stroke="#39CB75"
        stroke-width="0.5"
      />
    </svg>
  );
};

export default Cardbg;
export { Cardbg as ReactComponent };
