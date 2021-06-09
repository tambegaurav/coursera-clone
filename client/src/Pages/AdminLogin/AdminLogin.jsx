import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const FormBox = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      history.push('/admin/dashboard');
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong credentials. Access denied');
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <FormBox>
        <h1>Login</h1>

        <TextField
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </FormBox>
    </div>
  );
};

export default AdminLogin;
