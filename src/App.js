import AppDrawer from "./AppDrawer";
import BalTile from "./BalTile";

function App() {
  return (
    <div>
      <AppDrawer open={true}>
        <BalTile amount="7,345.00" />
      </AppDrawer>
    </div>
  )
}

export default App;