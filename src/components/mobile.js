import styled from "styled-components";
import useWidth from "../hooks/useWidth";
import responsive, { breakpoint } from "../styles/constants/responsive";
import ShortcutLink from "./shortcutLink";

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${responsive.mediaQuery.tablet} {
    width: 40%;
    align-items: flex-start;
    transform: translateY(50px);
  }
`;

const Img = styled.img`
  width: 250px;
`;

const Mobile = ({ mobileImg, text }) => {
  const { width } = useWidth();

  return (
    <Box>
      <Img src={mobileImg} />

      {width < breakpoint.md && <ShortcutLink text={text} />}
    </Box>
  );
};

export default Mobile;
