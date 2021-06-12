/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { NavigateNext } from '@material-ui/icons';

const style = {
  cursor: 'pointer',
  color: 'white',
  fontWeight: 'bold',
};

const style1 = {
  color: 'white',
  fontWeight: 'bold',
};

const BreadCrumb = (props) => {
  //   const { history, location } = props;
  //   const { pathname } = location;

  //   const pathArr = pathname.split('/').filter((el) => el);
  const { history } = props;

  const handleClick = (category) => {
    history.push(`/browse/${category}`);
  };
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" color="primary" />}
      >
        <Link onClick={() => history.push('/')} style={style}>
          Browse
        </Link>
        <Link onClick={() => handleClick(props.course.category)} style={style}>
          {props.course.category}
        </Link>
        <p style={style1}>{props.course.course_name}</p>
        {/* {pathArr.map((path, ind) => {
          const routeTo = `/${pathArr.slice(0, ind + 1).join('/')}`;
          return (
            <Link
              color="textPrimary"
              onClick={() => history.push(routeTo)}
              style={cursor}
            >
              {path}
            </Link>
          );
        })} */}
      </Breadcrumbs>
    </div>
  );
};

export default withRouter(BreadCrumb);
