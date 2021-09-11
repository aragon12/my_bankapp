import Grid from "@material-ui/core/Grid";
import BalTile from "./tiles/BalTile";
import TransferTile from "./tiles/TransferTile"

function Home() {
  // Amount default ••••
  return (
    <Grid container spacing={3} >
      <Grid item lg={4} md={4} sm={6} xs={12} >
        <BalTile amount="••••" />
      </Grid>
      <Grid item lg={8} md={8} sm={6} xs={12}>
        <TransferTile />
      </Grid>
    </Grid>
  )
}

export default Home;