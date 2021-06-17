import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Week.module.css';

function Week({
  week,
  duration,
  title,
  description,
  videos,
  readings,
  exercises,
}) {
  const [readMore, setReadMore] = useState(false);
  const [readMore1, setReadMore1] = useState(false);
  console.log(videos);
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h3>WEEK</h3>
        {/* <br /> */}
        <h1 style={{ fontSize: '3em' }}>{week} </h1>
      </div>

      <div className={styles.right}>
        <h3>{duration} hours to complete</h3>
        <h2>{title} </h2>
        <div>
          <p>
            {readMore
              ? description
              : `${description.substring(0, description.length / 1.3)}...`}
            <button
              type="button"
              className={styles.description}
              onClick={() => setReadMore(!readMore)}
              onKeyDown={() => undefined}
            >
              {readMore ? 'show less' : 'read more'}
            </button>
          </p>
        </div>
        <p>
          {videos.length} videos , {readings.length} readings ,
          {exercises.length} exercises
          <button
            type="button"
            className={styles.description}
            onClick={() => setReadMore1(!readMore1)}
            onKeyDown={() => undefined}
          >
            {readMore1 ? 'SEE LESS' : 'SHOW ALL'}
          </button>
          <br />
          {readMore1 && (
            <div>
              <h4>{videos.length} Videos</h4>
              {videos.map((video) => (
                <div style={{ marginTop: 10 }}>
                  {video} : {(Math.random() * (10 - 5) + 3).toFixed(0)} minutes
                </div>
              ))}
              <br />
              <hr style={{ width: '60%' }} />
              <br />
              <h4> {readings.length} readings</h4>
              {readings.map((el) => (
                <div style={{ marginTop: 10 }}>
                  {el.title} : {el.time_in_minutes} minutes
                </div>
              ))}
              <br />
              <hr style={{ width: '60%' }} />
              <br />
              <h4> {exercises.length} practice exercises</h4>
              {exercises.map((el) => (
                <div style={{ marginTop: 10 }}>
                  {el.title} : {el.time_in_minutes} minutes
                </div>
              ))}
            </div>
          )}
        </p>
      </div>
    </div>
  );
}

export default Week;
Week.defaultProps = {
  week: PropTypes.number,
  duration: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  videos: PropTypes.arrayOf,
  readings: PropTypes.arrayOf,
  exercises: PropTypes.arrayOf,
};
Week.propTypes = {
  week: PropTypes.number,
  duration: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  videos: PropTypes.arrayOf,
  readings: PropTypes.arrayOf,
  exercises: PropTypes.arrayOf,
};
