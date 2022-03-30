import Preface from "../components/preface";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import colors from "../styles/constants/colors";
import news from "../data/news";
import NewsItem from "../components/newsItem";

const NewsSection = () => {
  return (
    <Section>
      <Row>
        <Col sm={4}>
          <Preface title={["세모스 소식"]} color={colors.black} center={true} />

          <ul>
            {news.map((item, idx) => (
              <NewsItem key={idx} news={item} />
            ))}
          </ul>
        </Col>
      </Row>
    </Section>
  );
};

export default NewsSection;
