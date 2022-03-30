import React from "react";
import styled from "styled-components";
import NavList from "../components/navList";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import zIndex from "../styles/constants/z-index";

const NAV_HEIGHT = 60;

const Wrapper = styled.div`
  ${responsive.range["sm-only"]}
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  padding: ${NAV_HEIGHT}px 10px;
  background-color: ${colors.white};
  z-index: ${zIndex.sidebar};
  transition: transform 300ms ease-in;
  transform: translate3d(100%, 0, 0);
  ${({ open }) => (open ? `transform: translate3d(0, 0, 0)` : "")};
`;

const Sidebar = ({ open }) => {
  return (
    <Wrapper open={open}>
      <NavList kind="side" />
    </Wrapper>
  );
};

export default Sidebar;
