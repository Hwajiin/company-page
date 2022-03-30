import HistoryOfYear from "../components/historyOfYear";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import history from "../data/history";

const HistorySection = () => {
  return (
    <Section color={"#DFEDFD"}>
      <Row>
        <Col sm={4} md={6}>
          <HistoryOfYear year={"2021"} historyList={history[2021]} />
        </Col>
        <Col sm={4} md={6}>
          <HistoryOfYear year={"2020"} historyList={history[2020]} />
        </Col>
      </Row>
    </Section>
  );
};

export default HistorySection;
