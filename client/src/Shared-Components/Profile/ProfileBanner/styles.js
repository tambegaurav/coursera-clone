import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    backgroundImage:
      'url(https://s3.amazonaws.com/coursera_assets/growth_account_profile/account_bg_black2.png)',
    width: '100%',
    height: '368px',
    backgroundSize: 'cover',
    marginTop: '-20px',
  },
  iconDiv: {
    marginTop: '20px',
    border: '1px solid transparent',
    padding: 10,
  },
  updateIconBtn: {
    background: 'white',
    color: 'gray',
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  updateIcon: {
    color: '#0056D2',
  },
  avatar: {
    background: '#55c1e6',
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  personIcon: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  userName: {
    color: 'white',
    fontSize: '22px',
    fontFamily: 'OpenSans,Arial,sans-serif',
    fontWeight: 400,
  },
}));
