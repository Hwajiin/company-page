import styled from "styled-components";
import colors from "../styles/constants/colors";
import alignCenter from "../styles/function/alignCenter";
import flexbox from "../styles/function/flexbox";

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-weight: 700;
  display: flex;
  position: fixed;
  bottom: 0;
`;

const A = styled.a`
  width: 50%;
  height: 100%;
  ${flexbox()}
`;

const DownloadBar = () => {
  return (
    <Box>
      <A
        href="https://apps.apple.com/kr/app/%EC%84%B8%EB%AA%A8%EC%8A%A4/id1578637889"
        target="_blank"
      >
        <p>App Store</p>
      </A>
      <A
        href="https://apps.apple.com/kr/app/%EC%84%B8%EB%AA%A8%EC%8A%A4/id1578637889"
        target="_blank"
      >
        <p>Google Play</p>
      </A>
    </Box>
  );
};

export default DownloadBar;
