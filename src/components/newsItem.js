import styled from "styled-components";
import colors from "../styles/constants/colors";
import fontStyle from "../styles/function/fontStyle";

const Item = styled.li`
  padding: 10px 0;
  margin: 10px 0;

  color: ${colors.black};
  ${fontStyle(13)}
`;

const MetaData = styled.div`
  display: flex;
`;

const Publisher = styled.p`
  display: block;
  color: ${colors.blue};
  font-weight: 700;
  font-size: 14px;
  margin-right: 20px;
`;

const Date = styled.p`
  color: ${colors.darkGray};
`;

const Title = styled.p`
  font-weight: 700;
`;

const NewsItem = ({ news }) => {
  return (
    <Item>
      <a href={news.url}>
        <MetaData>
          <Publisher>{news.publisher}</Publisher>
          <Date>{news.date}</Date>
        </MetaData>

        <Title>
          {news.title.length < 30
            ? news.title
            : `${news.title.slice(0, 30)}...`}
        </Title>
      </a>
    </Item>
  );
};

export default NewsItem;
