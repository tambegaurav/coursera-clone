/* eslint-disable react/prop-types */
import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import PayByRazorPay from './RazorpayBtn';

const Box = styled.div`
  background-color: #0156d1;
  width: 700px;
  border-radius: 7px;
  margin-top: 200px;
  padding: 10px 20px;
  color: white;

  & > h1 {
    margin-top: 50px;
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 20px;

  > .MuiButtonBase-root {
    color: white;
    font-size: 18px;
  }
`;

const PaymentModal = ({ handleClose, courseId }) => {
  return (
    <Box>
      <h1>Are you sure, you want to purchase this Course?</h1>
      <Buttons>
        <PayByRazorPay
          amount={500}
          handleClose={handleClose}
          courseId={courseId}
        />
        <Button onClick={handleClose}>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default PaymentModal;
