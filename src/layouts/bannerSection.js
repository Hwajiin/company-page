import styled from "styled-components";
import Logo from "../components/logo";
import Preface from "../components/preface";
import QRBox from "../components/qrBox";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import useWidth from "../hooks/useWidth";
import colors from "../styles/constants/colors";
import responsive, { breakpoint } from "../styles/constants/responsive";
import flexbox from "../styles/function/flexbox";
import bannerImg from "../assets/images/section/banner.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("center", "center", "column")}

  ${responsive.mediaQuery.tablet} {
    ${flexbox("center", "flex-start", "column")}
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
  width: 250px;
  transform: translate(10px, 50px);

  ${responsive.mediaQuery.tablet} {
    width: 300px;
    transform: translate(32px, 50px);
  }
`;

const BannerSection = () => {
  const { width } = useWidth();

  const title = ["세상의 모든 스포츠를", "내 손안에! 👊"];
  const subtitle = [
    "내가 찾던 강사부터 시설까지,",
    "대한민국 운동 강습 No.1 플랫폼",
  ];

  return (
    <Section color={colors.blue}>
      <Row>
        <Col sm={4} md={6}>
          <Wrapper>
            {width < breakpoint.md && <Logo />}

            <Preface
              title={title}
              subtitle={subtitle}
              color={colors.white}
              titleTop={true}
            />

            {width >= breakpoint.md && <QRBox />}
          </Wrapper>
        </Col>

        <Col sm={4} md={6}>
          <ImgWrapper>
            <Img src={bannerImg} />
          </ImgWrapper>
        </Col>
      </Row>
    </Section>
  );
};

export default BannerSection;
