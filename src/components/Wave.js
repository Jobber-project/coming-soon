import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  opacity: 0.5;
`

const SvgWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale(1.46875);
`

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-20deg);
`

export default function Wave() {
  return (
    <Container>
      <SvgWrapper>
        <Svg viewBox="0 0 3200 600" fill="none">
          <defs>
            <g id="wave">
              <path
                id="wave1"
                d="M0,84.5 C160,-28.1666667 240,-28.1666667 400,84.5 C560,197.166667 640,197.166667 800,84.5 C960,-28.1666667 1040,-28.1666667 1200,84.5 C1360,197.166667 1440,197.166667 1600,84.5 C1760,-28.1666667 1840,-28.1666667 2000,84.5 C2160,197.166667 2240,197.166667 2400,84.5 C2560,-28.1666667 2640,-28.1666667 2800,84.5 C2960,197.166667 3040,197.166667 3200,84.5 C3360,-28.1666667 3440,-28.1666667 3600,84.5 C3760,197.166667 3840,197.166667 4000,84.5 C4160,-28.1666667 4240,-28.1666667 4400,84.5 C4560,197.166667 4640,197.166667 4800,84.5 C4960,-28.1666667 5040,-28.1666667 5200,84.5 C5360,197.166667 5440,197.166667 5600,84.5 C5760,-28.1666667 5840,-28.1666667 6000,84.5 C6160,197.166667 6240,197.166667 6400,84.5"
                stroke="white"
              />
              <path
                id="wave2"
                d="M0,228 C160,114.666667 240,114.666667 400,228 C560,341.333333 640,341.333333 800,228 C960,114.666667 1040,114.666667 1200,228 C1360,341.333333 1440,341.333333 1600,228 C1760,114.666667 1840,114.666667 2000,228 C2160,341.333333 2240,341.333333 2400,228 C2560,114.666667 2640,114.666667 2800,228 C2960,341.333333 3040,341.333333 3200,228 C3360,114.666667 3440,114.666667 3600,228 C3760,341.333333 3840,341.333333 4000,228 C4160,114.666667 4240,114.666667 4400,228 C4560,341.333333 4640,341.333333 4800,228 C4960,114.666667 5040,114.666667 5200,228 C5360,341.333333 5440,341.333333 5600,228 C5760,114.666667 5840,114.666667 6000,228 C6160,341.333333 6240,341.333333 6400,228"
                stroke="white"
              />
              <path
                id="wave3"
                d="M0,372 C160,258.666667 240,258.666667 400,372 C560,485.333333 640,485.333333 800,372 C960,258.666667 1040,258.666667 1200,372 C1360,485.333333 1440,485.333333 1600,372 C1760,258.666667 1840,258.666667 2000,372 C2160,485.333333 2240,485.333333 2400,372 C2560,258.666667 2640,258.666667 2800,372 C2960,485.333333 3040,485.333333 3200,372 C3360,258.666667 3440,258.666667 3600,372 C3760,485.333333 3840,485.333333 4000,372 C4160,258.666667 4240,258.666667 4400,372 C4560,485.333333 4640,485.333333 4800,372 C4960,258.666667 5040,258.666667 5200,372 C5360,485.333333 5440,485.333333 5600,372 C5760,258.666667 5840,258.666667 6000,372 C6160,485.333333 6240,485.333333 6400,372"
                stroke="white"
              />
              <path
                id="wave4"
                d="M0,515.5 C160,402.833333 240,402.833333 400,515.5 C560,628.166667 640,628.166667 800,515.5 C960,402.833333 1040,402.833333 1200,515.5 C1360,628.166667 1440,628.166667 1600,515.5 C1760,402.833333 1840,402.833333 2000,515.5 C2160,628.166667 2240,628.166667 2400,515.5 C2560,402.833333 2640,402.833333 2800,515.5 C2960,628.166667 3040,628.166667 3200,515.5 C3360,402.833333 3440,402.833333 3600,515.5 C3760,628.166667 3840,628.166667 4000,515.5 C4160,402.833333 4240,402.833333 4400,515.5 C4560,628.166667 4640,628.166667 4800,515.5 C4960,402.833333 5040,402.833333 5200,515.5 C5360,628.166667 5440,628.166667 5600,515.5 C5760,402.833333 5840,402.833333 6000,515.5 C6160,628.166667 6240,628.166667 6400,515.5"
                stroke="white"
              />
            </g>
          </defs>

          <use xlinkHref="#wave" x="0">
            <animate
              attributeName="x"
              from="0"
              to="-800"
              dur="110s"
              repeatCount="indefinite"
            />
          </use>
        </Svg>
      </SvgWrapper>
    </Container>
  )
}
