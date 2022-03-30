import styled from "styled-components";
import responsive from "../styles/constants/responsive";

const Box = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgWrapper = styled.img`
  width: 170px;
  height: 70px;
  object-fit: contain;
  margin: 10px;

  ${responsive.mediaQuery.desktop} {
    width: 230px;
  }
`;

const CooperationBox = ({ cooperationList }) => {
  return (
    <Box>
      {cooperationList.map((item, idx) => (
        <ImgWrapper key={idx} src={item.img} />
      ))}
    </Box>
  );
};

export default CooperationBox;
