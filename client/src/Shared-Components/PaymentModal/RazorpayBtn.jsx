/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const PayByRazorPay = ({ amount, handleClose }) => {
  const amt = Number(amount) * 100;
  const options = {
    key: 'rzp_test_V8xB38pJhvgTQe',
    amount: amt, ///pass a prop of the amount to donate
    name: 'Donation title', //pass the donation title
    description: "Make someone's Life Better",
    image:
      'data:image/jpeg;base64,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',
    handler: function (response) {
      console.log(response);
    },
    prefill: {
      name: '',
      contact: '',
      email: '',
    },
    theme: {
      color: 'grey',
      hide_topbar: false,
    },
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const openPayModal = async () => {
    const rzp1 = await new window.Razorpay(options);
    rzp1.open();
    console.log('amount', options.amount);
    // const payload = {
    //   },
    // };
    // dispatch(enrollUser(payload));
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          handleClose();
          openPayModal();
        }}
      >
        Yes!
      </Button>
    </>
  );
};

export default PayByRazorPay;
