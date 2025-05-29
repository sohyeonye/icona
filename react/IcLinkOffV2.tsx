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
      width={22}
      height={20}
      x={1}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l2.943 2.944A6.1 6.1 0 0 0 8 18.1h1.5a1.1 1.1 0 0 0 0-2.2H8a3.9 3.9 0 0 1-.865-7.704L9.84 10.9H9a1.1 1.1 0 0 0 0 2.2h3.04l2.8 2.8H14.5a1.1 1.1 0 0 0 0 2.2H16q.492 0 .964-.076l3.506 3.506a.75.75 0 1 0 1.06-1.06zM17.654 15.533l1.617 1.617A6.1 6.1 0 0 0 16 5.9h-1.5a1.1 1.1 0 0 0 0 2.2H16a3.9 3.9 0 0 1 1.654 7.433" />
        <path d="m13.022 10.9 2.18 2.181a1.1 1.1 0 0 0-.202-2.18zM10.065 7.944 8.021 5.9H9.5a1.1 1.1 0 0 1 .565 2.044" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
