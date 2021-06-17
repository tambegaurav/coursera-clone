/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.css';
import classNames from 'classnames';
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Button,
  Modal,
  Backdrop,
  Fade,
  Hidden,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  TextField,
  Grid,
  InputAdornment,
  Icon,
  Avatar,
} from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import FacebookIcon from '@material-ui/icons/Facebook';
import PersonIcon from '@material-ui/icons/Person';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import useStyles from './NavbarStyles';
import { signin, logoutUser } from '../../Redux/Auth/actions';
import Spinner from '../Spinner';

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const google = <Icon className={classNames(classes.icon, 'fa fa-google')} />;
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // LOGIN STUFF

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector((authState) => authState.auth.isAuth);
  const user = useSelector((authState) => authState.auth.user);
  const isError = useSelector((authState) => authState.auth.isError);
  const isLoading = useSelector((authState) => authState.auth.isLoading);

  const handleLogin = () => {
    const payload = {
      username,
      password,
    };
    dispatch(signin(payload));
    setUsername('');
    setPassword('');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.clear();
  };

  React.useEffect(() => {
    if (isAuth) {
      handleClose();
    }
  }, [isAuth]);

  // LOGIN STUFF ENDS

  const toggleDrawer = (anchor, open1) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open1 });
  };

  const handleClick = (category) => {
    history.push(`/browse/${category}`);
  };
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleJoin = () => {
    history.push('/signup');
  };

  if (isLoading) {
    return <Spinner />;
  }

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
                  {isError && (
                    <h6 className={classes.error}>Wrong Credentials</h6>
                  )}

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
                          <strong className={classes.inputHead}>
                            USERNAME
                          </strong>
                        </Grid>
                        <Grid item lg={12} style={{ width: '400px' }}>
                          <TextField
                            variant="outlined"
                            placeholder="username"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
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
                        onClick={handleLogin}
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
        marginTop: 86,
        top: 0,
        color: '#373a3c',
        background: 'white',
        marginLeft: 190,
        padding: 10,
      }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          'Data Science',
          'Web Development',
          'Machine Learning',
          'App Development',
          'Computer Science',
          'Information Technology',
          'Health',
          'Math & Logic',
        ].map((text) => (
          <div style={{ width: 280 }}>
            <ListItem
              button
              key={text}
              onClick={() => {
                handleClick(text);
              }}
            >
              <ListItemText primary={text} />
              <ListItemIcon>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.grow}>
      <AppBar
        position="relative"
        style={{ background: 'white', color: 'black' }}
        className={classes.appBar}
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
            <Link to="/">
              <img src="/logo.svg" width="120" alt="logo" />
            </Link>
          </Box>

          <Hidden mdDown>
            {['EXPLORE'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button
                  onClick={toggleDrawer(anchor, true)}
                  variant="contained"
                  color="primary"
                  endIcon={<ExpandMoreIcon />}
                  style={{ marginLeft: 50 }}
                  className={classes.exploreBtn}
                >
                  EXPLORE
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
              <Searchbar />
            </div>
          </Hidden>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button>FOR ENTERPRISE</Button>
            <Button color="inherit">FOR STUDENTS</Button>
            {!isAuth && (
              <Button type="button" color="inherit" onClick={handleOpen}>
                Login
              </Button>
            )}
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
                  </div>
                </Fade>
              </Modal>
            </div>
            {!isAuth && (
              <Button
                style={{ backgroundColor: '#0056D2' }}
                variant="contained"
                color="primary"
                onClick={handleJoin}
              >
                JOIN FOR FREE
              </Button>
            )}

            {/* After loggen in user's name,Avatar */}

            {isAuth && (
              <>
                <Divider orientation="vertical" flexItem />
                {/* <Avatar
                  className={classes.avatar}
                  component={Link}
                  to={`/profile/${user._id}`}
                >
                  <PersonIcon className={classes.person} />
                </Avatar> */}
                {user.profile_picture ? (
                  <Avatar
                    alt=""
                    src={user.profile_picture}
                    className={classes.person}
                    component={Link}
                    to={`/profile/${user._id}`}
                  />
                ) : (
                  <Avatar
                    className={classes.avatar}
                    component={Link}
                    to={`/profile/${user._id}`}
                  >
                    <PersonIcon className={classes.person} />
                  </Avatar>
                )}
                <Button component={Link} to={`/profile/${user._id}`}>
                  {user.first_name}
                </Button>
                <Button component={Link} to="/" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
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
