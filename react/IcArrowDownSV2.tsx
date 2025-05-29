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
      width={14}
      height={15}
      x={5}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12.763 18.793a1.1 1.1 0 0 1-1.526 0l-5-4.813a1.1 1.1 0 0 1 1.526-1.585l3.137 3.02V7a1.1 1.1 0 0 1 2.2 0v8.415l3.137-3.02a1.1 1.1 0 1 1 1.526 1.585z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
