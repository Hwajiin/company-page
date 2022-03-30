import React from "react";
import styled from "styled-components";
import colors from "../styles/constants/colors";
import flexbox from "../styles/function/flexbox";

const Button = styled.button`
  width: 50px;
  height: 50px;
  ${flexbox()}
`;

const Hamburger = styled.div`
  position: relative;
  width: 25px;
  height: 1px;
  background-color: ${({ pathname }) =>
    pathname === "/reports_intro" ? colors.blue : colors.white};
  box-shadow: 0px -7px 0px ${({ pathname }) => (pathname === "/reports_intro" ? colors.blue : colors.white)};
  transition: transform 200ms ease-in-out;
  ${({ open }) => {
    return open
      ? `
      transform: rotate(45deg);
      box-shadow: 0px 0px 0px;
    `
      : null;
  }}

  &::after {
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ pathname }) =>
      pathname === "/reports_intro" ? colors.blue : colors.white};
    content: "";
    transition: transform 200ms ease-in-out;
    ${({ open }) => {
      return open
        ? `
      transform: rotate(90deg);
      top: 0;
    `
        : null;
    }}
  }
`;

const SidebarButton = ({ toggleHandler, open, pathname }) => {
  return (
    <Button type="button" aria-label="사이드바 열기" onClick={toggleHandler}>
      <Hamburger open={open} pathname={pathname} aria-hidden />
    </Button>
  );
};

export default SidebarButton;
