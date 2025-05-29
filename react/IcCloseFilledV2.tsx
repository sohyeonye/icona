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
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m4.207-4.793a1 1 0 0 1-1.414 0L12 13.414l-2.793 2.793a1 1 0 0 1-1.414-1.414L10.586 12 7.793 9.207a1 1 0 0 1 1.414-1.414L12 10.586l2.793-2.793a1 1 0 1 1 1.414 1.414L13.414 12l2.793 2.793a1 1 0 0 1 0 1.414"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
