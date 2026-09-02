function BernalLogo() {
  return (
    <svg
      className="bs-svg"
      viewBox="0 0 640 360"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bernal Studio"
    >
      {/* LOGO PLEIN */}

      <g className="bs-solid">
        {/* B */}

        <path
          fillRule="evenodd"
          d="
            M70 50
            H250

            C295 50
            322 72
            322 108

            C322 136
            306 155
            278 165

            C312 174
            330 198
            330 230

            C330 275
            298 305
            245 305

            H70
            Z

            M122 96
            V145
            H235

            C255 145
            267 136
            267 120

            C267 104
            255 96
            235 96

            Z

            M122 190
            V258
            H238

            C262 258
            275 246
            275 224

            C275 202
            262 190
            238 190

            Z
          "
        />

        {/* S */}

        <path
          d="
            M565 50
            H410

            C350 50
            318 80
            318 126

            C318 173
            349 198
            407 198

            H468

            C493 198
            505 208
            505 228

            C505 248
            491 258
            466 258

            H322

            V305

            H470

            C530 305
            562 276
            562 226

            C562 179
            531 151
            472 151

            H412

            C387 151
            375 142
            375 123

            C375 104
            388 96
            413 96

            H565
            Z
          "
        />
      </g>

      {/* TRACÉ B */}

      <path
        className="bs-draw draw-b"
        d="
          M95 282
          V74
          H242

          C276 74
          296 90
          296 117

          C296 146
          276 166
          242 166

          H95

          M242 166

          C283 166
          305 187
          305 222

          C305 259
          281 282
          241 282

          H95
        "
      />

      {/* TRACÉ S */}

      <path
        className="bs-draw draw-s"
        d="
          M542 74
          H412

          C367 74
          345 92
          345 124

          C345 157
          367 174
          410 174

          H470

          C514 174
          536 193
          536 226

          C536 263
          512 282
          468 282

          H345
        "
      />
    </svg>
  );
}

export default BernalLogo;
