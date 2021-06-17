/* eslint-disable react/prop-types */
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
  color: #373a3c;

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

const CourseAbout = ({ courseDetails }) => {
  return (
    <Grid>
      <div>
        <h2 className="about-title">About this Course</h2>
        <p className="about-views">
          {Math.ceil(Math.random() * (25555 - 15500) + 15500)} recent views
        </p>
        <div className="about-desc">{courseDetails}</div>
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
