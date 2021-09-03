import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    height: 240,
    width: 300,
  },
  balbtn: {
    color: theme.palette.primary.main,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textTransform: 'none',
  },
  btncont: {
    textAlign: 'right',
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
}));

function BalTile(props) {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Paper className={classes.paper}>
        <div className={classes.content}>
          <Typography
            variant="h5"
            color="primary"
            gutterBottom
          >
            Balance
          </Typography>
          <Typography color="textSecondary">
            current amount:
          </Typography>
          <Typography variant="h3">
            ₹ {props.amount}
          </Typography>
        </div>
        <div className={classes.btncont}>
          <Button
            size='large'
            endIcon={<ChevronRightIcon />}
            className={classes.balbtn}>
            view balance
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default BalTile;