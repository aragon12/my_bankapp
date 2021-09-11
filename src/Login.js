import Container from '@material-ui/core/Container';
import SignInTile from "./tiles/SignInTile";
function Login() {
  return (
      <Container component="main" maxWidth="xs">
        <SignInTile />
      </Container>
  )
}

export default Login;