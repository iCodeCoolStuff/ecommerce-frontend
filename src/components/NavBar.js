import React from 'react';

import AppBar         from '@material-ui/core/AppBar';
import IconButton     from '@material-ui/core/IconButton';
import Toolbar        from '@material-ui/core/Toolbar';
import Typography     from '@material-ui/core/Typography';

import MenuIcon   from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import SearchBar from './SearchBar';
import styles from './NavBar.styles';

function NavBar() {
  const classes = styles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start"color="inherit">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap={true}>
          Ecommerce Website
        </Typography>
        <div className={classes.searchDiv}>
          <SearchBar/>
        </div>
        <div className={classes.mobileFakeDiv}></div>
        <div className={classes.iconDiv}>
          <IconButton color="inherit">
            <PersonIcon/>
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon/>
          </IconButton>
        </div>
      </Toolbar>

      {/* Mobile Toolbar */}

      <Toolbar classes={{root: classes.mobileToolBar}}>
        <div className={classes.mobileSearchDiv}>
          <SearchBar/>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;