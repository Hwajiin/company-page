import { useState } from "react";
import styled from "styled-components";
import Preface from "../components/preface";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import colors from "../styles/constants/colors";
import personalImg from "../assets/images/webpage/page-personal.png";
import regionalImg from "../assets/images/webpage/page-regional.png";
import crewImg from "../assets/images/webpage/page-crew.png";
import logbookImg from "../assets/images/webpage/page-logbook.png";
import Lnb from "./lnb";
import Mobile from "../components/mobile";
import responsive, { breakpoint } from "../styles/constants/responsive";
import ShortcutLink from "../components/shortcutLink";
import useWidth from "../hooks/useWidth";

const Wrapper = styled.div`
  width: 100%;

  ${responsive.mediaQuery.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
  }
`;

const DetailSection = () => {
  const [name, setName] = useState("personal");
  const { width } = useWidth();

  const categoryHandler = (catogoryName) => {
    setName(catogoryName);
  };

  const category = {
    personal: {
      title: ["나에게 맞는 강습", "어디서 찾지? 🧐"],
      subtitle: [
        "내 지역/취향/실력에 맞는 운동 강습을",
        "세모스에서 찾아드려요!",
      ],
      img: personalImg,
      linkText: "나에게 맞는 강습 찾기",
    },

    regional: {
      title: ["원하는 강습을", "원하는 곳에서 👌"],
      subtitle: [
        "내 주변부터 원하는 지역까지 선택이 가능해요.",
        "원하는 강습을 쉽고 빠르게 찾아보세요!",
      ],
      img: regionalImg,
      linkText: "내 주변 강습 알아보기",
    },

    crew: {
      title: ["혼자 왔니?", "이젠 다 같이 운동하자! 😎"],
      subtitle: [
        "합리적인 가격과 알맞은 컨디션의 강습을",
        "나와 비슷한 크루들과 함께! 즐거움 UP!",
      ],
      img: crewImg,
      linkText: "크루 강습 신청하기",
    },

    logbook: {
      title: ["강습도 관리받는 시대!", "일상 기록으로 소확행 🥰"],
      subtitle: [
        "나몰라라 강습은 이제 그만 멈춰! 강습 관리는 물론이고,",
        "운동 일상을 기록하는 로그북까지 만나보세요.",
      ],
      img: logbookImg,
      linkText: "나만의 운동 일상 기록하기",
    },
  };

  return (
    <Section color={colors.vanilla} pos="relative">
      <Row>
        <Col sm={4}>
          <Lnb clickHandler={categoryHandler} currentCategory={name} />
        </Col>
      </Row>

      <Row>
        <Col sm={4}>
          <Wrapper>
            <div>
              <Preface
                title={category[name].title}
                subtitle={category[name].subtitle}
                color={colors.blue}
              />

              {width >= breakpoint.md && (
                <ShortcutLink text={category[name].linkText} marginTop={true} />
              )}
            </div>

            <Mobile
              mobileImg={category[name].img}
              text={category[name].linkText}
            />
          </Wrapper>
        </Col>
      </Row>
    </Section>
  );
};

export default DetailSection;
