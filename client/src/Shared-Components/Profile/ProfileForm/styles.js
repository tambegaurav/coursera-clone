import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginTop: '40px',
  },
  paper: {
    padding: '10px 20px 30px 20px',
  },
  heading: {
    fontFamily: 'OpenSans,Arial,sans-serif',
    fontSize: '32px',
    lineHeight: '36px',
    fontWeight: 400,
    color: '#333',
  },
  button: {
    background: '#0056D2',
    padding: 17,
    width: '150px',
    fontWeight: 700,
  },
  grid: {
    marginBottom: '30px',
    marginTop: '20px',
  },
  intro: {
    fontFamily: 'OpenSans-Light,Arial,sans-serif',
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 500,
    color: '#333',
  },
  introPara: {
    marginTop: '8px',
    marginBottom: '10px',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: 'OpenSans,Arial,sans-serif',
    color: '#333',
  },
  inputGrid: {
    marginTop: '30px',
    width: '1090px',
    textAlign: 'right',
  },
  label: {
    width: '200px',
  },
  value: {
    width: '700px',
  },
  labelText: {
    color: 'black',
    fontFamily: 'OpenSans,Arial,sans-serif',
    fontWeight: 700,
    fontSize: '14px',
  },
  avatar: {
    background: '#55c1e6',
    width: theme.spacing(16),
    height: theme.spacing(15),
  },
  personIcon: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  photoBtn: {
    background: '#0056D2',
    fontWeight: 'bold',
    marginLeft: '15px',
    color: 'white',
  },
  selectTag: {
    textAlign: 'left',
  },
  chooseFileBtn: {
    marginLeft: '10px',
  },
}));
