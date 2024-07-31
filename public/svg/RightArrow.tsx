import React from 'react';

interface RightArrowProps {
  className?: string;
}

const RightArrow: React.FC<RightArrowProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="19" height="9" viewBox="0 0 19 9" fill="none">
      <path d="M14.2619 3.375H0V5.625H14.2619V9L19 4.5L14.2619 0V3.375Z" fill="#E5E6E5" />
    </svg>
  );
};

export default RightArrow;
export { RightArrow as ReactComponent };
