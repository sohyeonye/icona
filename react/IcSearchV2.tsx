/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="prefix__a"
      width={20}
      height={19}
      x={2}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.587 4.843l3.047 2.66a1 1 0 0 1-1.315 1.506l-2.99-2.61A9 9 0 0 1 2 11"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
