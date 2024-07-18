import type { SVGProps } from "react";
const MswIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 128 128"
    {...props}
  >
    <title>{"LOGO"}</title>
    <g fill="none" fillRule="evenodd">
      <rect width={128} height={128} fill="#000" rx={24} />
      <g strokeWidth={17.85}>
        <path
          stroke="#F33"
          d="M86.71 77.637a10.626 10.626 0 0 1 2.723 7.69 10.626 10.626 0 0 1-3.512 7.364 10.659 10.659 0 0 1-7.143 2.738l-45.952-.048a3.305 3.305 0 0 1-2.343-.973c-.6-.6-.97-1.43-.969-2.345l4.774-46.045a10.626 10.626 0 0 1 3.886-7.174 10.626 10.626 0 0 1 7.82-2.325 10.659 10.659 0 0 1 6.817 3.47Z"
          opacity={0.48}
        />
        <path
          stroke="#FF6A33"
          d="M30.237 38.088a3.305 3.305 0 0 1-.847-2.392 3.315 3.315 0 0 1 3.314-3.142l62.47.065c.916 0 1.744.373 2.343.973.6.6.97 1.43.969 2.345l-6.484 62.474a3.305 3.305 0 0 1-1.208 2.231 3.315 3.315 0 0 1-4.552-.356Z"
        />
      </g>
    </g>
  </svg>
);
export default MswIcon;
