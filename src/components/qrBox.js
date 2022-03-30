import iQRCode from "../assets/images/qrcode/qrcode-ios.png";
import aQRCode from "../assets/images/qrcode/qrcode-adroid.png";
import styled from "styled-components";
import colors from "../styles/constants/colors";
import flexbox from "../styles/function/flexbox";
import fonts from "../styles/constants/fonts";
import responsive from "../styles/constants/responsive";

const Div = styled.div`
  display: flex;
  margin-top: 30px;
  color: ${colors.white};

  ${responsive.mediaQuery.tablet} {
    margin-top: ${({ sectionName }) =>
      sectionName === "download" ? "0px" : "30px"};
  }

  p {
    margin-bottom: 10px;
    font-family: ${fonts.kr.secondary};
    font-weight: 700;
    font-size: 13px;
  }

  div:not(:last-child) {
    margin-right: 30px;
  }
`;

const Box = styled.div`
  ${flexbox("center", "center", "column")}
`;

const ImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  ${flexbox()}
  background-color: ${colors.white};
  border-radius: 7px;
`;

const Img = styled.div`
  width: 80%;
  height: 80%;

  background: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
`;

const QRBox = ({ sectionName = "banner" }) => {
  const qrList = [
    {
      imgURL: iQRCode,
      alt: "ios QR code",
      title: "ios 다운로드",
    },
    {
      imgURL: aQRCode,
      alt: "adroid QR code",
      title: "안드로이드 다운로드",
    },
  ];

  return (
    <Div sectionName={sectionName}>
      {qrList.map((qr, idx) => (
        <Box key={idx}>
          <p>{qr.title}</p>

          <ImgWrapper>
            <Img url={qr.imgURL} />
          </ImgWrapper>
        </Box>
      ))}
    </Div>
  );
};

export default QRBox;
