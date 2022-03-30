import styled from "styled-components";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import flexbox from "../styles/function/flexbox";

const Box = styled.div`
  font-size: 12px;
  transform: translateY(-100px);
  color: ${colors.black};

  ${responsive.mediaQuery.tablet} {
    position: absolute;
    bottom: -50px;
    z-index: 30;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("flex-start", "center", "column")}
`;

const Standard = styled.p`
  margin-top: 10px;

  ${responsive.mediaQuery.tablet} {
    align-self: flex-start;
  }
`;

const Cards = styled.div`
  display: flex;

  div:not(:last-child) {
    margin-right: 10px;
  }

  ${responsive.mediaQuery.tablet} {
    div:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const Card = styled.div`
  width: 110px;
  height: 80px;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${flexbox("center", "center", "column")};

  ${responsive.mediaQuery.tablet} {
    width: 150px;
    height: 100px;
  }
`;

const Value = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 5px;

  ${responsive.mediaQuery.tablet} {
    font-size: 36px;
  }
`;

const Statics = () => {
  const statics = [
    {
      attr: ["베타서비스 런칭", "4개월 간 누적 거래액"],
      value: "1억",
    },
    {
      attr: ["입점 강사 수"],
      value: "200+",
    },
    {
      attr: ["재구매율"],
      value: "58%",
    },
  ];

  return (
    <Box>
      <Wrapper>
        <Cards>
          {statics.map((item, idx) => (
            <Card key={idx}>
              {item.attr.map((a, idx) => (
                <p key={idx}>{a}</p>
              ))}
              <Value>{item.value}</Value>
            </Card>
          ))}
        </Cards>

        <Standard>*2022년 01월 기준</Standard>
      </Wrapper>
    </Box>
  );
};

export default Statics;
