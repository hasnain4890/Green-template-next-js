import React from "react";

interface Herosectionbgprops {
  className?: string;
}

const Herosectionbg: React.FC<Herosectionbgprops> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1050"
      height="580"
      viewBox="0 0 1162 607"
      fill="none"
    >
      <path
        d="M1035.77 218.377C1102.06 226.869 1148.91 287.488 1140.41 353.772C1131.92 420.057 1071.3 466.907 1005.02 458.415C938.734 449.922 891.884 389.304 900.377 323.019C908.869 256.734 969.488 209.884 1035.77 218.377ZM1008.86 428.448C1058.59 434.82 1104.08 399.668 1110.45 349.933C1116.82 300.198 1081.67 254.715 1031.93 248.343C982.198 241.971 936.715 277.124 930.343 326.858C923.971 376.593 959.124 422.076 1008.86 428.448Z"
        fill="url(#paint0_angular_119_108)"
      />
      <path
        d="M1253.96 320.875C1255.73 476.609 1130.96 604.29 975.287 606.058C819.613 607.825 691.98 483.011 690.211 327.277C688.443 171.542 813.209 43.8617 968.883 42.094C1124.56 40.3263 1252.19 165.141 1253.96 320.875ZM774.622 326.318C775.861 435.416 865.272 522.853 974.328 521.615C1083.38 520.376 1170.79 430.931 1169.55 321.834C1168.31 212.736 1078.9 125.299 969.842 126.537C860.786 127.775 773.383 217.22 774.622 326.318Z"
        fill="url(#paint1_linear_119_108)"
      />
      <path
        d="M805.266 483.61L750.352 353.636C750.352 353.636 720.042 422.572 683.212 454.247C643.266 488.602 639.337 493.974 555.087 500.223C470.837 506.473 351.257 502.538 351.257 502.538L0.919067 500.58L0.919168 582L400.865 585.99L565.117 584.125C609.62 583.62 651.507 583.103 701.214 558.005C745.924 535.43 805.266 483.61 805.266 483.61Z"
        fill="url(#paint2_linear_119_108)"
      />
      <path
        d="M984 169C984 262.336 908.336 338 815 338C721.664 338 646 262.336 646 169C646 75.6639 721.664 0 815 0C908.336 0 984 75.6639 984 169ZM688.196 169C688.196 239.032 744.968 295.804 815 295.804C885.032 295.804 941.804 239.032 941.804 169C941.804 98.9681 885.032 42.196 815 42.196C744.968 42.196 688.196 98.9681 688.196 169Z"
        fill="url(#paint3_angular_119_108)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_119_108"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(769 169) rotate(74.7736) scale(175.149 175.149)"
        >
          <stop offset="0.61" stop-color="#0F1C1E" />
          <stop offset="1" stop-color="#39CB75" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_119_108"
          x1="1196.19"
          y1="231.776"
          x2="168.713"
          y2="73.9689"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.465" stop-color="#0F1C1E" />
          <stop offset="1" stop-color="#39CB75" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_119_108"
          x1="1196.19"
          y1="231.776"
          x2="168.713"
          y2="73.9689"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.465" stop-color="#0F1C1E" />
          <stop offset="1" stop-color="#39CB75" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint3_angular_119_108"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(769 169) rotate(74.7736) scale(175.149 175.149)"
        >
          <stop offset="0.61" stop-color="#0F1C1E" />
          <stop offset="1" stop-color="#39CB75" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Herosectionbg;
export { Herosectionbg as ReactComponent };
