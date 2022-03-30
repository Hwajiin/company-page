import React from "react";
import styled from "styled-components";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import flexbox from "../../styles/function/flexbox";
import fontStyle from "../../styles/function/fontStyle";

const Card = styled.li`
  width: 240px;
  height: 370px;
  padding: 10px 20px;
  margin: 0 10px;
  flex-shrink: 0;
  background-color: ${colors.white};
  border-radius: 7px;
  ${fontStyle(13)};
  color: ${colors.black};
  ${flexbox("flex-start", "center", "column")}
  ${responsive.mediaQuery.tablet} {
    width: 300px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 10px 0;
`;

const Comment = styled.p``;

const Slide = ({ img, name, comment }) => {
  return (
    <Card>
      <Img src={img} />
      <Name>{name}</Name>
      <Comment>{comment}</Comment>
    </Card>
  );
};

export default Slide;
