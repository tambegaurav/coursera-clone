import { fade, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    fontFamily: 'Georgia,serif',
    fontWeight: 'bolder',
    fontSize: '1.4em',
    color: '#0056D2',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      display: 'block',
      width: 'auto',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    // border: '1px solid black',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    border: '1px solid black',

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '24ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 6, 6, 6),
    borderRadius: '5px',
    height: '85vh',
    width: '26vw',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  modalCont: {
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    color: 'rgb(31,31,31)',
    fontWeight: 'normal',
    fontSize: '25px',
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  spanField: {
    display: 'block',
    width: '80%',
  },
  inputHead: {
    fontSize: '15px',
    textAlign: 'left',
  },
  loginDiv: {
    width: '100%',
    marginTop: '25px',
  },
  fgtPass: {
    fontSize: '15px',
    marginTop: '8px',
    textAlign: 'left',
    color: '#0056D2',
  },
  logo: {
    height: '24px',
  },
  logoDiv: {
    cursor: 'pointer',
  },
}));
