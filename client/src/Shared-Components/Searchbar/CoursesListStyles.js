import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  iconButton: {
    padding: 10,
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
  img: {
    border: '1px solid black',
    width: '180px',
    height: '180px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  list: {
    display: 'grid',
    // position: 'relative',
    // top: 5,
    gridTemplateColumns: '1fr 7fr',
    width: '70%',
    margin: 'auto',
    gap: '20px',
    padding: '20px',
    cursor: 'pointer',
  },

  emptylist: {
    width: '50%',
    margin: 'auto 30%',
    gap: '20px',
    padding: '30px',
  },

  filter: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    gap: '15px',
    backgroundColor: '#f8f8f8',
  },

  pagination: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
}));
