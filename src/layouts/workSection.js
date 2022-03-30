import styled from "styled-components";
import Preface from "../components/preface";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import WorkBox from "../components/workBox";
import colors from "../styles/constants/colors";
import work1 from "../assets/images/section/work-1.png";
import work2 from "../assets/images/section/work-2.png";
import work3 from "../assets/images/section/work-3.png";
import responsive from "../styles/constants/responsive";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 200px;
  background-color: ${colors.vanilla};
  z-index: -1;

  ${responsive.mediaQuery.tablet} {
    height: 300px;
  }
`;

const WorkSection = () => {
  const workList = [
    {
      title: "고객 개발",
      img: work1,
      description: ["세모스의 고객을", "최우선으로 생각합니다."],
    },
    {
      title: "데이터 검증",
      img: work2,
      description: ["검증된 데이터만 믿고", "행동합니다."],
    },
    {
      title: "성장",
      img: work3,
      description: ["비약적인 성장을 이루는", "팀으로 발전합니다."],
    },
  ];
  return (
    <Section pos="relative">
      <Background />
      <Row>
        <Col sm={4}>
          <Preface
            title={["세모스는 이루어냅니다."]}
            color={colors.black}
            center={true}
          />
        </Col>

        <Col sm={4}>
          <Wrapper>
            <WorkBox workList={workList} />
          </Wrapper>
        </Col>
      </Row>
    </Section>
  );
};

export default WorkSection;
