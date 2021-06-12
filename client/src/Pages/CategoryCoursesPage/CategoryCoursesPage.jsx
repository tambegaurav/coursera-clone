/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */

import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import 'pure-react-carousel/dist/react-carousel.es.css';
import useWindowDimensions from '../../CustomHooks/useWindowDimensions';
import Course from './Course';
import Footer from '../../Shared-Components/Footer/Footer';
import { getCourses } from '../../CustomHooks/CourseApi';

const Banner = styled.div`
  width: 100%;
  background-image: url('https://i.pinimg.com/originals/2f/3b/68/2f3b68716f952953f8222c4df316b709.jpg');
  > h1 {
    width: 80%;
    color: #fff;
    text-transform: capitalize;
    margin: auto;
    padding: 5%;
    // background: blue;
  }
  .link {
    cursor: pointer;
    color: white;
    font-weight: 'bold';
    text-transform: capitalize;
  }
`;
const Grid = styled.div`
  width: 90%;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  > h2 {
    margin-left: 60px;
    margin-bottom: 20px;
  }
  & > .carousal {
    display: grid;
    grid-template-columns: 50px auto 50px;
    align-items: center;

    & > .btn {
      background-color: transparent;
      border: none;
    }
  }
`;

const CategoryCoursesPage = () => {
  const [courses, setCourses] = React.useState([]);
  const { category } = useParams();
  const history = useHistory();

  console.log(courses);
  React.useEffect(() => {
    getCourses(category).then((res) => {
      setCourses(res);
    });
  }, []);

  const handleClick = (courseName, Category) => {
    history.push(`/browse/${Category}/${courseName}`);
  };

  // eslint-disable-next-line no-unused-vars
  const { height, width } = useWindowDimensions();

  const [visbleSlides, setVisibleSlides] = React.useState(4);

  const [dimensions, setDimensions] = React.useState({
    h: 700,
    w: 500,
  });

  React.useEffect(() => {
    if (width > 1000) {
      setVisibleSlides(4);
      setDimensions({
        h: 700,
        w: 400,
      });
    } else if (width < 1000 && width > 600) {
      setVisibleSlides(3);
      setDimensions({
        h: 900,
        w: 400,
      });
    } else {
      setVisibleSlides(2);
      setDimensions({
        h: 1000,
        w: 500,
      });
    }
  }, [width]);
  return (
    <div>
      <Banner>
        <h1>{category} </h1>
      </Banner>
      {courses.length > 0 ? (
        <Grid>
          <h2>Most Popular {category} Courses</h2>
          <CarouselProvider
            naturalSlideWidth={dimensions.w}
            naturalSlideHeight={dimensions.h}
            totalSlides={courses.length}
            infinite
            step={1}
            visibleSlides={visbleSlides}
            className="carousal"
          >
            <ButtonBack className="btn">
              <ArrowBackIosIcon />
            </ButtonBack>
            <div style={{ marginBottom: 50, paddingBottom: 50 }}>
              {courses.length > 0 && (
                <Slider>
                  {courses?.map((course, idx) => (
                    <Slide
                      onClick={() =>
                        handleClick(course.course_name, course.category)
                      }
                      index={idx}
                      key={idx}
                    >
                      <Course course={course} />
                    </Slide>
                  ))}
                </Slider>
              )}
            </div>

            <ButtonNext className="btn">
              <ArrowForwardIosIcon />
            </ButtonNext>
          </CarouselProvider>
        </Grid>
      ) : (
        <div>
          <h2>No Courses Found</h2>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CategoryCoursesPage;
