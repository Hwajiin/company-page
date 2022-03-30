import styled from "styled-components";
import colors from "../styles/constants/colors";
import flexbox from "../styles/function/flexbox";
import fontStyle from "../styles/function/fontStyle";

const Page = styled.section`
  width: 100%;
  height: calc(100vh - 360px);
  ${flexbox()}

  p {
    color: ${colors.blue};
    ${fontStyle(36)}
    font-weight: 700;
  }
`;

const NotFound = () => {
  return (
    <Page>
      <p>Not Found</p>
    </Page>
  );
};

export default NotFound;
