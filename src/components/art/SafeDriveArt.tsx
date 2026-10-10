export default function SafeDriveArt() {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Illustration of a driver monitoring overlay on a vehicle dashboard">
      <rect width="400" height="220" fill="#070b17" />
      <path d="M0 190 Q200 130 400 190 V220 H0Z" fill="#0b1226" />
      <circle cx="200" cy="170" r="48" fill="none" stroke="#1e293b" strokeWidth="6" />
      <path d="M152 170h96M200 170v48" stroke="#1e293b" strokeWidth="6" />
      {/* face */}
      <ellipse cx="200" cy="88" rx="38" ry="46" fill="#111a33" stroke="#22d3ee" strokeOpacity=".5" />
      <path d="M176 82q9-6 18 0M206 82q9-6 18 0" stroke="#22d3ee" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M188 112q12 6 24 0" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* detection box */}
      <g stroke="#22d3ee" strokeWidth="2" fill="none">
        <path d="M150 38v-10h10M250 38v-10h-10M150 138v10h10M250 138v10h-10" />
      </g>
      <rect x="170" y="70" width="60" height="22" fill="none" stroke="#8b5cf6" strokeDasharray="3 3" />
      <rect x="150" y="30" width="100" height="2" fill="#22d3ee" className="animate-scan" style={{ transformBox: 'fill-box' }} opacity=".6" />
      {/* HUD */}
      <g fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="#94a3b8">
        <rect x="16" y="16" width="96" height="46" rx="8" fill="#ffffff08" stroke="#ffffff1a" />
        <text x="26" y="34">Driver monitoring</text>
        <circle cx="30" cy="48" r="4" fill="#22d3ee" /><text x="40" y="52" fill="#fff">Live</text>
        <rect x="288" y="16" width="96" height="46" rx="8" fill="#ffffff08" stroke="#ffffff1a" />
        <text x="298" y="34">Safety alert</text>
        <text x="298" y="52" fill="#fff">Ready</text>
      </g>
    </svg>
  )
}
