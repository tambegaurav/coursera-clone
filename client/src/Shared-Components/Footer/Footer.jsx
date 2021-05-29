/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0;
  margin: auto;
  padding-top: 70px;
  padding-bottom: 50px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px;
  }

  & > .app-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > img {
      width: 150px;
      margin: 20px;
      cursor: pointer;
    }

    & > img:last-child {
      height: 100px;
      width: 70px;
    }
  }

  & > div > h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  & > div > p {
    font-size: 14px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Cont = styled.div`
  background-color: #f5f5f5;
`;

const Footer = () => {
  return (
    <Cont>
      <Grid>
        <div>
          <h3>Top Online Courses</h3>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
        </div>
        <div>
          <h3>Top Online Specializations</h3>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
        </div>
        <div>
          <h3>Online Certificates</h3>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
        </div>
        <div>
          <h3>Online Degree Programs</h3>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
        </div>

        <div>
          <h3>Top Online Specializations</h3>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
        </div>
        <div>
          <h3>Online Certificates</h3>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
        </div>
        <div>
          <h3>Online Degree Programs</h3>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
          <p>Finding Purpose & Meaning in Life</p>
          <p>Understanding Medical Research</p>
          <p>Japanese for Beginners</p>
          <p>Introduction to Cloud Computing</p>
          <p>Foundations of Mindfulness</p>
        </div>

        <div className="app-link">
          <img
            src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg"
            alt="appstore"
          />
          <img
            src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png"
            alt="gplay"
          />

          <img
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&dpr=2&w=151&h=120&q=40"
            alt="app-img"
          />
        </div>
      </Grid>
    </Cont>
  );
};

export default Footer;
