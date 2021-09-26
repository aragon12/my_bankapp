import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  mlist: {
    paddingLeft: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  accbtn: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
    textTransform: 'none',
  },
  btncont: {
    textAlign: 'right',
  },
}));

function TransferTile() {
  const classes = useStyles();

  return (
    <Paper>
      <Typography
        variant="h5"
        color="primary"
        className={classes.title}
      >
        Money Transfer
      </Typography>
      <List dense className={classes.mlist}>
        <ListItem button>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <AccountBalanceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Shubham Mishra" secondary="XXXXX856" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <AccountBalanceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Harshit" secondary="XXXXX349" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <AccountBalanceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Harshit" secondary="XXXXX349" />
        </ListItem>
      </List>
      <div className={classes.btncont}>
        <Button
          size='large'
          className={classes.accbtn}
          endIcon={<ChevronRightIcon />}
        >
          view all accounts
        </Button>
      </div>
    </Paper>

  )
}

export default TransferTile;