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
      width={18}
      height={18}
      x={3}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path d="M7.75 7.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM7 11.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75" />
        <path
          fillRule="evenodd"
          d="M12 3a1 1 0 0 1 1 1h5a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-5v2h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-2H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h5a1 1 0 0 1 1-1M6 6h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1"
          clipRule="evenodd"
        />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
