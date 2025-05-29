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
      height={18}
      x={2}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9.756 3.594C10.35 3.218 11.093 3 12 3s1.65.218 2.244.594c.588.374.974.87 1.222 1.343a4.3 4.3 0 0 1 .476 1.676L15.95 7H19a2.95 2.95 0 0 1 2.95 2.95v7.5A2.95 2.95 0 0 1 19 20.4H5a2.95 2.95 0 0 1-2.95-2.95v-7.5A2.95 2.95 0 0 1 5 7h3.05l.009-.387a4.34 4.34 0 0 1 .475-1.676 3.5 3.5 0 0 1 1.222-1.343m4.344 3.27v.186H10v-.192l.003-.053a2.448 2.448 0 0 1 .263-.935c.127-.24.304-.46.559-.622.25-.159.632-.298 1.225-.298s.974.139 1.225.298c.255.162.432.381.559.622a2.44 2.44 0 0 1 .266.988zM7.8 18.55v-9.6h8.5v9.6zm10 0v-9.6h1.25c.58 0 1.05.47 1.05 1.05v7.5c0 .58-.47 1.05-1.05 1.05zM6.3 8.95H5.05C4.47 8.95 4 9.42 4 10v7.5c0 .58.47 1.05 1.05 1.05H6.3z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
