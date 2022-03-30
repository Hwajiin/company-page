import styled from "styled-components";
import responsive from "../../styles/constants/responsive";

const SContainer = styled.div`
  width: 100%;
  padding: 0 ${responsive.margin.sm}px;
  margin: 0 auto;

  ${responsive.mediaQuery.tablet} {
    max-width: ${responsive.maxWidth.md}px;
    padding: 0 ${responsive.margin.md}px;
  }

  ${responsive.mediaQuery.desktop} {
    max-width: ${responsive.maxWidth.lg}px;
    padding: 0;
  }
`;

const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
