const ThreeDotBtn = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_bi_480_9756)">
      <circle
        cx="15"
        cy="15"
        r="15"
        fill="url(#paint0_radial_480_9756)"
        fill-opacity="0.2"
      />
    </g>
    <circle cx="7" cy="15" r="2" fill="white" fill-opacity="0.7" />
    <circle cx="15" cy="15" r="2" fill="white" fill-opacity="0.7" />
    <circle cx="23" cy="15" r="2" fill="white" fill-opacity="0.7" />
    <defs>
      <filter
        id="filter0_bi_480_9756"
        x="-42"
        y="-42"
        width="114"
        height="114"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="21" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_480_9756"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_480_9756"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-5" dy="-5" />
        <feGaussianBlur stdDeviation="125" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_480_9756"
        />
      </filter>
      <radialGradient
        id="paint0_radial_480_9756"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(45) scale(42.4264 29.4795)"
      >
        <stop stop-color="white" stop-opacity="0.4" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export default ThreeDotBtn;
