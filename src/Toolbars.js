import { Toolbar as BaseToolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  toolBarHead: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
}));

function StaticToolbar({ onThemeChange }) {
  return (
    <BaseToolbar>
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
    </BaseToolbar>
  );
}

function Toolbar({ onThemeChange, onDrawerChange, onMobileDrawerChange }) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  const toggleDrawer = isMobile ? onMobileDrawerChange : onDrawerChange;
  const classes = useStyles();

  return (
    <BaseToolbar>
      <IconButton
        color="inherit"
        onClick={toggleDrawer}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.toolBarHead}>
        Bank App
      </Typography>
      <IconButton
        color="inherit"
        edge="end"
        onClick={onThemeChange}
      >
        <Brightness4Icon />
      </IconButton>
    </BaseToolbar>
  );
}

export { Toolbar, StaticToolbar };