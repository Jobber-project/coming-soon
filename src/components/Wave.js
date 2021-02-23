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
        <Svg viewBox="0 0 1600 500" fill="none">
          <defs>
            <g id="wave">
              <path
                d="M0,380 C160,220 240,220 400,380 C560,540 640,540 800,380 C960,220 1040,220 1200,380 C1360,540 1440,540 1600,380 C1760,220 1840,220 2000,380 C2160,540 2240,540 2400,380 C2560,220 2640,220 2800,380 C2960,540 3040,540 3200,380"
                stroke="white"
              />
              <path
                d="M0,250 C160,90 240,90 400,250 C560,410 640,410 800,250 C960,90 1040,90 1200,250 C1360,410 1440,410 1600,250 C1760,90 1840,90 2000,250 C2160,410 2240,410 2400,250 C2560,90 2640,90 2800,250 C2960,410 3040,410 3200,250"
                stroke="white"
              />
              <path
                d="M0,120 C160,-40 240,-40 400,120 C560,280 640,280 800,120 C960,-40 1040,-40 1200,120 C1360,280 1440,280 1600,120 C1760,-40 1840,-40 2000,120 C2160,280 2240,280 2400,120 C2560,-40 2640,-40 2800,120 C2960,280 3040,280 3200,120"
                stroke="white"
              />
            </g>
          </defs>

          <use xlinkHref="#wave" x="0" y="0">
            <animate
              attributeName="x"
              from="0"
              to="-800"
              dur="120s"
              repeatCount="indefinite"
            />
          </use>
        </Svg>
      </SvgWrapper>
    </Container>
  )
}
