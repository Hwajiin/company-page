import styled from "styled-components";
import { useLocation } from "react-router-dom";
import colors from "../styles/constants/colors";
import Container from "../components/responsive/container";
import Row from "../components/responsive/row";
import Col from "../components/responsive/col";
import useNav from "../hooks/useNav";
import responsive, { breakpoint } from "../styles/constants/responsive";
import SidebarButton from "../components/sidebarButton";
import flexbox from "../styles/function/flexbox";
import Logo from "../components/logo";
import NavList from "../components/navList";
import Sidebar from "./sidebar";

const NAV_HEIGHT = 60;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ pathname }) =>
    pathname === "/" ? colors.blue : colors.white};
  z-index: 50;
`;

const NavWrapper = styled.div`
  width: 100%;
  height: ${NAV_HEIGHT}px;
  padding-left: 12.5px;
  ${flexbox("flex-end")}

  ${responsive.mediaQuery.tablet} {
    ${flexbox("space-between")}
    padding-left: 0px;
  }

  button {
    transform: translateX(10px);
  }
`;

const Gnb = () => {
  const { width, open, setOpen } = useNav();
  const { pathname } = useLocation();

  const sidebarToggleHandler = () => setOpen((prev) => !prev);

  return (
    <>
      <Nav pathname={pathname}>
        <Container>
          <Row>
            <Col sm={4}>
              <NavWrapper>
                {width < breakpoint.md && (
                  <SidebarButton
                    pathname={pathname}
                    open={open}
                    toggleHandler={sidebarToggleHandler}
                  />
                )}
                {width >= breakpoint.md && (
                  <>
                    <Logo />

                    <NavList />
                  </>
                )}
              </NavWrapper>
            </Col>
          </Row>
        </Container>
      </Nav>

      <Sidebar open={open} />
    </>
  );
};

export default Gnb;
