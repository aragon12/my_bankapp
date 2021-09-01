import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrTxt, setEmailErrTxt] = useState('');
  const [pass, setPass] = useState('');
  const [passErr, setPassErr] = useState(false);
  const [passErrTxt, setPassErrTxt] = useState('');

  const validate = () => {
    var valid = true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "") {
      setEmailErr(true);
      setEmailErrTxt("Please enter your email");
      valid = false;
    } else if (!re.test(String(email).toLowerCase())) {
      setEmailErr(true);
      setEmailErrTxt("Enter a valid email");
      valid = false;
    } else {
      setEmailErr(false);
      setEmailErrTxt('');
    }
    if (pass === "") {
      setPassErr(true);
      setPassErrTxt("Please enter your password");
      valid = false;
    } else {
      setPassErr(false);
      setPassErrTxt('');
    }
    return valid;
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePassChange = (e) => {
    setPass(e.target.value);
  }

  const HandleLoginBtn = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("You are logged in");
    }
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={handleEmailChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoFocus
            error={emailErr}
            helperText={emailErrTxt}
          />
          <TextField
            onChange={handlePassChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            error={passErr}
            helperText={passErrTxt}
          />
          <div style={{ textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
              className={classes.submit}
              onClick={HandleLoginBtn}
            >
              Sign In
            </Button>
          </div >
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
