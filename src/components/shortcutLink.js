import styled from "styled-components";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import flexbox from "../styles/function/flexbox";
import fontStyle from "../styles/function/fontStyle";

const A = styled.a`
  width: 300px;
  background-color: ${colors.blue};
  color: ${colors.white};
  ${flexbox("space-between")}
  ${fontStyle(12)}
  font-weight: 600;

  padding: 10px 20px;
  border-radius: 30px;

  ${responsive.mediaQuery.tablet} {
    margin-top: ${({ marginTop }) => (marginTop ? "30px" : "")};
  }
`;

const ShortcutLink = ({ text, marginTop = false }) => {
  return (
    <A href="#" target="_blank" marginTop={marginTop}>
      <p>{text}</p>
      <p>&gt;</p>
    </A>
  );
};

export default ShortcutLink;
