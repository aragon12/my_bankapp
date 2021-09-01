import AppDrawer from "./AppDrawer";
import { CssBaseline } from "@material-ui/core";
import Login from "./Login"

function App() {
  return (
    <div>
      <AppDrawer open={false}>
        <CssBaseline />
        <Login />
      </AppDrawer>

    </div>
  )
}

export default App;