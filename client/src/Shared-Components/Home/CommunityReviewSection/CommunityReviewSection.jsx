import React from 'react';
import styled from 'styled-components';
import ReviewCarousal from './ReviewCarousal';

const CommunityGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  & > .title {
    font-size: 36px;
    margin-bottom: 15px;
    text-align: center;
  }

  & > p {
    font-size: 28px;
    text-align: center;
  }
`;

const CommunityReviewSection = () => {
  return (
    <CommunityGrid>
      <h2 className="title">From the Coursera community</h2>
      <p>77+ million people are already learning on Coursera</p>
      <ReviewCarousal />
    </CommunityGrid>
  );
};

export default CommunityReviewSection;
