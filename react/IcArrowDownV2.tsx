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
      width={16}
      height={17}
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
        d="M12 21a1 1 0 0 1-.71-.296l-6.5-6.563a1 1 0 1 1 1.42-1.407L11 17.569V5a1 1 0 1 1 2 0v12.57l4.79-4.836a1 1 0 0 1 1.42 1.407l-6.5 6.563A1 1 0 0 1 12 21"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
