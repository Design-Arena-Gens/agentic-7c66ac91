const PerformerScene = () => {
  return (
    <svg
      viewBox="0 0 900 600"
      role="img"
      aria-labelledby="performer-title performer-desc"
      className="w-full max-w-[720px]"
    >
      <title id="performer-title">
        Energetic Indian performer singing into a vintage microphone
      </title>
      <desc id="performer-desc">
        A young Indian man on stage wearing a dark sweater and green scarf,
        illuminated by blue concert lights with an excited audience in the
        background.
      </desc>
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#75b5ff" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#3064d6" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#0c1b43" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id="stageGradient" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#112e5c" />
          <stop offset="50%" stopColor="#081a38" />
          <stop offset="100%" stopColor="#0f2c54" />
        </linearGradient>
        <linearGradient id="spotlightLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6dc7ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#153c6b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="spotlightRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7ae2ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#14427a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f1c089" />
          <stop offset="100%" stopColor="#d28a57" />
        </linearGradient>
        <linearGradient id="sweater" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#101c32" />
          <stop offset="30%" stopColor="#0f1729" />
          <stop offset="100%" stopColor="#060a12" />
        </linearGradient>
        <linearGradient id="scarf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a6ff9d" />
          <stop offset="40%" stopColor="#5ae27a" />
          <stop offset="100%" stopColor="#13894a" />
        </linearGradient>
        <linearGradient id="micMetal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4d8e6" />
          <stop offset="50%" stopColor="#8b95af" />
          <stop offset="100%" stopColor="#636a7d" />
        </linearGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        <filter id="bokehBlur">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <rect width="900" height="600" fill="#071325" />
      <rect width="900" height="600" fill="url(#bgGlow)" />

      <g opacity="0.75">
        <polygon
          points="0,0 240,0 410,330 0,330"
          fill="url(#spotlightLeft)"
        />
        <polygon
          points="900,0 660,0 490,330 900,330"
          fill="url(#spotlightRight)"
        />
      </g>

      <ellipse
        cx="450"
        cy="540"
        rx="360"
        ry="110"
        fill="url(#stageGradient)"
        opacity="0.95"
      />

      <g opacity="0.45">
        <ellipse cx="180" cy="420" rx="110" ry="60" fill="#1c3566" />
        <ellipse cx="725" cy="430" rx="140" ry="70" fill="#1d3668" />
        <ellipse cx="350" cy="470" rx="120" ry="65" fill="#1d2f55" />
        <ellipse cx="565" cy="480" rx="130" ry="60" fill="#1a2c4f" />
      </g>

      <g filter="url(#bokehBlur)">
        <circle cx="150" cy="180" r="36" fill="rgba(120,195,255,0.75)" />
        <circle cx="220" cy="140" r="28" fill="rgba(188,224,255,0.65)" />
        <circle cx="720" cy="120" r="42" fill="rgba(118,188,255,0.66)" />
        <circle cx="640" cy="200" r="30" fill="rgba(90,170,255,0.58)" />
        <circle cx="300" cy="110" r="24" fill="rgba(126,198,255,0.75)" />
        <circle cx="480" cy="80" r="20" fill="rgba(200,220,255,0.65)" />
        <circle cx="560" cy="160" r="26" fill="rgba(178,215,255,0.6)" />
        <circle cx="420" cy="160" r="18" fill="rgba(178,210,255,0.55)" />
        <circle cx="800" cy="190" r="18" fill="rgba(156,206,255,0.45)" />
      </g>

      <ellipse
        cx="460"
        cy="540"
        rx="180"
        ry="40"
        fill="#02060b"
        opacity="0.55"
        filter="url(#softGlow)"
      />

      <g transform="translate(420,150)">
        <path
          d="M75 180 C40 190 10 260 12 310 C15 370 70 420 120 422 C165 423 212 380 210 324 C208 270 165 238 140 230"
          fill="url(#sweater)"
        />

        <path
          d="M145 105 C140 125 130 155 95 168 C85 171 45 172 45 172 C90 192 135 190 173 172 C173 172 195 160 205 145 C205 145 188 118 175 112"
          fill="url(#scarf)"
        />
        <path
          d="M110 55 C92 72 96 120 104 145 C112 170 156 178 174 150 C190 124 192 72 170 53 C152 37 126 37 110 55 Z"
          fill="url(#skinTone)"
        />
        <path
          d="M124 46 C124 46 115 25 135 18 C155 10 190 30 200 50 C210 70 210 102 195 120 C195 120 224 76 196 46 C165 14 124 46 124 46 Z"
          fill="#0a1627"
        />
        <path
          d="M90 145 C63 165 33 210 20 270 C14 303 18 350 48 380 C74 405 120 412 152 403 C188 392 210 365 214 330 C220 270 180 210 145 200"
          fill="url(#sweater)"
          opacity="0.92"
        />

        <path
          d="M132 190 C132 190 118 190 106 210 C94 230 110 250 124 250 C138 250 153 242 158 226 C163 210 154 193 144 190 L132 190 Z"
          fill="url(#skinTone)"
        />

        <g transform="translate(148,190) rotate(-14)">
          <rect x="0" y="0" width="16" height="120" rx="8" fill="#141c30" />
          <rect x="6" y="0" width="4" height="120" fill="#0c1322" />
          <rect
            x="-18"
            y="-55"
            width="52"
            height="55"
            rx="24"
            fill="url(#micMetal)"
          />
          <circle cx="8" cy="-28" r="22" fill="#2c3448" />
          <rect
            x="-12"
            y="-48"
            width="40"
            height="10"
            rx="5"
            fill="#465069"
          />
          <rect x="-6" y="-22" width="28" height="3" rx="1.5" fill="#1f2532" />
          <rect x="-6" y="-16" width="28" height="3" rx="1.5" fill="#1f2532" />
          <rect x="-6" y="-10" width="28" height="3" rx="1.5" fill="#1f2532" />
        </g>

        <path
          d="M94 152 C83 158 51 178 45 200 C40 220 58 242 74 245 C90 248 110 238 121 220 C130 204 130 184 126 168"
          fill="url(#scarf)"
          opacity="0.9"
        />
        <path
          d="M60 230 C55 280 82 322 122 327 C162 332 192 296 196 260 C199 240 190 215 175 204"
          fill="url(#sweater)"
          opacity="0.8"
        />

        <path
          d="M178 120 C202 150 235 214 220 278 C208 330 168 360 118 372 C70 384 28 366 0 330 C0 330 48 400 122 398 C213 396 270 318 245 235 C232 192 199 136 178 120 Z"
          fill="#071226"
          opacity="0.5"
        />
      </g>

      <g opacity="0.35">
        <circle cx="160" cy="510" r="50" fill="#102447" />
        <circle cx="120" cy="520" r="30" fill="#0b162d" />
        <circle cx="720" cy="515" r="55" fill="#102447" />
        <circle cx="760" cy="530" r="36" fill="#0b162d" />
        <circle cx="640" cy="500" r="42" fill="#0e1f3e" />
        <circle cx="250" cy="500" r="32" fill="#101f3a" />
        <circle cx="320" cy="510" r="26" fill="#0d182c" />
        <circle cx="540" cy="520" r="28" fill="#0e192d" />
      </g>
    </svg>
  );
};

export default PerformerScene;
