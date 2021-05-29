import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: '40px',
  },
  heroSpanHead: {
    display: 'block',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    fontSize: '84px',
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: '600',
    letterSpacing: '2px',
    lineHeight: '92px',
    textDecoration: 'none solid rgb(31, 31, 31)',
    textAlign: 'start',
    textIndent: '0px',
    textTransform: 'none',
    verticalAlign: 'baseline',
    whiteSpace: 'normal',
    wordSpacing: '0px',
    color: 'rgb(31,31,31)',
  },
  heroSpanSub: {
    display: 'block',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: '400',
    letterSpacing: '-0.1px',
    lineHeight: '28px',
    textDecoration: 'none solid rgb(31, 31, 31)',
    textAlign: 'start',
    textIndent: '0px',
    textTransform: 'none',
    verticalAlign: 'baseline',
    whiteSpace: 'normal',
    wordSpacing: '0px',
    color: 'rgb(31,31,31)',
  },
  heroBtn: {
    background: '#0056D2',
    color: '#ffff',
    fontSize: '17px',
    fontWeight: '700',
    letterSpacing: '-0.1px',
    lineHeight: '28px',
    height: '72px',
    width: '238px',
  },
  heroImg: {
    height: '100%',
  },
  smallHeroImg: {
    [theme.breakpoints.down('764')]: {
      display: 'none',
    },
  },
  mediumHeroImg: {
    [theme.breakpoints.down('1076')]: {
      marginLeft: '20%',
    },
  },
  mediumHeroBtn: {
    [theme.breakpoints.down('1250')]: {
      height: '48px',
      width: '152.38px',
    },
  },
}));
