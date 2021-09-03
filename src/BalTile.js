import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: 340,
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
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(3),
  }
}));

function BalTile(props) {
  const classes = useStyles();
  var errText = "";

  const numFilter = (event) => {
    //only allows numbers in input field
    if (!/[0-9][0-9]*/.test(event.key)) {
      event.preventDefault();
    }
  }

  if (props.error) {
    errText = "Invalid MPIN"
  }

  return (
    <div>
      <CssBaseline />
      <Paper className={classes.paper}>
        <div className={classes.content}>
          <Typography
            variant="h5"
            color="primary"
            gutterBottom
            className={classes.title}
          >
            Balance
          </Typography>
          <Typography variant="h3">
            ₹ {props.amount}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="4 Digit MPIN"
            onKeyPress={numFilter}
            inputProps={{ maxLength: 4 }}
            error={props.error}
            helperText={errText}
          />
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