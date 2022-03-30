import styled from "styled-components";
import fonts from "../styles/constants/fonts";
import responsive from "../styles/constants/responsive";
import flexbox from "../styles/function/flexbox";
import fontStyle from "../styles/function/fontStyle";

const Header = styled.header`
  font-family: ${fonts.kr.secondary};
  color: ${({ color }) => color};
  ${({ center }) => center && flexbox()}}
`;

const Title = styled.div`
  margin-top: ${({ titleTop }) => (titleTop ? "50px" : "")};

  p {
    ${fontStyle(24)};
    font-weight: 500;
    font-family: ${fonts.kr.secondary};
    text-align: center;

    ${responsive.mediaQuery.tablet} {
      ${fontStyle(36)}
      font-family: ${fonts.kr.secondary};
      text-align: ${({ center }) => (center ? "center" : "left")};
      text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
    }

    ${responsive.mediaQuery.desktop} {
      ${fontStyle(44)}
      font-family: ${fonts.kr.secondary};
    }
  }
`;

const Subtitle = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  p {
    ${fontStyle(13)};
    text-align: center;
    font-weight: 600;

    ${responsive.mediaQuery.tablet} {
      ${fontStyle(14)}
      text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
    }
  }

  ${responsive.mediaQuery.tablet} {
    margin-bottom: 0;
  }
`;

const Preface = ({
  children,
  title = [],
  subtitle = [],
  color,
  titleTop = false,
  center = false,
  alignCenter = false,
}) => {
  return (
    <Header color={color} center={center}>
      <Title titleTop={titleTop} center={center} alignCenter={alignCenter}>
        {title.map((t, idx) => (
          <p key={idx}>{t}</p>
        ))}
      </Title>

      <Subtitle alignCenter={alignCenter}>
        {subtitle.map((sub, idx) => (
          <p key={idx}>{sub}</p>
        ))}
      </Subtitle>

      {children}
    </Header>
  );
};

export default Preface;
