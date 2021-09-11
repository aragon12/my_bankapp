import Home from "./Home";
import Login from "./Login";
import AppDrawer from "./AppDrawer";
import Test from "./Test";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <AppDrawer open={true}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/test' component={Test} />
    </Switch>
    </AppDrawer>
  )
}

export default App;