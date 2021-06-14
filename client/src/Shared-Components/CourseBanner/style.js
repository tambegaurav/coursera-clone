import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    width: '80%',
    color: 'white',
    padding: '48px 10%',
  },
  bannerCont: {
    width: '80%',
    marginLeft: '42px',
    marginRight: '12px',
  },
  heading: {
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    fontWeight: '700',
    fontSize: '34px',
    marginTop: '20px',
  },
  description: {
    display: 'block',
    fontSize: '17px',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    marginTop: '20px',
  },
  descp: {
    marginTop: '0px',
  },
  ratingNum: {
    color: 'rgb(247, 187, 86)',
    fontWeight: '600',
    fontSize: '15px',
  },
  totalRating: {
    fontWeight: 'normal',
    fontSize: '15px',
  },
  enrollBtn: {
    backgroundColor: 'white',
    // color: '#021B79',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '10px 20px',
  },
  spanBtn: {
    display: 'block',
    fontSize: '0.5 rem',
  },
}));
