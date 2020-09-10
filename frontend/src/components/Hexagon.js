import React from "react"
import styled from "@emotion/styled"

const HexagonLi = styled.li`
  list-style-type: none;
  position: relative;
  float: left;
  width: 12.85714285714286%;
  padding: 0 0 14.87860145166612% 0;
  -o-transform: rotate(-60deg) skewY(30deg);
  -moz-transform: rotate(-60deg) skewY(30deg);
  -ms-transform: rotate(-60deg) skewY(30deg);
  transform: rotate(-60deg) skewY(30deg);
  overflow: hidden;
  visibility: hidden;

  :nth-child(1n + 1) {
    margin: 0.5%;
  }
  :nth-child(14n + 8),
  :nth-child(14n + 9),
  :nth-child(14n + 10),
  :nth-child(14n + 11),
  :nth-child(14n + 12),
  :nth-child(14n + 13),
  :nth-child(14n + 14) {
    margin-top: -2.9285714285%;
    margin-bottom: -2.9285714285%;
    -o-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    -moz-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    transform: translateX(50%) rotate(-60deg) skewY(30deg);
  }
  :nth-child(14n + 8) {
    margin-left: 1%;
  }
`

const HexagonDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fbdf00;
  -o-transform: skewY(-30deg) rotate(60deg);
  -moz-transform: skewY(-30deg) rotate(60deg);
  -webkit-transform: skewY(-30deg) rotate(60deg);
  -ms-transform: skewY(-30deg) rotate(60deg);
  transform: skewY(-30deg) rotate(60deg);
  visibility: visible;
  overflow: hidden;
`

export const Hexagon = ({ children }) => {
  return (
    <HexagonLi>
      <HexagonDiv>{children}</HexagonDiv>
    </HexagonLi>
  )
}
