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
        <path d="M9 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
        <path
          fillRule="evenodd"
          d="M3.5 6.5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2.512A10 10 0 0 1 18.5 9.012V6.5a1 1 0 0 0-1-1zm11 13h-6.485a8 8 0 0 1 7.485-7.485V17.5a1 1 0 0 1-1 1"
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
