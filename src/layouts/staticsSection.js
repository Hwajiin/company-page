import styled from "styled-components";
import Preface from "../components/preface";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import colors from "../styles/constants/colors";
import responsive, { breakpoint } from "../styles/constants/responsive";
import trainingImg from "../assets/images/section/training.png";
import flexbox from "../styles/function/flexbox";
import Statics from "../components/statics";
import useWidth from "../hooks/useWidth";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${flexbox("center", "center", "column")}

  ${responsive.mediaQuery.tablet} {
    ${flexbox("flex-start", "flex-start", "column")}
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  ${responsive.mediaQuery.tablet} {
    justify-content: flex-end;
  }
`;

const Img = styled.img`
  width: 330px;
  transform: translateY(-10px);
  object-fit: cover;

  ${responsive.mediaQuery.tablet} {
    width: 450px;
  }
`;

const StaticsSection = () => {
  const { width } = useWidth();
  const title = ["세모스는", "건강한 즐거움을", "선사합니다."];

  return (
    <Section color={colors.white}>
      <Row>
        <Col sm={4} md={6}>
          <Wrapper>
            <Preface title={title} color={colors.black}></Preface>

            {width >= breakpoint.md && <Statics />}
          </Wrapper>
        </Col>

        <Col sm={4} md={6}>
          <ImgWrapper>
            <Img src={trainingImg} />
          </ImgWrapper>

          {width < breakpoint.md && <Statics />}
        </Col>
      </Row>
    </Section>
  );
};

export default StaticsSection;
