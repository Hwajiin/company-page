import styled from "styled-components";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import fontStyle from "../styles/function/fontStyle";

const Box = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  ${fontStyle(12)}
  color: ${colors.black};

  div:not(:last-child) {
    margin-right: 10px;

    ${responsive.mediaQuery.tablet} {
      margin-right: 20px;
    }
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Card = styled.div`
  width: 33%;
  height: 200px;
  padding: 10px;
  background-color: ${colors.white};
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  ${responsive.mediaQuery.tablet} {
    width: 25%;
    height: 300px;
  }

  ${responsive.mediaQuery.desktop} {
    width: 20%;
  }
`;

const Description = styled.div`
  font-size: 10px;
`;

const WorkBox = ({ workList }) => {
  return (
    <Box>
      {workList.map((item, idx) => (
        <Card key={idx} src={item.img}>
          <Title>{item.title}</Title>

          <Description>
            {item.description.map((d, idx) => (
              <p key={idx}>{d}</p>
            ))}
          </Description>
        </Card>
      ))}
    </Box>
  );
};

export default WorkBox;
