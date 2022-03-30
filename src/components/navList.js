import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import fontStyle from "../styles/function/fontStyle";

const UList = styled.ul`
  display: flex;
  flex-direction: ${({ kind }) => (kind === "side" ? "column" : "")};
  color: ${colors.blue};
  ${fontStyle(14)}

  ${responsive.mediaQuery.tablet} {
    a {
      color: ${({ pathname }) =>
        pathname === "/" ? colors.white : colors.blue};
    }
  }
`;

const Item = styled.li`
  width: 100%;
  margin: 10px 0;
  white-space: nowrap;

  a {
    padding: 10px;
  }

  &:last-child {
    a {
      padding-right: 0;
    }
  }

  ${responsive.mediaQuery.tablet} {
    margin: 0;
    margin-left: 40px;
  }
`;

const SLink = styled(Link)`
  padding: 10px;

  ${responsive.mediaQuery.tablet} {
    color: ${({ pathname }) => (pathname === "/" ? colors.white : colors.blue)};
  }
`;

const NavList = ({ kind = "nav" }) => {
  const { pathname } = useLocation();

  return (
    <UList pathname={pathname} kind={kind}>
      <Item>
        <SLink to="/">홈</SLink>
      </Item>

      <Item>
        <SLink to="/reports_intro">회사소개</SLink>
      </Item>

      <Item>
        <a
          href="https://tough-drawer-071.notion.site/RE-PORTS-1-715e2274653c4e7daf3da449c3f14549"
          target="_blank"
        >
          채용
        </a>
      </Item>

      <Item>
        <a
          href="https://tough-drawer-071.notion.site/efbf8795207341788e54c4ebe182586a"
          target="_blank"
        >
          강사 제휴 신청
        </a>
      </Item>
    </UList>
  );
};

export default NavList;
