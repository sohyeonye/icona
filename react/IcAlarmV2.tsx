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
      height={20}
      x={3}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#000">
        <path
          fillRule="evenodd"
          d="M12 2C7.88 2 4.619 5.507 4.619 9.72v1.442l-1.457 2.895-.018.049C2.646 15.417 3.522 17 5.058 17h13.875c1.522 0 2.427-1.57 1.925-2.894l-.018-.049-1.457-2.895V9.72C19.383 5.507 16.122 2 12 2M6.619 9.72C6.618 6.513 9.08 4 12.001 4c2.92 0 5.382 2.513 5.382 5.72v1.917l1.613 3.206c.01.046 0 .089-.022.122a.1.1 0 0 1-.03.033l-.004.001-.007.001H5.058l-.006-.001a.1.1 0 0 1-.027-.029.17.17 0 0 1-.02-.126l1.613-3.206z"
          clipRule="evenodd"
        />
        <path d="M9.77 18.362a1 1 0 0 0-1.54 1.276C9.233 20.849 10.593 21.5 12 21.5c1.406 0 2.766-.65 3.77-1.862a1 1 0 1 0-1.54-1.276c-.654.789-1.465 1.138-2.23 1.138-.766 0-1.577-.35-2.23-1.138" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
