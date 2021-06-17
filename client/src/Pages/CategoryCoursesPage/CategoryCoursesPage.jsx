/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */

import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
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
import styles from './categorycourses.module.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import useWindowDimensions from '../../CustomHooks/useWindowDimensions';
import Course from './Course';
import Footer from '../../Shared-Components/Footer/Footer';
import { getCourses } from '../../CustomHooks/CourseApi';
import Navbar from '../../Shared-Components/Navbar';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';

const Banner = styled.div`
  width: 100%;
  background-image: url('https://i.pinimg.com/originals/2f/3b/68/2f3b68716f952953f8222c4df316b709.jpg');
  height: 200px;
  > h1 {
    width: 80%;
    color: #fff;
    text-transform: capitalize;
    margin: auto;
    padding: 5%;
  }
  .link {
    cursor: pointer;
    color: white;
    font-weight: 'bold';
    text-transform: capitalize;
  }
`;

const CategoryCoursesPage = () => {
  const [courses, setCourses] = React.useState([]);
  const { category } = useParams();
  const history = useHistory();

  useDocumentTitle(`Coursera | Browse`);

  console.log(courses);
  React.useEffect(() => {
    getCourses(category).then((res) => {
      setCourses(res);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Banner>
        <h1>{category} </h1>
      </Banner>
      {courses.length > 0 ? (
        <div>
          <div className={styles.empty}>
            <h2>Most Popular {category} Courses</h2>
          </div>
          <section className={styles.main}>
            {courses.length > 0 &&
              courses.map((course) => {
                return (
                  <Link
                    to={`/browse/${course.category}/${course.course_name}`}
                    key={course._id}
                    className={styles.card}
                  >
                    <Course course={course} />
                    <div className={styles.cardInfo}>
                      <h4>{course.author}</h4>
                    </div>
                  </Link>
                );
              })}
          </section>
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>No Courses Found For This Category</h2>
          <Link style={{ fontSize: 20 }} to="/">
            Go to Home Page
          </Link>
        </div>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CategoryCoursesPage;
