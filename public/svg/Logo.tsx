import React from 'react';
interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="48"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 1410089105">
        <path
          id="Vector 39"
          d="M29.3351 0.00684305L26.5361 5.9716L35.133 21.7781L22.9466 44.1616L29.2936 44.4667L41.2847 21.9469L29.3351 0.00684305Z"
          fill="white"
        />
        <path
          id="Vector 42"
          d="M32.3573 22.5762L23.0471 4.81042L14.1386 4.19517L4.96541 21.0796L13.6549 37.661L16.1464 33.0529L10.0948 21.5052L18.4751 6.16852L26.0396 20.6032L14.9733 18.5712L13.3451 21.4058L23.7346 40.3654L24.1219 39.6296L26.1799 35.8149L19.8956 23.823L30.7291 25.4108L32.3573 22.5762Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
export { Logo as ReactComponent };
export default Logo;
