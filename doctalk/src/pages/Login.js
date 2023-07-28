import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 'auto',
    marginTop: '100px',
    padding: '20px',
  },
  textField: {
    marginBottom: '10px',
  },
  loginButton: {
    marginTop: '20px',
  },
});

const LoginForm = () => {
  const classes = useStyles();

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            className={classes.textField}
            label="Username"
            variant="outlined"
            fullWidth
          />
          <TextField
            className={classes.textField}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <Button
            className={classes.loginButton}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
