import styled from "styled-components";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import fontStyle from "../styles/function/fontStyle";

const Div = styled.div`
  color: ${colors.black};
  ${fontStyle(13)}
`;

const Year = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 50px;

  ${responsive.mediaQuery.tablet} {
    font-size: 36px;
  }

  ${responsive.mediaQuery.tablet} {
    font-size: 44px;
  }
`;

const List = styled.ul`
  margin-bottom: 50px;

  ${responsive.mediaQuery.tablet} {
    margin-bottom: 0px;
  }
`;

const Month = styled.p`
  font-weight: 700;
  margin-right: 20px;
  color: ${colors.blue};
`;

const Item = styled.li`
  display: flex;
  padding: 5px 0;
`;

const Title = styled.p``;

const HistoryOfYear = ({ year, historyList }) => {
  return (
    <Div>
      <Year>{year}</Year>

      <List>
        {historyList.map((item, idx) => (
          <Item key={idx}>
            <Month>{item.month}</Month>
            <Title>{item.title}</Title>
          </Item>
        ))}
      </List>
    </Div>
  );
};

export default HistoryOfYear;
