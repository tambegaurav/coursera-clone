/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import Week from './Week';
import list from './data.js';

const Cont = styled.div`
  width: 90%;
  margin: auto;
  color: #373a3c;
  margin-top: 20px;
`;

function Syllabus({ course }) {
  // const [data, setData] = useState(list);
  const mainArr = [];
  console.log(course);
  if (course.video_ids) {
    let videosArr = [];
    let description = '';
    for (let i = 0; i < course.video_ids.length - 1; i++) {
      if (course.video_ids[i].week === course.video_ids[i + 1].week) {
        videosArr.push(course.video_ids[i].title);
        description += `${course.video_ids[i].description} , `;
      } else {
        const obj = {
          week: course.video_ids[i].week,
          videos: [...videosArr, course.video_ids[i].title],
          description: description + course.video_ids[i].description,
        };
        mainArr.push(obj);
        videosArr = [];
        description = '';
      }
      if (i === course.video_ids.length - 2) {
        mainArr.push({
          week: course.video_ids[i].week,
          videos: [...videosArr, course.video_ids[i].title],
          description: description + course.video_ids[i].description,
        });
      }
    }
  }
  console.log(mainArr);

  return (
    <Cont>
      <header style={{ textAlign: 'center' }}>
        <h2>Syllabus</h2>
        <h2> What you will learn from this course</h2>
        <h4>Content Rating 92% : (1,831 ratings)</h4>
      </header>

      <div>
        {mainArr.length > 0
          ? mainArr.map((week) => {
              return (
                <Week
                  key={week.week}
                  week={week.week}
                  duration={(Math.random() * (3 - 2) + 2).toFixed(0)}
                  title={week.title}
                  description={week.description}
                  videos={week.videos}
                  readings={[
                    {
                      title: 'Welcome',
                      time_in_minutes: (Math.random() * (20 - 12) + 8).toFixed(
                        0,
                      ),
                    },
                    {
                      title: 'Solution to Problem 1-4',
                      time_in_minutes: (Math.random() * (30 - 20) + 20).toFixed(
                        0,
                      ),
                    },
                  ]}
                  exercises={[
                    {
                      title: 'Web-development Tests',
                      time_in_minutes: (Math.random() * (40 - 20) + 20).toFixed(
                        0,
                      ),
                    },
                  ]}
                />
              );
            })
          : list.map((week) => {
              return (
                <Week
                  key={week.week}
                  week={week.week}
                  duration={week.duration}
                  title={week.title}
                  description={week.description}
                  videos={[
                    'Introduction and Course Structure',
                    'Basic of Web-development',
                  ]}
                  readings={week.readings}
                  exercises={week.exercises}
                />
              );
            })}
      </div>
    </Cont>
  );
}

export default Syllabus;
