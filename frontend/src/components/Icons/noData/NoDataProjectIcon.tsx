import React, { HTMLAttributes } from 'react';
interface IconProps extends HTMLAttributes<SVGElement> {
	width?: number;
	height?: number;
}
export const NoDataProjectIcon = ({
	width = 200,
	height = 200,
	...restProps
}: IconProps) => {
	return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    {...restProps}
		width={width}
			height={height}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 2963 1884"
  >
    <path
      d="M2962.54 1593.37c-334.332 114.761-844.215 188.133-1415.03 188.133-570.812 0-1080.69-73.372-1415.03-188.133 334.332-85.209 844.215-139.687 1415.03-139.687 570.812 0 1080.69 54.478 1415.03 139.687Z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="M476.17 142.318c23.55-16.22 52.08-25.72 82.811-25.72 80.712 0 146.24 65.527 146.24 146.239H.308C.104 258.69 0 254.517 0 250.319 0 112.164 112.164 0 250.319 0c99.489 0 185.5 58.166 225.851 142.318Z"
      style={{
        fill: "url(#b)",
      }}
    />
    <path
      d="M2397.37 219.734c-20.831-14.348-46.066-22.751-73.249-22.751-71.391 0-129.351 57.961-129.351 129.352h623.509c.181-3.668.272-7.36.272-11.073 0-122.2-99.211-221.412-221.412-221.412-88 0-164.078 51.45-199.769 125.884Z"
      style={{
        fill: "url(#c)",
      }}
    />
    <path
      d="M2654.73 917.082c-15.224-10.486-33.666-16.627-53.532-16.627-52.174 0-94.533 42.359-94.533 94.534h455.676c.133-2.681.199-5.379.199-8.092 0-89.308-72.506-161.814-161.813-161.814-64.313 0-119.913 37.6-145.997 91.999Z"
      style={{
        fill: "url(#d)",
      }}
    />
    <path
      d="m486.962 1763.22-3.022 52.716 38.492.356v-56.005l-35.47 2.933ZM645.603 1840.4l3.023-52.715-38.492-.356v56.005l35.469-2.934Z"
      style={{
        fill: "#f9b6b1",
      }}
    />
    <path
      d="m659.2 1883.69-61.617.121s-3.904-28.291 11.281-45.838h41.804s10.732 17.263 8.532 45.717Z"
      style={{
        fill: "#eeedf2",
      }}
    />
    <clipPath id="e">
      <path d="m659.2 1883.69-61.617.121s-3.904-28.291 11.281-45.838h41.804s10.732 17.263 8.532 45.717Z" />
    </clipPath>
    <g clipPath="url(#e)">
      <path
        d="M594.854 1876.13h66.46v7.681h-66.46z"
        style={{
          fill: "#0c2139",
        }}
      />
    </g>
    <path
      d="M446.267 1822.28s-33.336 13.581-39.016 28.644c-5.679 15.063 29.632 21.484 45.683 17.78 16.051-3.704 61.981-24.447 73.093-27.41 11.112-2.963 3.704-23.953-2.223-44.201 0 0-26.915 14.569-37.781.741-10.865-13.829-11.112 4.444-11.112 4.444l-28.644 20.002Z"
      style={{
        fill: "#eeedf2",
      }}
    />
    <clipPath id="f">
      <path d="M446.267 1822.28s-33.336 13.581-39.016 28.644c-5.679 15.063 29.632 21.484 45.683 17.78 16.051-3.704 61.981-24.447 73.093-27.41 11.112-2.963 3.704-23.953-2.223-44.201 0 0-26.915 14.569-37.781.741-10.865-13.829-11.112 4.444-11.112 4.444l-28.644 20.002Z" />
    </clipPath>
    <g clipPath="url(#f)">
      <path
        d="M409.207 1837.14s-3.287 11.505 6.448 17.447c9.735 5.942 33.883 7.712 47.538 1.77 13.654-5.942 51.836-19.596 51.836-19.596s15.298-5.69 18.332-11c3.035-5.31 6.196 26.298-9.103 31.608-15.298 5.31-83.696 16.815-83.696 16.815l-32.999-12.643s-10.241-11.379 1.644-24.401Z"
        style={{
          fill: "#062249",
        }}
      />
    </g>
    <path
      d="M441.302 1164.79s4.112 502.613 30.605 615.209l57.443.099s7.63-116.147 1.695-200.925l17.017-213.01s22.137 146.28 38.198 195.329l7.813 239.169 66.412-.434s5.627-508.343-10.651-629.067c0 0-175.497 32.464-208.532-6.37Z"
      style={{
        fill: "#062249",
      }}
    />
    <path
      d="m519.533 805.095 1.6-33.714s-11.279-17.846-13.779-32.569c0 0-14.279-16.068-16.057-24.069-1.778-8.001 7.467-5.689 9.245-3.734 0 0 .211-18.101-1.389-27.88-1.6-9.778-15.468-35.381-15.468-35.381s45.829-49.86 115.137-10.746c0 0 13.126-2.133 17.037 14.224 3.454 14.442-11.556 61.694-11.556 61.694s11.378-12.268 15.29-3.556c3.911 8.712-16.535 32.714-16.535 32.714s-3.2 18.313-9.601 27.202l1.245 30.225-43.56 38.759-31.609-33.169Z"
      style={{
        fill: "#f9b6b1",
      }}
    />
    <clipPath id="g">
      <path d="m519.533 805.095 1.6-33.714s-11.279-17.846-13.779-32.569c0 0-14.279-16.068-16.057-24.069-1.778-8.001 7.467-5.689 9.245-3.734 0 0 .211-18.101-1.389-27.88-1.6-9.778-15.468-35.381-15.468-35.381s45.829-49.86 115.137-10.746c0 0 13.126-2.133 17.037 14.224 3.454 14.442-11.556 61.694-11.556 61.694s11.378-12.268 15.29-3.556c3.911 8.712-16.535 32.714-16.535 32.714s-3.2 18.313-9.601 27.202l1.245 30.225-43.56 38.759-31.609-33.169Z" />
    </clipPath>
    <g clipPath="url(#g)">
      <path
        d="m506.303 714.491-10.525-9.672-24.447-62.005s22.447-34.003 69.117-34.67c46.671-.667 90.453 34.225 90.453 34.225l-15.779 53.56-11.113 17.557s-.666-47.115-12.001-48.004c-11.334-.889-21.113 10.668-21.113 10.668s-20.467 6.072-43.559-8.223c-23.335-14.446-20.508 23.789-21.033 46.564Z"
        style={{
          fill: "#332e30",
        }}
      />
      <path
        d="M595.535 764.608s-15.823 23.291-31.469 25.602-35.203-12.268-35.203-12.268 22.58 21.158 38.403 21.335c15.824.178 33.248-22.757 33.248-22.757l-4.979-11.912Z"
        style={{
          fill: "#e79392",
        }}
      />
    </g>
    <path
      d="m520.153 792.019-11.935 17.307s-73.545 22.224-85.768 33.336c-12.223 11.112-33.781 68.895-44.893 114.899-11.112 46.004-15.6 106.265 12.408 119.365 13.779 6.445 47.338 7.557 47.338 7.557l1.517 96.905s110.735 46.917 215.606-7.601c0 0 4.861-86.119 3.472-97.925 0 0 35.072-13.543 39.934-82.299 4.862-68.756 12.501-132.303-3.125-145.151-15.627-12.849-84.035-49.133-84.035-49.133l-12.359-17.336-26.089 28.787a25.332 25.332 0 0 1-38.83-1.542l-13.241-17.169Z"
      style={{
        fill: "#7f58ff",
      }}
    />
    <path
      d="m459.091 912.591-12.849 79.868s13.89-47.573 12.849-79.868ZM633.064 911.063s-19.724 63.617-21.391 80.285c0 0-76.118-3.889-99.175-5.556l103.064 9.167s14.446-69.172 17.502-83.896ZM505.594 986.07s-20.89 41.337-19.335 58.449l134.679 34.892-131.123-37.114s7.112-39.559 15.779-56.227Z"
      style={{
        fill: "#5125df",
      }}
    />
    <path
      d="M501.907 985.283s-6.946 9.446-15.28 36.115l-46.948-16.946s16.946-24.447 62.228-19.169Z"
      style={{
        fill: "#f9b6b1",
      }}
    />
    <path
      d="M437.32 1083.93s111.572 1.455 155.186-3.268l-151.124 8.612-4.062-5.344Z"
      style={{
        fill: "#5125df",
      }}
    />
    <path
      d="M1226.15 222.962c33.002 0 62.414 20.816 73.388 51.94l11.666 33.089c6.218 17.633 22.881 29.426 41.578 29.426h595.444c63.43.001 114.85 51.421 114.85 114.851v769.155c0 29.003-17.805 52.55-39.735 52.55H939.761c-21.93 0-39.734-23.547-39.734-52.55V275.512c0-29.003 17.804-52.55 39.734-52.55h286.384Z"
      style={{
        fill: "#bdc5cf",
      }}
    />
    <path
      d="M2314 452.343c7.497-24.002-5.902-43.488-29.903-43.488h-1076.07c-24.002 0-49.574 19.486-57.071 43.488l-244.504 782.772c-7.497 24.001 5.903 43.487 29.904 43.487h1076.07c24.001 0 49.574-19.486 57.071-43.487L2314 452.343Z"
      style={{
        fill: "#d9dee4",
      }}
    />
    <path
      d="M1708.64 695.033c97.258 0 149.721 78.961 117.082 176.219-32.638 97.258-138.097 176.218-235.355 176.218-97.257 0-149.72-78.96-117.082-176.218 32.638-97.258 138.097-176.219 235.355-176.219Z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M1705.91 770.377h-45.112l-67.704 201.75h45.112l67.704-201.75Z"
      style={{
        fill: "#bfc7d1",
      }}
    />
    <path
      d="m1742.81 893.808 15.139-45.112h-201.751l-15.139 45.112h201.751Z"
      style={{
        fill: "#bfc7d1",
      }}
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="scale(580.7935) rotate(88.058 .468 2.486)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#bdc5cf",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#bdc5cf",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="rotate(88.826 326.9 -50.516) scale(639.285)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#bdc5cf",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#bdc5cf",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient
        id="c"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="scale(-565.4597 565.4597) rotate(88.826 -2.066 -2.54)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#bdc5cf",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#bdc5cf",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient
        id="d"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="scale(-413.25275 413.25275) rotate(88.826 -4.092 -2.74)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#bdc5cf",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#bdc5cf",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
    
		)};