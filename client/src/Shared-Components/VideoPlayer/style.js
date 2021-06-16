import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    padding: '20px',
  },
  playerDiv: {
    position: 'relative',
    width: '90%',
    margin: 'auto',
    marginTop: '20px',
  },
  controlsDiv: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  bookmarkCont: {
    width: '90%',
    margin: 'auto',
    overflowY: 'scroll',
    height: '200px',
  },
  controlBtn: {
    color: '#777',
    fontSize: 50,
    transform: 'scale(0.9)',
    '&:hover': {
      color: '#fff',
      transform: 'scale(1)',
    },
  },
  bottomIcon: {
    color: '#999',
    '&:hover': {
      color: '#fff',
    },
  },
  volSlider: {
    width: 100,
  },
  bookmarkBtn: {
    background: '#0056D2',
  },
}));
