import React from "react";

interface MediumProps {
  className?: string;
}

const Medium: React.FC<MediumProps> = ({ className }) => {
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
        d="M14 15V51.2888H52.5568V15H14ZM46.0331 23.5943L43.9676 25.4573C43.7869 25.5869 43.7008 25.7975 43.7352 26V39.7136C43.7008 39.9242 43.7869 40.1348 43.9676 40.2563L45.9901 42.1194V42.5325H35.8345V42.1356L37.9259 40.2239C38.1324 40.0295 38.1324 39.9728 38.1324 39.6812V28.5921L32.3145 42.492H31.5313L24.758 28.5921V37.9073C24.6978 38.2961 24.8441 38.693 25.1367 38.9765L27.8564 42.0789V42.492H20.1278V42.0789L22.8474 38.9765C23.14 38.693 23.2691 38.2961 23.2003 37.9073V27.1341C23.2347 26.8343 23.1142 26.5427 22.8732 26.3402L20.4548 23.5943V23.1812H27.9682L33.769 35.1694L38.8726 23.1893H46.0331V23.5943Z"
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

export default Medium;
export { Medium as ReactComponent };
