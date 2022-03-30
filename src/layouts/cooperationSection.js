import styled from "styled-components";
import CooperationBox from "../components/cooperationBox";
import Preface from "../components/preface";
import Col from "../components/responsive/col";
import Row from "../components/responsive/row";
import Section from "../components/section";
import colors from "../styles/constants/colors";
import bluepointImg from "../assets/images/cooperation/bluepoint-partners.png";
import hangbokImg from "../assets/images/cooperation/행복나래.png";
import kaistImg from "../assets/images/cooperation/kaist.png";
import skProbonoImg from "../assets/images/cooperation/sk-probono.png";
import skSocialImg from "../assets/images/cooperation/sk-social.png";
import kaistMBAImg from "../assets/images/cooperation/kaist-mba.png";
import kosmeImg from "../assets/images/cooperation/kosme.png";
import sdiImg from "../assets/images/cooperation/sdi.png";
import erdiImg from "../assets/images/cooperation/erdi.png";
import tdiImg from "../assets/images/cooperation/tdi.png";
import pfiImg from "../assets/images/cooperation/pfi.png";
import firstResponseImg from "../assets/images/cooperation/first-response.png";

const CooperationSection = () => {
  const cooperationList = [
    { img: bluepointImg },
    { img: hangbokImg },
    { img: kaistImg },
    { img: skProbonoImg },
    { img: skSocialImg },
    { img: kaistMBAImg },
    { img: kosmeImg },
    { img: sdiImg },
    { img: erdiImg },
    { img: tdiImg },
    { img: pfiImg },
    { img: firstResponseImg },
  ];

  return (
    <Section>
      <Row>
        <Col sm={4}>
          <Preface
            title={["세모스를 함께 만드는 사람들"]}
            color={colors.black}
            center={true}
          />

          <CooperationBox cooperationList={cooperationList} />
        </Col>
      </Row>
    </Section>
  );
};

export default CooperationSection;
