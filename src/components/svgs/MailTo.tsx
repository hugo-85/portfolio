import type { SVGProps } from "react";
const MailToIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      fill="none"
      d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"
    />
    <path fill="none" d="M19 22v-6" />
    <path fill="none" d="M22 19l-3 -3l-3 3" />
    <path fill="none" d="M3 7l9 6l9 -6" />
  </svg>
);
export default MailToIcon;
