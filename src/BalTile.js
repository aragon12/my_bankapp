import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(12),
    display: "inline-block",
  },
  balbtn: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(5),
    color: theme.palette.primary.main,
  },
}));

function BalTile(props) {
  const classes = useStyles();
  return(
    <div>
      <CssBaseline />
        <Paper className={classes.paper}>
          <Typography
          variant="h6"
          color="primary"
          gutterBottom>
            Balance
          </Typography>
          <Typography color="textSecondary">
          current balance is:
        </Typography>
          <Typography variant="h4">
            ₹ {props.amount}
          </Typography>
            <Button
            size='small'
            endIcon={<ChevronRightIcon />}
            className={classes.balbtn}>
              check balance
            </Button>
        </Paper>
    </div>
  );
};

export default BalTile;