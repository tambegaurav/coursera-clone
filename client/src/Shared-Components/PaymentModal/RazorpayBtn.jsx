/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enrollUser } from '../../Redux/Auth/actions';

const PayByRazorPay = ({ amount, handleClose, courseId }) => {
  const amt = Number(amount) * 100;
  const options = {
    key: 'rzp_test_V8xB38pJhvgTQe',
    amount: amt, ///pass a prop of the amount to donate
    name: 'Course Title', //pass the donation title
    description: 'Step towards learning',
    image:
      'https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-144x144.png',
    handler: function (response) {
      console.log(response);
    },
    prefill: {
      name: '',
      contact: '',
      email: '',
    },
    theme: {
      color: 'blue',
      hide_topbar: false,
    },
  };

  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.auth.user);

  const openPayModal = async () => {
    const rzp1 = await new window.Razorpay(options);
    rzp1.open();
    const enrolledCourses = [...activeUser.enrolled_courses, courseId];
    console.log(enrolledCourses);
    const payload = {
      ...activeUser,
      enrolled_courses: enrolledCourses,
    };
    dispatch(enrollUser(activeUser._id, payload));
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
