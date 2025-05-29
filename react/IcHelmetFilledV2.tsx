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
        d="M12.122 3C5.925 2.993 3.86 6.924 2.83 9.07l-.78 1.937a.724.724 0 0 0 .365.921l.75.346c0 2.498 1.03 4.644 2.752 5.357.515.216 6.747 2.06 6.747 2.06l.627.184h.001c1.077.32 2.196.65 3.296.982.872.295 2.28.295 2.866-1.599a1.82 1.82 0 0 0 1.343-1.13c.422-1.066 1.115-3.348 1.201-6.884a2.13 2.13 0 0 0-.886-1.778l-.758-.547a3 3 0 0 0-.25-.166C19.44 6.161 17.396 3.007 12.122 3m8.331 9.982c-.153 1.807-.416 3.105-.702 4.018-.666-.303-1.372-.562-2.082-.823-1.47-.54-2.956-1.085-4.142-2.037a18 18 0 0 1-.015-1.668q.01-.405.011-.804c0-.365.112-.49.17-.537.077-.066.223-.127.445-.131l6.283.422c.113.41.087.917.032 1.56M8 11.5A1.5 1.5 0 1 1 9.5 13 1.5 1.5 0 0 1 8 11.5"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
