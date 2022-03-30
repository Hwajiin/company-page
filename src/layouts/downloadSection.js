import styled from "styled-components";
import Preface from "../components/preface";
import QRBox from "../components/qrBox";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import flexbox from "../styles/function/flexbox";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  ${responsive.mediaQuery.tablet} {
    ${flexbox("flex-start")}
  }
`;

const QRWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${flexbox("center", "center")}

  ${responsive.mediaQuery.tablet} {
    justify-content: flex-end;
  }
`;

const DownloadSection = () => {
  const title = ["세모스에서 알맞은", "스포츠 강습을 경험하세요."];

  return (
    <Section color={colors.blue}>
      <Row>
        <Col sm={4} md={7}>
          <Wrapper>
            <Preface title={title} color={colors.white} center={true} />
          </Wrapper>
        </Col>

        <Col sm={4} md={5}>
          <QRWrapper>
            <QRBox sectionName="download" />
          </QRWrapper>
        </Col>
      </Row>
    </Section>
  );
};

export default DownloadSection;
