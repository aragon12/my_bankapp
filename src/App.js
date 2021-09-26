import Home from "./Dashboard";
import Login from "./Login";
import AppDrawer from "./AppDrawer";
import Test from "./Test";
import Transfer from "./Transfer";
import { Switch, Route, Redirect } from "react-router-dom";

const isLogged = true;

function App() {
  return (
    <Switch>
      <AppDrawer isLogged={isLogged}>
        <PrivateRoute isLogged={isLogged} exact path='/' component={Home} />
        <PrivateRoute isLogged={isLogged} exact path='/transfer' component={Transfer} />
        <RestrictedRoute isLogged={isLogged} exact path='/login' component={Login} />
        <Route exact path='/test' component={Test} />
      </AppDrawer>
    </Switch>
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