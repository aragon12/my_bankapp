import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const MPIN_LENGTH = 4;

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
  balbtn: {
    color: theme.palette.primary.main,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textTransform: 'none',
  },
  btncont: {
    textAlign: 'right',
    marginTop: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(5.5),
  }
}));

function BalTile(props) {
  const [mpin, setMpin] = useState("");
  const [viewBalBtn, setViewBalBtn] = useState(true);
  const classes = useStyles();
  var errText = "";

  const handleInput = (event) => {
    if (!/^\d*$/.test(event.target.value)) {
      return;
    }
    setMpin(event.target.value);
    if (event.target.value.length === MPIN_LENGTH) {
      setViewBalBtn(false);
    } else {
      setViewBalBtn(true);
    }
  }

  const handleBtnClick = (mpin) => (event) => {
    props.onClick(mpin);
  }

  if (props.error) {
    errText = "Invalid MPIN"
  }

  return (
    <Paper className={classes.paper}>
      <CssBaseline />
      <div className={classes.content}>
        <Typography
          variant="h5"
          color="primary"
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
          type="password"
          inputProps={{ maxLength: MPIN_LENGTH }}
          error={props.error}
          helperText={errText}
          value={mpin}
          onInput={handleInput}
        />
      </div>
      <div className={classes.btncont}>
        <Button
          size='large'
          endIcon={<ChevronRightIcon />}
          className={classes.balbtn}
          disabled={viewBalBtn}
          onClick={props.onClick ? handleBtnClick(mpin) : undefined}
        >
          view balance
        </Button>
      </div>
    </Paper>
  );
};

export default BalTile;