export default function Logo() {
  return (
    <svg
      className="logo-svg"
      width="40"
      height="40"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e5fba" />
          <stop offset="100%" stopColor="#0a3a82" />
        </radialGradient>

        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a5c7f7" />
        </linearGradient>
      </defs>

      <circle
        cx="250"
        cy="250"
        r="230"
        fill="url(#bgGradient)"
        stroke="#164691"
        strokeWidth="10"
      />

      <g
        fill="none"
        stroke="url(#starGradient)"
        strokeWidth="12"
        strokeLinejoin="round"
      >
        <path d="M250 100 L400 360 L100 360 Z" />
        <path d="M250 400 L400 140 L100 140 Z" />
      </g>
    </svg>
  );
}
