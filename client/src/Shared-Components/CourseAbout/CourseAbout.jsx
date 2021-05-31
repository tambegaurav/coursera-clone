import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  width: 75%;
  margin: auto;
  margin-top: 20px;
  gap: 30px;
  margin-bottom: 30px;

  & .about-title {
    font-size: 28px;
  }

  & .about-desc {
    margin-top: 30px;
  }

  & .outcomes-box {
    background-color: #f8f8f8;
    margin: auto;
    width: 100%;
    padding: 20px;

    & > .title {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      gap: 20px;
      padding: 0 20px;
    }

    & .icon {
      font-size: 30px;
      border-radius: 30px;
      padding: 5px;
      margin: 10px 0;
      border: 2px solid #e1e1e1;
    }

    & .outcomes {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 20px;

      & > .outcome-flex {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;

        & .percent {
          font-size: 28px;
        }
      }
    }
  }
`;

const CourseAbout = () => {
  return (
    <Grid>
      <div>
        <h2 className="about-title">About this Course</h2>
        <p className="about-views">338,824 recent views</p>
        <div className="about-desc">
          This course explores Javascript based front-end application
          development, and in particular the React library (Currently Ver.
          16.3). This course will use JavaScript ES6 for developing React
          application. You will also get an introduction to the use of
          Reactstrap for Bootstrap 4-based responsive UI design. You will be
          introduced to various aspects of React components. You will learn
          about React router and its use in developing single-page applications.
          You will also learn about designing controlled forms. You will be
          introduced to the Flux architecture and Redux. You will explore
          various aspects of Redux and use it to develop React-Redux powered
          applications. You will then learn to use Fetch for client-server
          communication and the use of REST API on the server side. A quick tour
          through React animation support and testing rounds off the course. You
          must have preferably completed the previous course in the
          specialization on Bootstrap 4, or have a working knowledge of
          Bootstrap 4 to be able to navigate this course. Also a good working
          knowledge of JavaScript, especially ES 5 is strongly recommended.
        </div>
      </div>
      <div>
        <div className="outcomes-box">
          <div className="title">
            <PersonIcon className="icon" />
            <h4>Learner Career Outcomes</h4>
          </div>
          <div className="outcomes">
            <div className="outcome-flex">
              <SwapHorizIcon className="icon" />
              <div className="percent">18%</div>
              <div>started a new career after completing these courses</div>
            </div>
            <div className="outcome-flex">
              <SwapHorizIcon className="icon" />
              <div className="percent">18%</div>
              <div>started a new career after completing these courses</div>
            </div>
            <div className="outcome-flex">
              <SwapHorizIcon className="icon" />
              <div className="percent">18%</div>
              <div>started a new career after completing these courses</div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default CourseAbout;
