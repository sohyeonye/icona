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
      height={20}
      x={4}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path d="M4 5.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3V12a1 1 0 1 1-2 0V5.5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3z" />
        <path d="M8 7.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 7.25M8.75 9.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM8 13.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M20.731 15.682a1 1 0 0 0-1.462-1.364l-3.977 4.261-1.602-1.525a1 1 0 0 0-1.38 1.448l2.334 2.222a1 1 0 0 0 1.42-.042z" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
