import React from "react";

interface RightArrowTwoProps {
  className?: string;
}

const RightArrowTwo: React.FC<RightArrowTwoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <path
        d="M37.584 28.2293C36.709 29.0835 36.209 30.3126 36.334 31.6251C36.5215 33.8751 38.584 35.521 40.834 35.521H44.7923V38.0001C44.7923 42.3126 41.2715 45.8335 36.959 45.8335H13.0423C8.72982 45.8335 5.20898 42.3126 5.20898 38.0001V23.9793C5.20898 19.6668 8.72982 16.146 13.0423 16.146H36.959C41.2715 16.146 44.7923 19.6668 44.7923 23.9793V26.9794H40.584C39.4173 26.9794 38.3548 27.4376 37.584 28.2293Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.20898 25.8542V16.3335C5.20898 13.8543 6.72982 11.6459 9.04232 10.7709L25.584 4.5209C28.1673 3.54173 30.9382 5.45846 30.9382 8.22929V16.1459"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M46.9982 29.1044V33.3962C46.9982 34.542 46.0815 35.4794 44.9148 35.5211H40.8315C38.5815 35.5211 36.519 33.8753 36.3315 31.6253C36.2065 30.3128 36.7065 29.0836 37.5815 28.2294C38.3523 27.4378 39.4148 26.9795 40.5815 26.9795H44.9148C46.0815 27.0212 46.9982 27.9586 46.9982 29.1044Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.584 25H29.1673"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RightArrowTwo;
export { RightArrowTwo as ReactComponent };
