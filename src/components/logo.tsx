import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
      aria-label="Nihongo Tamashii Logo"
      {...props}
    >
      <path
        fill="none"
        d="M50,5 C25.1,5 5,25.1 5,50 C5,74.9 25.1,95 50,95 C74.9,95 95,74.9 95,50 C95,37.6 89.9,26.4 81.7,18.3"
        stroke="hsl(var(--sidebar-primary))"
        strokeWidth="10"
        strokeLinecap="round"
        transform="rotate(120 50 50)"
      />
    </svg>
  );
}
