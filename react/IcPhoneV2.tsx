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
        d="M3.504 5.57c-.077-1.173.88-2.07 1.969-2.07h1.532c1.127 0 1.954.902 2.044 1.914q.092 1.023.373 1.983a2.06 2.06 0 0 1-.507 2.033l-1.752 1.752a14.1 14.1 0 0 0 5.655 5.655l1.755-1.755a2.05 2.05 0 0 1 2.024-.509c.644.186 1.309.315 1.991.377 1.01.091 1.912.918 1.912 2.045v1.532c0 1.089-.897 2.046-2.07 1.969-8.003-.527-14.399-6.923-14.926-14.926m11.272 12.142c1.175.42 2.424.689 3.72.78v-1.497q.001-.003-.01-.014a.13.13 0 0 0-.079-.035 12.7 12.7 0 0 1-2.364-.447.1.1 0 0 0-.046-.003l-.007.003zM6.287 9.224l1.21-1.21q.003-.002.004-.008a.1.1 0 0 0-.003-.05 12.3 12.3 0 0 1-.445-2.366.13.13 0 0 0-.034-.077l-.013-.01H5.507c.092 1.297.36 2.546.78 3.721m1.21-1.21"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
