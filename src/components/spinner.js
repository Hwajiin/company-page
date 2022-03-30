import styled from "styled-components";
import colors from "../styles/constants/colors";
import flexbox from "../styles/function/flexbox";

const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  ${flexbox()}
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 7px solid ${colors.blue};
  border-top: 7px solid ${colors.white};
`;

const Spinner = () => {
  return (
    <Background>
      <Circle></Circle>
    </Background>
  );
};

export default Spinner;
