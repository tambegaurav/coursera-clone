/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const VideoBox = styled.div`
  background-color: #f8f8f8;
  color: #464646;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  /* width: 80%; */
  /* margin: 30px auto; */
  border-radius: 7px;
  padding: 20px 0;
  box-shadow: 2px 2px 5px #5c8dd3;

  & > .text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin: auto;
    padding: 30px 10px;
  }

  & > .video {
    justify-self: center;
  }
`;

const VideoComponent = ({ video }) => {
  const { title, description, week, video_url } = video;

  return (
    <VideoBox>
      <div className="text-content">
        <h1>Title: {title}</h1>
        <h3>Description: {description}</h3>
        <h3>Week Number: {week}</h3>
      </div>

      <video className="video" width="320" height="240" controls>
        <source src={video_url} type="video/mp4" />
      </video>
    </VideoBox>
  );
};

export default VideoComponent;
