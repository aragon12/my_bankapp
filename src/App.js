import Grid from "@material-ui/core/Grid";
import AppDrawer from "./AppDrawer";
import BalTile from "./BalTile";
import TransferTile from "./TransferTile"

function App() {
  // Amount default ••••
  return (
    <div>
      <AppDrawer open={true}>
        <Grid container spacing={3} >
          <Grid item lg={4} md={4} sm={6} xs={12} >
            <BalTile amount="••••" />
          </Grid>
          <Grid item lg={8} md={8} sm={6} xs={12}>
            <TransferTile />
          </Grid>
        </Grid>
      </AppDrawer>
    </div>
  )
}

export default App;