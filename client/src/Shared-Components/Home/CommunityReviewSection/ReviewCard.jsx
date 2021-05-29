/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  & > h3 {
    color: rgb(56, 45, 139);
    font-size: 28px;
  }

  & > .certi {
    font-size: 18px;
    font-weight: 600;
  }

  & > hr {
    position: relative;
    top: 20px;
    border: none;
    height: 3px;
    background: rgb(42, 115, 204);
    margin-bottom: 50px;
    width: 100px;
  }

  & > p {
    text-align: center;
    font-size: 18px;
  }
`;

const ReviewCard = ({ data }) => {
  return (
    <Cont>
      <img src={data.image} alt="" />
      <h3>{data.name}</h3>
      <div className="certi">{data.certi}</div>
      <div>{data.place}</div>
      <hr />
      <p>{data.review}</p>
    </Cont>
  );
};

export default ReviewCard;
