import React from "react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import moeHead from "../media/moe-head.png"
import rightHand from "../media/right-hand.png"

SyntaxHighlighter.registerLanguage("javascript", js)

const MoeTop = ({ blushing, embarrassed }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 196.85 176.212"
    style={{ display: "block", width: "40%", margin: "0 auto" }}
  >
    <defs>
      <radialGradient
        id="prefix__b"
        cx="1412.701"
        cy="384.929"
        r="38.563"
        fx="1412.701"
        fy="384.929"
        gradientTransform="translate(-61.265 175.263) scale(.26458)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#prefix__a"
      ></radialGradient>
      <radialGradient
        id="prefix__c"
        cx="1596.767"
        cy="379.974"
        r="38.563"
        fx="1596.767"
        fy="379.974"
        gradientTransform="translate(-61.265 175.263) scale(.26458)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#prefix__a"
      ></radialGradient>
      <linearGradient id="prefix__a">
        <stop offset="0" stopColor="#fd93a2"></stop>
        <stop offset="1" stopColor="#fd93a2" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
    <g transform="translate(-242.358 -163.966)">
      <image
        width="196.85"
        height="176.212"
        x="242.358"
        y="163.966"
        preserveAspectRatio="none"
        href={moeHead}
      ></image>
      <g>
        <path
          opacity={Number(blushing)}
          fill="#fbd8d0"
          d="M338.31 314.809c-7.596.312-16.505-4.047-19.46-5.906-3.502-2.203-6.685-3.061-9.384-6.197-1.666-1.935-3.128-5.02-3.92-7.447-2.658-8.136-5.525-23.493-5.773-25.019-.248-1.525-1.51-14.518-1.51-14.518 5.188-4.503 9.718-9.335 13.547-14.519l-5.813 8.696c10.993-8.502 18.565-18.116 24.167-28.371 5.624 11.792 13.858 22.69 24.136 32.967-8.754-9.793-16.854-19.741-19.723-30.929l35.314 28.74 9.89 7.552c-.026-.255-1.016 22.932-8.96 40.071-1.375 2.969-6.058 6.103-9.008 7.596-8.853 4.482-15.238 6.945-23.504 7.284z"
        ></path>
      </g>
      <g>
        <path
          opacity={Number(embarrassed)}
          fill="#fbd8d0"
          d="M338.31 314.809c-7.596.312-16.505-4.047-19.46-5.906-3.502-2.203-6.685-3.061-9.384-6.197-1.666-1.935-3.128-5.02-3.92-7.447-2.658-8.136-5.525-23.493-5.773-25.019-.248-1.525-1.51-14.518-1.51-14.518 5.188-4.503 9.718-9.335 13.547-14.519l-5.813 8.696c10.993-8.502 18.565-18.116 24.167-28.371 5.624 11.792 13.858 22.69 24.136 32.967-8.754-9.793-16.854-19.741-19.723-30.929l35.314 28.74 9.89 7.552c-.026-.255-1.016 22.932-8.96 40.071-1.375 2.969-6.058 6.103-9.008 7.596-8.853 4.482-15.238 6.945-23.504 7.284z"
        ></path>
      </g>
      <g className="prefix__face-1" opacity={blushing ? 1 : 0}>
        <path
          d="M347.622 269.83c-.03-.004.156-.011-.093.004-.249.016-1.117-.483-1.396.09-.278.575 1.33 1.835 1.778 3.017.45 1.183.367 2.53-.2 3.435-.566.905-.132.264-.599.8-.466.535-1.832 1.48-2.929 1.545-1.096.066-1.922-.247-2.836-1.105-.915-.858-1.68-2.327-2.074-3.796-.393-1.468-.359-2.277-.663-3.35-.304-1.074-1.568-.62-1.987-.02-.418.6-.092 1.523-.374 2.93-.282 1.408-.619 2.222-1.185 3.127-.567.905-.133.264-.6.8-.466.535-1.832 1.48-2.929 1.545-1.096.065-2.198.126-3.113-.732-.914-.858-1.556-1.674-1.95-3.143-.393-1.469.966-4.584.987-5.465.021-.88.024-.088-.284-.097-.308-.01-1.216-1.175-1.534.015-.318 1.19-1.32 4.795-.774 6.55.546 1.754 1.314 2.624 2.558 3.682 1.243 1.058 3.015 1.16 4.545.978 1.529-.183 2.976-1.103 3.906-2.182.93-1.079 1.846-3.476 1.846-3.476s1.405 3.136 2.627 4.176c1.222 1.04 2.74 1.534 4.269 1.351 1.529-.183 2.78-.874 3.906-2.182 1.127-1.308 1.272-2.523 1.512-4.082.241-1.559-1.018-2.942-1.416-3.622-.397-.679-.476-.474-.614-.532-.139-.058-.354-.26-.384-.262zm-27.646-19.15c-.263.043-.46.243-.704.338l-1.05.542c.745 1.416 1.459 2.89 1.675 4.493.268 1.717-.098 3.568-1.183 4.949-1.52 1.976-4.115 3.003-6.577 2.774-1.469-.134-2.928-.807-3.83-2-.96-1.258-1.268-2.888-1.224-4.44.039-1.576.386-3.1.864-4.598l.381-1.183-2.255-.747c-.759 2.195-1.386 4.479-1.373 6.82-.005 2.01.513 4.085 1.783 5.679 1.333 1.706 3.447 2.702 5.588 2.851 3.269.263 6.666-1.179 8.63-3.83 1.232-1.663 1.794-3.783 1.632-5.84-.124-1.869-.776-3.66-1.63-5.312-.105-.302-.394-.55-.727-.495zm45.934-1.125c-.263.041-.459.242-.703.337l-1.05.542c.745 1.416 1.459 2.89 1.675 4.493.268 1.716-.098 3.568-1.184 4.949-1.52 1.976-4.114 3.003-6.576 2.774-1.47-.134-2.928-.807-3.83-2-.96-1.258-1.269-2.889-1.224-4.44.039-1.576.386-3.1.864-4.598l.38-1.183-2.255-.747c-.758 2.195-1.385 4.479-1.373 6.819-.005 2.01.514 4.086 1.783 5.68 1.333 1.706 3.447 2.702 5.588 2.851 3.27.262 6.667-1.18 8.63-3.83 1.232-1.664 1.794-3.783 1.632-5.84-.123-1.869-.775-3.661-1.63-5.312-.104-.302-.393-.55-.727-.495z"
          color="#000"
          overflow="visible"
        ></path>
        <path
          fill="url(#prefix__b)"
          d="M322.715 277.11a10.203 10.203 0 01-10.2 10.202 10.203 10.203 0 01-10.206-10.195 10.203 10.203 0 0110.192-10.211 10.203 10.203 0 0110.214 10.188l-10.203.015z"
        ></path>
        <path
          fill="url(#prefix__c)"
          d="M371.416 275.798a10.203 10.203 0 01-10.2 10.203 10.203 10.203 0 01-10.207-10.195 10.203 10.203 0 0110.193-10.211 10.203 10.203 0 0110.214 10.188l-10.203.015z"
        ></path>
      </g>
      <g className="prefix__face-2" opacity={embarrassed ? 1 : 0}>
        <path
          d="M303.16 276.034l-.034 2.91 22.024.265.047-3.44-22.03-.264-.007.529zm46.218.014c-.01.97-.022 1.94-.034 2.91l22.025.265.047-3.44c-7.344-.087-14.688-.177-22.031-.265l-.007.53z"
          color="#000"
          fontFamily="sans-serif"
          fontWeight="400"
          overflow="visible"
        ></path>
        <path
          fill="#80e5ff"
          stroke="#000"
          strokeWidth="1.773"
          d="M380.688 212.54s-17.258 26.594-14.703 40.833c1.391 7.756 7.61 14.883 15.49 14.851 8.117-.033 14.039-7.506 15.298-15.525 2.237-14.246-16.085-40.159-16.085-40.159z"
        ></path>
        <g color="#000" fontFamily="sans-serif" fontWeight="400">
          <path
            fill="#80e5ff"
            d="M333.05 304.712l8.029 1.43"
            overflow="visible"
          ></path>
          <path
            d="M333.039 303.22a1.493 1.493 0 00-1.459 1.23 1.493 1.493 0 001.208 1.731l8.03 1.43a1.493 1.493 0 001.73-1.208 1.493 1.493 0 00-1.208-1.73l-8.028-1.43a1.493 1.493 0 00-.273-.024z"
            overflow="visible"
          ></path>
        </g>
      </g>
    </g>
  </svg>
)

const Moe = ({ blushing, embarrassed, children }) => {
  return (
    <>
      <MoeTop blushing={blushing} embarrassed={embarrassed} />
      <div style={{ position: "relative" }}>
        <img
          src={rightHand}
          style={{
            position: "absolute",
            left: "-1.8%",
            top: 20,
            width: "7%",
          }}
          alt="Moe's right hand"
        />
        {children}
        <img
          src={rightHand}
          style={{
            transform: "scaleX(-1)",
            position: "absolute",
            right: "-1.8%",
            top: 20,
            width: "7%",
          }}
          alt="Moe's left hand"
        />
      </div>
    </>
  )
}

export default Moe
