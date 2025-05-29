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
      height={16}
      x={4}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M21 12a1 1 0 0 1-.296.71l-6.563 6.5a1 1 0 0 1-1.407-1.42L17.569 13H5a1 1 0 1 1 0-2h12.57l-4.836-4.79a1 1 0 0 1 1.407-1.42l6.563 6.5A1 1 0 0 1 21 12"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
