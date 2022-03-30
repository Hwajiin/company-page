import styled from "styled-components";
import responsive from "../../styles/constants/responsive";

const SCol = styled.div`
  ${({ sm }) => (sm ? `width: ${(sm / responsive.columns.sm) * 100}%` : null)};
  padding: 0 ${responsive.gutter}px;

  ${responsive.mediaQuery.tablet} {
    ${({ md }) =>
      md ? `width: ${(md / responsive.columns.md) * 100}%` : null};
  }

  ${responsive.mediaQuery.desktop} {
    ${({ lg }) =>
      lg ? `width: ${(lg / responsive.columns.lg) * 100}%` : null};
  }
`;

const Col = ({ children, sm = 4, md, lg }) => {
  return sm || md || lg ? (
    <SCol sm={sm} md={md} lg={lg}>
      {children}
    </SCol>
  ) : null;
};

export default Col;
