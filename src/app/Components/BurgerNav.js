import React, { useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "./Theme/Theme";

const MenuLabel = styled.label`
  position: fixed;
  top: 1.75rem;
  right: calc(1rem + 2vw);
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  text-align: center;
  ${mediaQueries(40)`
            height: 1.5rem;
            width: 1.5rem;
  `};
`;
const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#7900ff")};
  width: 2rem;
  height: 3px;
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.3s;
  border-radius: 25%;
  ${mediaQueries(40)`
            width: 1.5rem;
            margin-top: 1rem;
  `};
  &::before,
  &::after {
    content: "";
    width: 1.5rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    border-radius: 25%;
    left: 0;
    transition: all 0.3s;
    ${mediaQueries(40)`
            width: 1rem;
  `};
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
const BurgerNav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
      <Icon onClick={click}>&nbsp;</Icon>
    </MenuLabel>
  );
};

export default BurgerNav;
