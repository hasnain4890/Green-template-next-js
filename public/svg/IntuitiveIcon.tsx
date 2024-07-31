import React from 'react';

interface IntuitiveIconprops {
  className?: string;
}

const IntuitiveIcon: React.FC<IntuitiveIconprops> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="49.5" fill="#5F5F5F" fill-opacity="0.2" stroke="#353535" />
      <path
        d="M51 31.1886C46.6741 31.1883 42.4451 32.4971 38.8479 34.9496C35.2507 37.4021 32.4467 40.8881 30.7903 44.9669C29.134 49.0458 28.6998 53.5343 29.5425 57.865C30.3853 62.1957 32.4672 66.1741 35.525 69.2973C35.8096 69.5981 35.9671 70.0009 35.9636 70.4191C35.96 70.8372 35.7957 71.2372 35.506 71.5329C35.2163 71.8286 34.8244 71.9963 34.4147 71.9999C34.005 72.0036 33.6103 71.8428 33.3156 71.5523C29.8212 67.983 27.4421 63.4364 26.479 58.4873C25.5159 53.5381 26.0121 48.4086 27.9048 43.7472C29.7976 39.0858 33.0019 35.1019 37.1127 32.2989C41.2235 29.496 46.0563 28 51 28C55.9437 28 60.7765 29.496 64.8873 32.2989C68.9981 35.1019 72.2024 39.0858 74.0952 43.7472C75.9879 48.4086 76.4841 53.5381 75.521 58.4873C74.5579 63.4364 72.1788 67.983 68.6844 71.5523C68.3897 71.8428 67.995 72.0036 67.5853 71.9999C67.1756 71.9963 66.7837 71.8286 66.494 71.5329C66.2043 71.2372 66.04 70.8372 66.0364 70.4191C66.0329 70.0009 66.1904 69.5981 66.475 69.2973C69.5328 66.1741 71.6147 62.1957 72.4575 57.865C73.3002 53.5343 72.866 49.0458 71.2097 44.9669C69.5533 40.8881 66.7493 37.4021 63.1521 34.9496C59.5549 32.4971 55.3259 31.1883 51 31.1886ZM51 40.7573C48.529 40.7572 46.1134 41.5046 44.0583 42.9051C42.0033 44.3055 40.4011 46.2963 39.454 48.6257C38.507 50.9552 38.2576 53.5189 38.7375 55.993C39.2173 58.467 40.4049 60.7404 42.15 62.5259C42.299 62.6732 42.4178 62.8494 42.4994 63.0441C42.581 63.2388 42.6238 63.4481 42.6253 63.6598C42.6268 63.8716 42.587 64.0815 42.5082 64.2774C42.4293 64.4732 42.3131 64.6511 42.1662 64.8006C42.0192 64.9502 41.8446 65.0683 41.6525 65.1482C41.4604 65.2281 41.2546 65.2682 41.0471 65.2661C40.8397 65.2639 40.6347 65.2197 40.4442 65.1358C40.2537 65.052 40.0814 64.9302 39.9375 64.7777C37.756 62.5455 36.2717 59.7034 35.6721 56.6106C35.0726 53.5177 35.3847 50.3128 36.569 47.4009C37.7533 44.489 39.7567 42.0007 42.3261 40.2505C44.8954 38.5003 47.9154 37.5666 51.0044 37.5675C54.0934 37.5684 57.1129 38.5038 59.6813 40.2555C62.2496 42.0072 64.2516 44.4967 65.4344 47.4092C66.6171 50.3218 66.9274 53.5269 66.3261 56.6194C65.7249 59.7119 64.239 62.5532 62.0562 64.7841C61.762 65.0751 61.3675 65.2364 60.9578 65.2334C60.5481 65.2303 60.1559 65.0632 59.8658 64.7679C59.5757 64.4726 59.4108 64.0729 59.4067 63.6547C59.4026 63.2366 59.5595 62.8335 59.8437 62.5323C61.5907 60.7475 62.7799 58.4741 63.2612 55.9996C63.7425 53.5251 63.4942 50.9604 62.5477 48.6299C61.6011 46.2994 59.9989 44.3076 57.9435 42.9063C55.8881 41.505 53.4718 40.7572 51 40.7573ZM51 47.1363C49.3424 47.1363 47.7527 47.8084 46.5806 49.0047C45.4085 50.2011 44.75 51.8236 44.75 53.5154C44.75 55.2073 45.4085 56.8298 46.5806 58.0261C47.7527 59.2225 49.3424 59.8945 51 59.8945C52.6576 59.8945 54.2473 59.2225 55.4194 58.0261C56.5915 56.8298 57.25 55.2073 57.25 53.5154C57.25 51.8236 56.5915 50.2011 55.4194 49.0047C54.2473 47.8084 52.6576 47.1363 51 47.1363ZM47.875 53.5154C47.875 52.6695 48.2042 51.8582 48.7903 51.2601C49.3763 50.6619 50.1712 50.3259 51 50.3259C51.8288 50.3259 52.6237 50.6619 53.2097 51.2601C53.7958 51.8582 54.125 52.6695 54.125 53.5154C54.125 54.3614 53.7958 55.1726 53.2097 55.7708C52.6237 56.3689 51.8288 56.705 51 56.705C50.1712 56.705 49.3763 56.3689 48.7903 55.7708C48.2042 55.1726 47.875 54.3614 47.875 53.5154Z"
        fill="#00C4F4"
      />
    </svg>
  );
};

export default IntuitiveIcon;
export { IntuitiveIcon as ReactComponent };