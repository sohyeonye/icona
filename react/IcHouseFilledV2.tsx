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
      height={21}
      x={2}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M9.477 2.762a4 4 0 0 1 5.046 0l6 4.877A4 4 0 0 1 22 10.743v5.965c0 2.407-1.725 4.512-4.157 4.849-1.234.17-2.632.334-3.797.388-1.59.073-2.501.073-4.092 0-1.165-.054-2.563-.217-3.797-.388C3.725 21.22 2 19.115 2 16.707v-5.964a4 4 0 0 1 1.477-3.104zm6.59 14.061a1 1 0 1 0-1.135-1.646c-.768.53-1.826.823-2.933.823s-2.164-.294-2.931-.823a1 1 0 1 0-1.136 1.646c1.165.804 2.64 1.177 4.067 1.177s2.903-.373 4.069-1.177"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
