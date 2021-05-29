/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import 'pure-react-carousel/dist/react-carousel.es.css';
import data from './Reviews.json';
import ReviewCard from './ReviewCard';
import useWindowDimensions from '../../../CustomHooks/useWindowDimensions';

const Grid = styled.div`
  width: 80%;
  margin-top: 50px;

  & > .carousal {
    display: grid;
    grid-template-columns: 50px auto 50px;

    & > .btn {
      background-color: transparent;
      border: none;
    }
  }
`;

const ReviewCarousal = () => {
  // eslint-disable-next-line no-unused-vars
  const { height, width } = useWindowDimensions();

  const [visbleSlides, setVisibleSlides] = useState(3);

  const [dimensions, setDimensions] = useState({
    h: 700,
    w: 500,
  });

  useEffect(() => {
    if (width > 1000) {
      setVisibleSlides(3);
      setDimensions({
        h: 500,
        w: 400,
      });
    } else if (width < 1000 && width > 600) {
      setVisibleSlides(2);
      setDimensions({
        h: 700,
        w: 400,
      });
    } else {
      setVisibleSlides(1);
      setDimensions({
        h: 1000,
        w: 500,
      });
    }
  }, [width]);

  return (
    <Grid>
      <CarouselProvider
        naturalSlideWidth={dimensions.w}
        naturalSlideHeight={dimensions.h}
        totalSlides={6}
        infinite
        step={1}
        visibleSlides={visbleSlides}
        className="carousal"
      >
        <ButtonBack className="btn">
          <ArrowBackIosIcon />
        </ButtonBack>
        <Slider>
          {data?.map((el, idx) => (
            <Slide index={idx} key={idx}>
              <ReviewCard data={el} />
            </Slide>
          ))}
        </Slider>

        <ButtonNext className="btn">
          <ArrowForwardIosIcon />
        </ButtonNext>
      </CarouselProvider>
    </Grid>
  );
};

export default ReviewCarousal;
