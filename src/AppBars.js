import { AppBar as BaseAppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarHead: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
}));

function StaticAppBar({ onThemeChange }) {
  return (
    <BaseAppBar
      position="fixed"
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Bank App
        </Typography>
        <IconButton
          color="inherit"
          edge="end"
          onClick={onThemeChange}
        >
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </BaseAppBar>
  );
}

function AppBar({ onThemeChange, onDrawerChange, onMobileDrawerChange }) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  const classes = useStyles();

  return (
    <BaseAppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={isMobile ? onMobileDrawerChange : onDrawerChange}
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
          edge="end"
          onClick={onThemeChange}
        >
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </BaseAppBar>
  );
}

export {AppBar, StaticAppBar};