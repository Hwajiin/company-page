import styled from "styled-components";
import Container from "./responsive/container";

const SSection = styled.section`
  position: ${({ pos }) => pos};
  padding: 50px 0;
  background-color: ${({ color }) => color};
  background-image: ${({ gradient }) => `linear-gradient(${gradient})`};
`;

const Section = ({ children, color, pos = "static", gradient = null }) => {
  return (
    <SSection color={color} pos={pos} gradient={gradient}>
      <Container>{children}</Container>
    </SSection>
  );
};

export default Section;
