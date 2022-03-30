import styled from "styled-components";
import Logo from "../components/logo";
import Preface from "../components/preface";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import useWidth from "../hooks/useWidth";
import responsive, { breakpoint } from "../styles/constants/responsive";
import flexbox from "../styles/function/flexbox";
import colors from "../styles/constants/colors";
import mockupImg from "../assets/images/section/mobile-mockup.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("center", "center", "column")}

  ${responsive.mediaQuery.tablet} {
    ${flexbox("center", "flex-start", "column")}
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;

  ${responsive.mediaQuery.tablet} {
    justify-content: flex-end;
    margin-top: 0px;
  }
`;

const Rectangle = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 20px;
  background-image: linear-gradient(125deg, ${colors.blue}, ${colors.violet});

  ${responsive.mediaQuery.tablet} {
    width: 400px;
    height: 400px;
  }
`;

const Img = styled.img`
  position: absolute;
  bottom: 41px;
  width: 280px;

  ${responsive.mediaQuery.tablet} {
    bottom: -33px;
    width: 320px;
  }
`;

const IntroSection = () => {
  const { width } = useWidth();

  const title = ["여가를 보내는 방식을", "디자인 합니다."];
  const subtitle = [
    "전국민, 전세계인의 여가 방식을 디자인 해드립니다.",
    "건강한 즐거움의 경험을 세모스와 함께해요!",
  ];

  return (
    <Section>
      <Row>
        <Col sm={4} md={6}>
          <Wrapper>
            {width <= breakpoint.md && <Logo />}

            <Preface
              title={title}
              subtitle={subtitle}
              color={colors.blue}
              titleTop={true}
            />
          </Wrapper>
        </Col>

        <Col sm={4} md={6}>
          <ImgWrapper>
            <Rectangle />
            <Img src={mockupImg} alt="" />
          </ImgWrapper>
        </Col>
      </Row>
    </Section>
  );
};

export default IntroSection;
