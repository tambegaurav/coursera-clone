import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import axios from 'axios';

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  width: 500px;
  margin: auto;
  margin-top: 100px;

  & > .MuiTextField-root {
    width: 100%;
  }

  & > .MuiButton-root {
    width: 100%;
    height: 50px;
    background-color: #2a72cc;

    :hover {
      background-color: #0d52a7;
    }
  }
`;

const SignupPage = () => {
  const init = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
  };

  const [formdata, setFormdata] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSignup = () => {
    axios
      .post('http://localhost:5000/user/signup', formdata)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    setFormdata(init);
  };

  return (
    <div>
      <FormBox>
        <h1>Sign up Page</h1>
        <TextField
          onChange={handleChange}
          label="First Name"
          variant="outlined"
          name="first_name"
          value={formdata.first_name}
        />
        <TextField
          onChange={handleChange}
          label="Last Name"
          variant="outlined"
          name="last_name"
          value={formdata.last_name}
        />
        <TextField
          onChange={handleChange}
          label="Username"
          variant="outlined"
          name="username"
          value={formdata.username}
        />
        <TextField
          onChange={handleChange}
          label="Email Id"
          variant="outlined"
          name="email"
          value={formdata.email}
        />
        <TextField
          onChange={handleChange}
          label="Password"
          variant="outlined"
          name="password"
          value={formdata.password}
          type="password"
        />
        <Button onClick={handleSignup} variant="contained" color="primary">
          Create my Account!
        </Button>
      </FormBox>
    </div>
  );
};

export default SignupPage;
