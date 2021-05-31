import React from 'react';
import styled from 'styled-components';

import Week from './Week';
import list from './data.js';

const Cont = styled.div`
  width: 90%;
  margin: auto;
`;

function Syllabus() {
  // const [data, setData] = useState(list);

  return (
    <Cont>
      <header style={{ textAlign: 'center' }}>
        <h2>Syllabus</h2>
        <h2> What you will learn from this course</h2>
        <h4>Content Rating 92% : (1,831 ratings)</h4>
      </header>

      <div>
        {list.map((week) => {
          return (
            <Week
              key={week.week}
              week={week.week}
              duration={week.duration}
              title={week.title}
              description={week.description}
              videos={week.videos}
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
