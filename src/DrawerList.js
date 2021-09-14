import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { Link, useLocation } from "react-router-dom";

export function AuthList() {
  const path = useLocation().pathname;
  return (
    <div>
      <List>
        <CustomListItem
          button
          icon={DashboardIcon}
          text='Dashboard'
          select={path === '/'}
          component={Link}
          to='/'
        />
        <CustomListItem
          button
          icon={AccountCircleIcon}
          text='Profile'
          select={path === '/profile'}
          component={Link}
          to='/profile'
        />
        <CustomListItem
          button
          icon={AccountBalanceIcon}
          text='Transfer'
          select={path === '/transfer'}
          component={Link}
          to='/transfer'
        />
        <CustomListItem
          button
          icon={ReceiptIcon}
          text='Transactions'
          select={path === '/transactions'}
          component={Link}
          to='/transactions'
        />
      </List>
    </div>
  )
};

function CustomListItem({ icon: Icon, text, select, ...rest }) {
  text = select ? <Typography color='primary'>{text}</Typography> : text;
  return (
    <ListItem selected={select} {...rest}>
      <ListItemIcon>
        <Icon color={select ? 'primary' : undefined} />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}


