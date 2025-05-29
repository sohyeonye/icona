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
      width={19}
      height={19}
      x={3}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M5.923 13.74a3.134 3.134 0 0 0 4.433 4.433l8.792-8.792a1.756 1.756 0 1 0-2.484-2.483L7.872 15.69a.378.378 0 0 0 .535.534l8.235-8.235a1 1 0 1 1 1.414 1.414L9.821 17.64a2.378 2.378 0 1 1-3.363-3.363l8.792-8.793a3.756 3.756 0 0 1 5.312 5.312l-8.792 8.792a5.134 5.134 0 1 1-7.26-7.26l8.234-8.236a1 1 0 0 1 1.415 1.415z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
