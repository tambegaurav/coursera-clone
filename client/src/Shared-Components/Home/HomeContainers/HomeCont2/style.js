import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    paddingTop: '64px',
    paddingBottom: '64px',
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  heading: {
    fontWeight: '600',
    color: 'rgb(31,31,31)',
    marginBottom: '65px',
    lineHeight: '34px',
    fontSize: '44px',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
  },
  spanHead: {
    display: 'block',
    fontWeight: '600',
    color: 'rgb(31,31,31)',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    fontSize: '20px',
    lineHeight: '28px',
  },
  spanSub: {
    display: 'block',
    fontSize: '20px',
    fontWeight: 'normal',
  },
}));
