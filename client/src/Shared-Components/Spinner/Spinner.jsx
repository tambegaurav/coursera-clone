import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
      color: #0a67eb;
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <div>
        <h1>Coursera Loading...</h1>
        <Loader type="Bars" color="#2175eb" height={100} width={100} />
      </div>
    </SpinnerWrapper>
  );
};

export default Spinner;
