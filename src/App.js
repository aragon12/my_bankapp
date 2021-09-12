import Home from "./Home";
import Login from "./Login";
import AppDrawer from "./AppDrawer";
import Test from "./Test";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

const isLogged = true;

function App() {
  const location = useLocation();
  return (
    <AppDrawer path={location.pathname} open={true}>
      <Switch>
        <PrivateRoute isLogged={isLogged} exact path='/' component={Home} />
        <RestrictedRoute isLogged={isLogged} exact path='/login' component={Login} />
        <Route exact path='/test' component={Test} />
      </Switch>
    </AppDrawer>
  )
}

//Allows only authorized users to access
function PrivateRoute({ component: Component, isLogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => isLogged
        ? <Component {...props} />
        : <Redirect to='/login' />}
    />
  )
}

//Restrict authorized users to access certain pages
//Like Login/Register
function RestrictedRoute({ component: Component, isLogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => isLogged
        ? <Redirect to='/' />
        : <Component {...props} />}
    />
  )
}

export default App;