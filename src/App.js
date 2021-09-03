import AppDrawer from "./AppDrawer";
import BalTile from "./BalTile";

function App() {
  // Amount default ••••
  return (
    <div>
      <AppDrawer open={true}>
        <BalTile amount="••••" />
      </AppDrawer>
    </div>
  )
}

export default App;