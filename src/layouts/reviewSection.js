import Carousel from "../components/carousel/carousel";
import Preface from "../components/preface";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import review from "../data/review";
import colors from "../styles/constants/colors";

const ReviewSection = () => {
  return (
    <Section gradient={`125deg, ${colors.violet}, ${colors.red}`}>
      <Row>
        <Col sm={4}>
          <Preface
            title={["SEMOS REVIEW"]}
            subtitle={["세모스를 만난 유저들의 솔직 담백한 이야기"]}
            color={colors.white}
            alignCenter={true}
          />
        </Col>
      </Row>

      <Row>
        <Col sm={4}>
          <Carousel reviews={review} />
        </Col>
      </Row>
    </Section>
  );
};

export default ReviewSection;
