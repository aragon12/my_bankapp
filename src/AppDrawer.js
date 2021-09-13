import { ThemeProvider } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import createTheme from '@material-ui/core/styles/createTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import clsx from 'clsx';
import { AuthList } from './DrawerList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarHead: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(0),
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9'
    },
    secondary: {
      main: '#f48fb1',
    },
    error: {
      main: '#f44336',
    },
  },
}

const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#1976d2'
    }
  },
}

function AppDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(props.open);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const homeTheme = createTheme(darkMode ? darkTheme : lightTheme);
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleMobileDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMobileOpen(!mobileOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <CustomAppBar
        mobile={isMobile}
        onThemeChange={toggleTheme}
        onDrawerChange={toggleDrawer}
        onMobileDrawerChange={toggleMobileDrawer}
      />
      <ThemeProvider theme={homeTheme}>
        <Drawer
          className={classes.drawer}
          variant={isMobile ? "temporary" : "persistent"}
          anchor="left"
          open={isMobile ? mobileOpen : open}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={toggleMobileDrawer}
        >
          <div onClick={toggleMobileDrawer}>
            <AuthList path={props.path} />
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          }, {
            [classes.contentShift]: isMobile,
          })}
        >
          <div className={classes.drawerHeader} />
          <CssBaseline />
          {props.children}
        </main>
      </ThemeProvider>
    </div>
  );
}

function CustomAppBar(props) {
  const classes = useStyles();

  const toggleTheme = () => {
    props.onThemeChange();
  };

  const toggleDrawer = () => {
    props.onDrawerChange();
  };

  const toggleMobileDrawer = (event) => {
    props.onMobileDrawerChange(event);
  };

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={props.mobile ? toggleMobileDrawer : toggleDrawer}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.appBarHead}>
          Bank App
        </Typography>
        <IconButton
          color="inherit"
          onClick={toggleTheme}
        >
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppDrawer;