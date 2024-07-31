import React from "react";

interface HerosectionbgTwoprops {
  className?: string;
}

const HerosectionbgTwo: React.FC<HerosectionbgTwoprops> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="650"
      height="350"
      viewBox="0 0 394 191"
      fill="none"
    >
      <path
        d="M325.341 68.4678C346.123 71.1304 360.812 90.1362 358.149 110.918C355.487 131.701 336.481 146.39 315.699 143.727C294.916 141.064 280.227 122.059 282.89 101.276C285.553 80.494 304.558 65.8052 325.341 68.4678ZM316.902 134.332C332.496 136.329 346.756 125.308 348.754 109.715C350.752 94.1214 339.73 79.8609 324.137 77.8631C308.544 75.8653 294.283 86.8867 292.285 102.48C290.288 118.073 301.309 132.334 316.902 134.332Z"
        fill="url(#paint0_angular_274_100)"
      />
      <path
        d="M393.749 100.604C394.303 149.431 355.186 189.463 306.377 190.017C257.568 190.572 217.551 151.438 216.997 102.611C216.442 53.7837 255.56 13.7519 304.369 13.1977C353.178 12.6435 393.194 51.7766 393.749 100.604ZM243.462 102.311C243.85 136.516 271.884 163.93 306.076 163.542C340.269 163.154 367.672 135.11 367.284 100.905C366.895 66.6991 338.862 39.2849 304.67 39.6731C270.477 40.0614 243.074 68.1051 243.462 102.311Z"
        fill="url(#paint1_linear_274_100)"
      />
      <path
        d="M240.5 161.655L223.512 135C223.512 135 226.35 132.489 214.802 142.42C202.278 153.192 201.046 154.876 174.631 156.835C148.216 158.795 110.724 157.561 110.724 157.561L0.882751 156.947L0.882783 182.475L126.278 183.726L177.776 183.141C191.729 182.983 204.862 182.82 220.446 174.952C234.464 167.873 240.5 161.655 240.5 161.655Z"
        fill="url(#paint2_linear_274_100)"
      />
      <path
        d="M309.109 52.9866C309.109 82.2503 285.386 105.973 256.122 105.973C226.858 105.973 203.135 82.2503 203.135 52.9866C203.135 23.7229 226.858 0 256.122 0C285.386 0 309.109 23.7229 309.109 52.9866ZM216.365 52.9866C216.365 74.9438 234.165 92.7435 256.122 92.7435C278.079 92.7435 295.879 74.9438 295.879 52.9866C295.879 31.0295 278.079 13.2297 256.122 13.2297C234.165 13.2297 216.365 31.0295 216.365 52.9866Z"
        fill="url(#paint3_angular_274_100)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_274_100"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(241.699 52.9866) rotate(74.7736) scale(54.9144)"
        >
          <stop offset="0.61" stop-color="#0F1C1E" />
          <stop offset="1" stop-color="#39CB75" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_274_100"
          x1="375.353"
          y1="71.8134"
          x2="52.0747"
          y2="25.5512"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.465" stop-color="#0F1C1E" />
          <stop offset="1" stop-color="#39CB75" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_274_100"
          x1="375.353"
          y1="71.8134"
          x2="52.0747"
          y2="25.5512"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.465" stop-color="#0F1C1E" />
          <stop offset="1" stop-color="#39CB75" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint3_angular_274_100"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(241.699 52.9866) rotate(74.7736) scale(54.9144)"
        >
          <stop offset="0.61" stop-color="#0F1C1E" />
          <stop offset="1" stop-color="#39CB75" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default HerosectionbgTwo;
export { HerosectionbgTwo as ReactComponent };
