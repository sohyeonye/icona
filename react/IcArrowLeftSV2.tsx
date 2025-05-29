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
      width={15}
      height={14}
      x={4}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M5.207 12.763a1.1 1.1 0 0 1 0-1.526l4.813-5a1.1 1.1 0 1 1 1.585 1.526L8.585 10.9H17a1.1 1.1 0 0 1 0 2.2H8.585l3.02 3.137a1.1 1.1 0 0 1-1.585 1.526z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
