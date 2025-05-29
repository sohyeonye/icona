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
      width={17}
      height={15}
      x={3}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M3 12.5a1 1 0 0 1 .296-.71l6.563-6.5a1 1 0 0 1 1.407 1.42L6.431 11.5H19a1 1 0 1 1 0 2H6.43l4.836 4.79a1 1 0 0 1-1.407 1.42l-6.563-6.5A1 1 0 0 1 3 12.5"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
