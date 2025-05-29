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
      width={4}
      height={14}
      x={10}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        d="M12 19q-.619-.002-1.057-.442A1.45 1.45 0 0 1 10.5 17.5q.002-.619.443-1.058A1.45 1.45 0 0 1 12 16q.619.002 1.057.442.441.439.443 1.058-.002.619-.443 1.058A1.45 1.45 0 0 1 12 19m0-5.5q-.619-.002-1.057-.443A1.45 1.45 0 0 1 10.5 12q.002-.619.443-1.057A1.45 1.45 0 0 1 12 10.5q.619.002 1.057.443.441.438.443 1.057-.002.619-.443 1.057A1.45 1.45 0 0 1 12 13.5M12 8c-.412 0-.765-.15-1.057-.442A1.45 1.45 0 0 1 10.5 6.5q.002-.618.443-1.057A1.45 1.45 0 0 1 12 5c.412 0 .765.15 1.057.442q.441.44.443 1.058-.002.618-.443 1.058A1.45 1.45 0 0 1 12 8"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
