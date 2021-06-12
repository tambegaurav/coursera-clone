import axios from 'axios';

export const getCourses = (category) => {
  return axios
    .get(`http://localhost:5000/course/browse/${category}`)
    .then((res) => {
      // console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
