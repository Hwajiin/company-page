import styled from "styled-components";
import Col from "../components/responsive/col";
import Container from "../components/responsive/container";
import Row from "../components/responsive/row";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import fontStyle from "../styles/function/fontStyle";
import instaIcon from "../assets/icon/insta.svg";
import blogIcon from "../assets/icon/blog.svg";
import youtubeIcon from "../assets/icon/youtube.svg";
import facebookIcon from "../assets/icon/facebook.svg";
import responsive from "../styles/constants/responsive";
import { useLocation } from "react-router-dom";

const SFooter = styled.footer`
  /* padding: 50px 0; */
  background-color: ${colors.vanilla};
  padding: ${({ pathname }) => (pathname === "/" ? "100px 0" : "50px 0")};
  padding-top: 50px;

  ${responsive.mediaQuery.tablet} {
    padding: 50px 0;
  }
`;

const Strong = styled.strong`
  font-size: ${typography.size.small}px;
`;

const P = styled.p`
  ${fontStyle(typography.size.micro)}
  margin: 10px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const UDiv = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  justify-content: center;

  ${responsive.mediaQuery.tablet} {
    justify-content: end;
  }
`;

const Ul = styled.ul`
  display: flex;

  li {
    margin: 0 20px;
  }

  li:not(:last-child) {
    a {
      display: flex;
      width: 54px;
      height: 54px;
      background-color: #484848;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      img {
        width: 60%;
      }
    }
  }

  li:last-child {
    ${responsive.mediaQuery.tablet} {
      margin-right: 0;
    }
  }
`;

const FacebookLink = styled.a``;

const Facebook = styled.img`
  width: 54px;
`;

const DList = styled.dl`
  display: flex;
  margin-top: 10px;
  ${fontStyle(typography.size.micro)}
`;

const DDiv = styled.div`
  display: flex;
  margin-right: 20px;
`;

const DTerm = styled.dt`
  &:after {
    content: ":";
    margin: 5px;
  }
`;

const Footer = () => {
  const { pathname } = useLocation();

  const semosSocialList = [
    {
      icon: instaIcon,
      url: "https://www.instagram.com/semos_sports/",
      label: "세모스 인스타그램",
      alt: "인스타그램",
    },
    {
      icon: youtubeIcon,
      url: "https://www.youtube.com/channel/UCJPnOxX_AxNCL11A2ar7liw",
      label: "세모스 유튜브",
      alt: "유튜브",
    },
    {
      icon: blogIcon,
      url: "https://blog.naver.com/semos2020",
      label: "세모스 블로그",
      alt: "블로그",
    },
    {
      icon: facebookIcon,
      url: "https://www.facebook.com/semossports/",
      label: "세모스 페이스북",
      alt: "페이스북",
    },
  ];

  return (
    <SFooter pathname={pathname}>
      <Container>
        <Row>
          <Col sm={4}>
            <UDiv>
              <Ul>
                <li>
                  <a
                    href="https://www.instagram.com/semos_sports/"
                    target="_blank"
                    aria-label="세모스 인스타그램"
                  >
                    <img src={instaIcon} alt="인스타그램" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/channel/UCJPnOxX_AxNCL11A2ar7liw"
                    target="_blank"
                    aria-label="세모스 유튜브"
                  >
                    <img src={youtubeIcon} alt="유튜브" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://blog.naver.com/semos2020"
                    target="_blank"
                    aria-label="세모스 블로그"
                  >
                    <img src={blogIcon} alt="블로그" />
                  </a>
                </li>

                <li>
                  <FacebookLink
                    href="https://www.facebook.com/semossports/"
                    target="_blank"
                    aria-label="세모스 페이스북"
                  >
                    <Facebook src={facebookIcon} alt="페이스북" />
                  </FacebookLink>
                </li>
              </Ul>
            </UDiv>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <div>
              <Strong>리포츠(주)</Strong>

              <DList>
                <DDiv>
                  <DTerm>대표</DTerm>
                  <dd>변민지</dd>
                </DDiv>

                <DDiv>
                  <DTerm>개인정보책임자</DTerm>
                  <dd>허재혁</dd>
                </DDiv>

                <DDiv>
                  <DTerm>사업자등록번호</DTerm>
                  <dd>206-88-01662</dd>
                </DDiv>
              </DList>

              <address>
                <P>
                  주소 : 인천 연수구 송도문화로 119, B1041-5,6 세상의 모든
                  스포츠
                </P>
              </address>

              <P>
                제휴/마케팅/홍보 문의 : 카카오톡 채널 @세모스:세상의 모든 스포츠
              </P>

              <P>
                리포츠(주)는 통신판매중개자이며 서비스 상품에 대한 당사자 및
                주최자가 아닙니다. 따라서 리포츠는 등록 된 서비스 상품에 대해
                책임지지 않습니다.
              </P>
            </div>
          </Col>
        </Row>
      </Container>
    </SFooter>
  );
};

export default Footer;
