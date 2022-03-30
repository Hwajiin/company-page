import { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import flexbox from "../../styles/function/flexbox";
import Slide from "./slide";

const Container = styled.div`
  width: 100%;
  ${flexbox()}
  position: relative;
  margin-top: 30px;
`;

const SlideContainer = styled.div`
  width: 260px;
  display: flex;
  overflow: hidden;

  ${responsive.mediaQuery.tablet} {
    width: 640px;
  }

  ${responsive.mediaQuery.desktop} {
    width: 960px;
  }
`;

const Cards = styled.ul`
  transform: ${({ idx }) => `translateX(-${idx * 260}px)`};
  width: 90%;
  display: flex;

  ${responsive.mediaQuery.tablet} {
    transform: ${({ idx }) => `translateX(-${idx * 320}px)`};
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  ${flexbox("space-between")}
`;

const Button = styled.button`
  width: 44px;
  height: 44px;
  background-color: ${colors.white};
  border-radius: 15px;
  color: ${colors.violet};
  font-size: 24px;
`;

const Carousel = ({ reviews }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const TOTAL_SLIDES = reviews.length - 1;

  const nextSlideHandler = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlideHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Container>
      <SlideContainer>
        <Cards idx={currentSlide}>
          {reviews.map((review, idx) => (
            <Slide
              key={idx}
              img={review.img}
              comment={review.comment}
              name={review.name}
            />
          ))}
        </Cards>
      </SlideContainer>

      <ButtonBox>
        <Button type="button" onClick={prevSlideHandler}>
          &lt;
        </Button>
        <Button type="button" onClick={nextSlideHandler}>
          &gt;
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default Carousel;
