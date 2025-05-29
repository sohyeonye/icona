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
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m3.5-4a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-1.02a.5.5 0 0 0-.5.5v6.093l-3.807-6.35A.5.5 0 0 0 9.743 7H8.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1.027a.5.5 0 0 0 .5-.5v-6.08l3.8 6.337a.5.5 0 0 0 .43.243z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
