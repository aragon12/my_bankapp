import Grid from '@material-ui/core/Grid';
import SignInTile from "./tiles/SignInTile";
function Login() {
  return (
    <Grid container justifyContent='center'>
      <SignInTile />
    </Grid>
  )
}

export default Login;