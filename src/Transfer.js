import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import IconButton from '@material-ui/core/IconButton';

const data = [
  {
    "name": "Shubham",
    "number": "48554854"
  },
  {
    "name": "Harshit",
    "number": "89556596"
  },
  {
    "name": "Chinu",
    "number": "23998146"
  },
  {
    "name": "Hello Moto",
    "number": "86328569"
  },
]

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: theme.spacing(4),
    bottom: theme.spacing(4),
  },
  header: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(-1),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    marginBottom: theme.spacing(0),
  }
}));

function Transfer() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" color="primary" className={classes.header}>Bank Accounts</Typography>
      <Grid container justifyContent="center">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper className={classes.paper}>
            <List>
              {data.map((account) => (
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <AccountBalanceIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={account.name} secondary={account.number} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </>
  )
}

export default Transfer;