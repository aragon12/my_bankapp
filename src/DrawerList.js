import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import makeStyles from '@material-ui/core/styles/makeStyles';
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { Link, useLocation } from "react-router-dom";

function DrawerList() {
  return (
    <div>
      <List>
        <CustomListItem
          icon={DashboardIcon}
          text='Dashboard'
          url='/'
        />
        <CustomListItem
          icon={AccountCircleIcon}
          text='Profile'
          url='/profile'
        />
        <CustomListItem
          icon={AccountBalanceIcon}
          text='Transfer'
          url='/transfer'
        />
        <CustomListItem
          icon={ReceiptIcon}
          text='Transactions'
          url='/transactions'
        />
      </List>
    </div>
  )
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(-2),
  },
}));

function CustomListItem({ icon: Icon, text, url, ...rest }) {
  const classes = useStyles();
  const path = useLocation().pathname;
  const select = path === url;
  const color = select ? 'primary' : 'action';
  const list_text = select ?
    <Typography
      style={{ fontWeight: 'bold' }}
      color='primary'
    >
      {text}
    </Typography>
    : text;

  return (
    <ListItem
      button
      component={Link}
      to={url}
      {...rest}
    >
      <ListItemIcon  className={classes.icon}>
        <Icon color={color} />
      </ListItemIcon>
      <ListItemText primary={list_text} />
    </ListItem>
  );
}

export default DrawerList;

