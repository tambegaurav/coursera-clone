import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  playerDiv: {
    position: 'relative',
    height: '100%',
    width: '100%',
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
    position: 'absolute',
    maxWidth: '770px',
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
}));
