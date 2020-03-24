import { 
  Divider, Drawer, IconButton, List, ListItem, ListItemText, makeStyles
} from '@material-ui/core';
// tslint:disable-next-line: no-submodule-imports
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles({
  fullList: {
    width: 'auto',
  },
  list: {
    backgroundColor: 'hsl(257, 27%, 26%)',
  },
  listItem: {
    '&:active': {
      backgroundColor: 'hsl(180, 66%, 49%)',
    },
    '&:focus': {
      backgroundColor: 'hsl(180, 66%, 49%)',
    },
    '&:hover': {
      backgroundColor: 'hsl(180, 66%, 49%)',
    },
    backgroundColor: 'hsl(257, 27%, 26%)',
    borderRadius: '25px',
    color: 'white',
    fontSize: '18px',
    margin: 'auto',
    textAlign: 'center',
  },
});

const HamburgerMenu = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    isOpen: false,
  });
  const toggleDrawer = (isOpenInput: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    // Detect keyboard Tab event for going down and Shift+Tab for going up.
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, isOpen: isOpenInput });
  };
  const fullList = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.list}>
        {['Features', 'Pricing', 'Resources'].map((text) => (
          <ListItem button className={classes.listItem} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className={classes.list}>
        {['Login', 'Sign Up'].map((text) => (
          <ListItem button className={classes.listItem} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={state.isOpen} onClose={toggleDrawer(false)}>
        {fullList()}
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
