import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    marginTop: '40px',
    width: '100%',
  },
  container: {
    textAlign: 'center',
    paddingTop: '64px',
  },
  heading: {
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    fontSize: '28px',
    fontWeight: '600px',
    lineHeight: '36px',
  },
  logoImg: { width: '100%', height: '100%' },
}));
