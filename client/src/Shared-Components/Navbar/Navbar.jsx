import React from 'react';
import 'font-awesome/css/font-awesome.css';
import classNames from 'classnames';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppleIcon from '@material-ui/icons/Apple';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import {
  Container,
  TextField,
  Grid,
  InputAdornment,
  Icon,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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

const Navbar = () => {
  const classes = useStyles();
  const google = <Icon className={classNames(classes.icon, 'fa fa-google')} />;
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
  });
  const toggleDrawer = (anchor, open1) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open1 });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="inherit">FOR ENTERPRISE</Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">FOR STUDENTS</Button>
      </MenuItem>
      <MenuItem>
        <Button type="button" color="inherit" onClick={handleOpen}>
          Login
        </Button>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <Container className={classes.modalCont}>
                  <h2 style={{ marginBottom: '30px', letterSpacing: '1px' }}>
                    Welcome back
                  </h2>
                  <Box height="75%">
                    <Grid container direction="column" spacing={1}>
                      <Grid
                        item
                        container
                        direction="column"
                        spacing={1}
                        alignItems="flex-start"
                        lg={12}
                      >
                        <Grid item lg={12}>
                          <strong className={classes.inputHead}>EMAIL</strong>
                        </Grid>
                        <Grid item lg={12} style={{ width: '400px' }}>
                          <TextField
                            variant="outlined"
                            placeholder="name@email.com"
                            fullWidth
                          />
                        </Grid>
                      </Grid>

                      <Grid
                        item
                        container
                        direction="column"
                        spacing={1}
                        alignItems="flex-start"
                        lg={12}
                      >
                        <Grid item lg={12}>
                          <strong className={classes.inputHead}>
                            PASSWORD
                          </strong>
                        </Grid>
                        <Grid item lg={12} style={{ width: '400px' }}>
                          <TextField
                            variant="outlined"
                            placeholder="Enter your password"
                            fullWidth
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton>
                                    <VisibilityIcon />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                          <Grid item>
                            <p className={classes.fgtPass}>
                              Forgot your password?
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <div className={classes.loginDiv}>
                      <Button
                        variant="contained"
                        style={{
                          width: '100%',
                          background: '#0056D2',
                          color: 'white',
                        }}
                        size="large"
                      >
                        Login
                      </Button>
                    </div>
                    <Divider style={{ marginTop: '22px' }} />

                    <div className={classes.loginDiv}>
                      <Button
                        variant="outlined"
                        style={{
                          width: '100%',
                        }}
                        size="large"
                        startIcon={google}
                      >
                        <strong>
                          {' '}
                          Continue with Google&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong>
                      </Button>
                    </div>
                    <div className={classes.loginDiv}>
                      <Button
                        variant="outlined"
                        style={{
                          width: '100%',
                        }}
                        size="large"
                        startIcon={<FacebookIcon />}
                      >
                        <strong> Continue with Facebook</strong>
                      </Button>
                    </div>
                    <div className={classes.loginDiv}>
                      <Button
                        variant="outlined"
                        style={{
                          width: '100%',
                        }}
                        size="large"
                        startIcon={<AppleIcon />}
                      >
                        <strong>
                          Continue with Apple
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong>
                      </Button>
                    </div>
                    <Container
                      style={{
                        color: '#706f6c',
                        fontSize: '17px',
                        marginTop: '15px',
                      }}
                    >
                      New to Coursera?&nbsp;
                      <span style={{ color: '#0056D2' }}>Sign Up</span>
                    </Container>
                  </Box>
                </Container>
                <Divider />
              </div>
            </Fade>
          </Modal>
        </div>
      </MenuItem>
      <MenuItem>
        <Button>Join For Free</Button>
      </MenuItem>
    </Menu>
  );

  const list = (anchor) => (
    <div
      style={{
        position: 'fixed',
        marginTop: 70,
        top: 0,

        background: 'blue',
        marginLeft: 90,
      }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ background: 'white', color: 'black', zIndex: 100 }}
      >
        <Toolbar>
          <Box
            component="div"
            display={{
              xs: 'block',
              width: '50%',
              sm: 'block',
              md: 'block',
              lg: 'block',
              xl: 'block',
            }}
            visibility="visible"
          >
            <img src="logo.svg" width="120" alt="logo" />
          </Box>

          <Hidden mdDown>
            {['EXPLORE'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onMouseOver={toggleDrawer(anchor, true)}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: '#0056D2' }}
                    endIcon={<ExpandMoreIcon />}
                  >
                    EXPLORE
                  </Button>
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Drawer
              anchor="top"
              // open={state[anchor]}
              onClose={toggleDrawer('top', false)}
            >
              {list('top')}
            </Drawer>
          </Hidden>

          <Hidden xsDown>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="What do you want to learn ?"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Hidden>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button>FOR ENTERPRISE</Button>
            <Button color="inherit">FOR STUDENTS</Button>
            <Button type="button" color="inherit" onClick={handleOpen}>
              Login
            </Button>
            <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">LOGIN FORM</h2>

                    <p id="transition-modal-description">
                      react-transition-group animates me.
                    </p>
                  </div>
                </Fade>
              </Modal>
            </div>
            <Button
              style={{ backgroundColor: '#0056D2' }}
              variant="contained"
              color="primary"
            >
              JOIN FOR FREE
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Navbar;
