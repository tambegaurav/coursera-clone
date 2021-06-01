/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { Grid, Paper, Typography } from '@material-ui/core';

import useStyles from './style';
import { Controls } from './Controls';

const url =
  // eslint-disable-next-line max-len
  'https://masai-course.s3.ap-south-1.amazonaws.com/lecture/5435/material/88bade49e98db8790df275fcebb37a13/zoom_0.mp4';

let count = 0;

const format = (sec) => {
  if (Number.isNaN(sec)) {
    return '00:00';
  }
  const date = new Date(sec * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  }
  return `${mm}:${ss}`;
};

export const VidPlayer = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });
  const playerRef = useRef(null);
  const playerDiv = useRef(null);
  const canvasRef = useRef(null);
  const controlsRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [timeDispalyFormat, setTimeDispalyFormat] = useState('normal');
  const [bookmarks, setBookmarks] = useState([]);

  const { playing, muted, volume, playbackRate, played, seeking } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const handleVolumeChange = (e, val) => {
    setState({
      ...state,
      volume: parseFloat(val / 100),
      muted: val === 0,
    });
  };

  const handleVolumeSeek = (e, val) => {
    setState({
      ...state,
      volume: parseFloat(val / 100),
      muted: val === 0,
    });
  };

  const handlePlaybackRateChange = (rate) => {
    setState({ ...state, playbackRate: rate });
  };

  const handleToggleFullScreen = () => {
    screenfull.toggle(playerDiv.current);
  };

  const handleProgress = (changeState) => {
    if (count > 1) {
      controlsRef.current.style.visibility = 'hidden';
      count = 0;
      console.log('count', count);
    }

    if (controlsRef.current.style.visibility === 'visible') {
      count += 1;
      console.log('count', count);
    }

    if (!seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeek = (e, val) => {
    setState({ ...state, played: parseFloat(val / 100) });
  };

  // eslint-disable-next-line no-unused-vars
  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, val) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(val / 100);
  };

  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : '00:00:00';
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : '00:00';

  const elapsedTime =
    timeDispalyFormat === 'normal'
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;
  const totalDuration = format(duration);

  const handleChangeDisplayFormat = () => {
    setTimeDispalyFormat({
      ...state,
      timeDispalyFormat:
        timeDispalyFormat === 'normal' ? 'remaining' : 'normal',
    });
  };

  const addBookmark = () => {
    const canvas = canvasRef.current;
    canvas.width = 160;
    canvas.height = 90;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      playerRef.current.getInternalPlayer(),
      0,
      0,
      canvas.width,
      canvas.height,
    );

    const imageUrl = canvas.toDataURL();
    canvas.width = 0;
    canvas.height = 0;

    setBookmarks([
      ...bookmarks,
      { time: currentTime, display: elapsedTime, image: imageUrl },
    ]);
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = 'visible';
    count = 0;
  };

  return (
    <div className={classes.root}>
      <div
        ref={playerDiv}
        className={classes.playerDiv}
        onMouseMove={handleMouseMove}
      >
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          muted={muted}
          ref={playerRef}
          playing={playing}
          volume={volume}
          playbackRate={playbackRate}
          onProgress={handleProgress}
          config={{
            file: {
              attributes: {
                crossOrigin: 'anonymous',
              },
            },
          }}
        />
        <Controls
          ref={controlsRef}
          onPlayPause={handlePlayPause}
          playing={playing}
          onRewind={handleRewind}
          onForward={handleForward}
          muted={muted}
          onMute={handleMute}
          onVolumeChange={handleVolumeChange}
          onVolumeSeek={handleVolumeSeek}
          volume={volume}
          playbackRate={playbackRate}
          onPlaybackRateChange={handlePlaybackRateChange}
          onToggleFullScreen={handleToggleFullScreen}
          played={played}
          onSeek={handleSeek}
          onSeekMouseDown={handleSeekMouseDown}
          onSeekMouseUp={handleSeekMouseUp}
          elapsedTime={elapsedTime}
          totalDuration={totalDuration}
          onChangeDisplayFormat={handleChangeDisplayFormat}
          onBookmark={addBookmark}
        />
      </div>
      <Grid container style={{ marginTop: '20px' }} spacing={3}>
        {bookmarks.map((el, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item key={ind}>
            <Paper
              style={{ cursor: 'pointer' }}
              onClick={() => playerRef.current.seekTo(el.time)}
            >
              <img crossOrigin="anonymous" src={el.image} alt="bookmark" />
              <Typography>Bookmark at {el.display}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <canvas ref={canvasRef} />
    </div>
  );
};
