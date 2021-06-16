/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

import {
  Grid,
  Typography,
  Button,
  IconButton,
  Slider,
  Tooltip,
  Popover,
} from '@material-ui/core';
import {
  FastRewind,
  FastForward,
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  Fullscreen,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style';

export const Controls = forwardRef(
  (
    {
      onPlayPause,
      playing,
      onRewind,
      onForward,
      muted,
      onMute,
      onVolumeChange,
      onVolumeSeek,
      volume,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      played,
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      elapsedTime,
      totalDuration,
      onChangeDisplayFormat,
      onBookmark,
      videoTitle,
    },
    ref,
  ) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopover = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'playBackrate-popover' : undefined;

    // slider components

    function ValueLabelComponent(props) {
      const { children, open, value } = props;

      return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
          {children}
        </Tooltip>
      );
    }

    const PrettoSlider = withStyles({
      root: {
        height: 8,
      },
      thumb: {
        height: 19,
        width: 18,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginLeft: -1,
        marginTop: '8px',
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 6,
        borderRadius: 4,
        marginTop: '15px',
      },
      rail: {
        height: 6,
        borderRadius: 4,
        marginTop: '15px',
      },
    })(Slider);

    return (
      <div className={classes.controlsDiv} ref={ref}>
        {/* Top Control */}

        <Grid
          container
          alignItems="center"
          justify="space-between"
          style={{ padding: '16px' }}
        >
          <Grid item>
            <Typography varaint="h5" style={{ color: '#fff' }}>
              {videoTitle}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={onBookmark}
              variant="contained"
              color="primary"
              className={classes.bookmarkBtn}
            >
              Bookmark
            </Button>
          </Grid>
        </Grid>

        {/* Middle controls */}

        <Grid container alignItems="center" justify="center">
          <IconButton onClick={onRewind} className={classes.controlBtn}>
            <FastRewind fontSize="large" />
          </IconButton>

          <IconButton onClick={onPlayPause} className={classes.controlBtn}>
            {playing ? (
              <Pause fontSize="large" />
            ) : (
              <PlayArrow fontSize="large" />
            )}
          </IconButton>

          <IconButton onClick={onForward} className={classes.controlBtn}>
            <FastForward fontSize="large" />
          </IconButton>
        </Grid>

        {/* Bottom Controls */}

        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={12}>
            <PrettoSlider
              min={0}
              max={100}
              value={played * 100}
              ValueLabelComponent={(props) => (
                <ValueLabelComponent {...props} value={elapsedTime} />
              )}
              onChange={onSeek}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
            />
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <IconButton onClick={onPlayPause} className={classes.bottomIcon}>
                {playing ? (
                  <Pause fontSize="medium" />
                ) : (
                  <PlayArrow fontSize="medium" />
                )}
              </IconButton>
              <IconButton onClick={onMute} className={classes.bottomIcon}>
                {muted ? (
                  <VolumeOff fontSize="medium" />
                ) : (
                  <VolumeUp fontSize="medium" />
                )}
              </IconButton>
              <Slider
                min={0}
                max={100}
                value={volume * 100}
                className={classes.volSlider}
                onChange={onVolumeChange}
                onChangeCommitted={onVolumeSeek}
              />

              <Button
                onClick={onChangeDisplayFormat}
                variant="text"
                style={{ color: '#fff', marginLeft: 16 }}
              >
                <Typography>
                  {elapsedTime}/{totalDuration}
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              onClick={handlePopover}
              variant="text"
              className={classes.bottomIcon}
            >
              <Typography>{playbackRate}X</Typography>
            </Button>

            {/* popover */}

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <Grid container direction="column-reverse">
                {[0.5, 1, 1.5, 2].map((rate) => (
                  <Button
                    onClick={() => onPlaybackRateChange(rate)}
                    variant="text"
                  >
                    <Typography
                      color={
                        playbackRate === rate ? 'secondary' : 'textSecondary'
                      }
                    >
                      {rate}
                    </Typography>
                  </Button>
                ))}
              </Grid>
            </Popover>

            <IconButton
              onClick={onToggleFullScreen}
              className={classes.bottomIcon}
            >
              <Fullscreen fontSize="medium" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  },
);
