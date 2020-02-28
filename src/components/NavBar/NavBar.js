import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'

import axios from 'axios';

import AppBar         from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import IconButton     from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Toolbar        from '@material-ui/core/Toolbar';
import Typography     from '@material-ui/core/Typography';

import MenuIcon   from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { withStyles } from '@material-ui/core/styles';
import styles from './NavBar.styles';

import SearchBar from '../SearchBar/SearchBar';
import HamburgerDrawer from '../HamburgerDrawer/HamburgerDrawer';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartButtonClicked: false,
      searchText: '',
      searchCategory: '',
      searching: false,
      searchItems: [],
      searchFinished: false,
      accountDrawerState: false
    }

    this.handleCartButtonClick = () => {
      this.setState({cartButtonClicked: !this.state.cartButtonClicked});
    } 

    this.handleSetSearchText = this.handleSetSearchText.bind(this);
    this.handleSetSearchCategory = this.handleSetSearchCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this)
  }

  handleSetSearchText(searchText) {
    this.setState({searchText});
  }

  handleSetSearchCategory(searchCategory) {
    this.setState({searchCategory});
  }

  handleSearch(e) {
    e.preventDefault();
    this.startSearch();
    let config = {
      params: {
        q: encodeURIComponent(this.state.searchText),
        category: encodeURIComponent(this.state.searchCategory)
      }
    };

    axios.get('/v1/search', config)
      .then(res => {
        this.setState({searchItems: res.data})
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.endSearch();
        this.setSearchFinished();
      });
  }

  startSearch() {
    this.setState({searching: true});
  }

  endSearch() {
    this.setState({searching: false});
  }

  setSearchFinished() {
    this.setState({searchFinished: true});
  }

  componentDidUpdate() {
    if (this.state.searchFinished) {
      this.setState({searchFinished: false});
    }
  }

  closeDrawer() {
    this.setState({accountDrawerState: false});
  }

  render() {
    const { items, classes } = this.props;

    return (
      <>
      <AppBar position="static" className={classes.root}>
        {this.state.searchFinished ? 
          <Redirect 
            push
            to={{
              pathname: "/search",
              search: `?q=${encodeURIComponent(this.state.searchText)}${this.state.searchCategory !==  '' ? 
                      `&category=${encodeURIComponent(this.state.searchCategory)}` : ''}`,
              state: {items: this.state.searchItems, query: this.state.searchText}
            }}
          /> : null
        }
        {this.state.cartButtonClicked ? <Redirect push to="/cart"/> : null}
        <Toolbar>
          {/*<IconButton edge="start"color="inherit">
            <MenuIcon/>
            </IconButton>*/}
          <Typography variant="h6" noWrap={true}>
            <Link className={classes.link} to="/">VirtualMart</Link>
          </Typography>
          <SearchBar
            searchText={this.state.searchText}
            searchCategory={this.state.searchCategory}
            handleSetSearchText={this.handleSetSearchText}
            handleSetSearchCategory={this.handleSetSearchCategory}
            handleSearch={this.handleSearch}
          />
          <div className={classes.mobileFakeDiv}></div>
          <div className={classes.iconDiv}>
            {this.props.loggedIn ?

            <IconButton onClick={() => this.setState({accountDrawerState: !this.state.accountDrawerState})} color="inherit">
              <PersonIcon/>
            </IconButton> 
            :
             <Box className={classes.accountActions} justifyContent="center" flexDirection="column">
              <div>
                <Link className={classes.accountLink} to="/login">Login</Link> / <Link className={classes.accountLink} to="/register">Register</Link>
              </div>
            </Box> }
            <IconButton onClick={() => this.handleCartButtonClick()} color="inherit">
              <Badge badgeContent={items.map(i => i.quantity).reduce((s, v) => s+v, 0)} color="secondary">
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
  
        {/* Mobile Toolbar */}
  
        <Toolbar classes={{root: classes.mobileToolBar}}>
          <SearchBar
            mobile={true}
            searchText={this.state.searchText}
            searchCategory={this.state.searchCategory}
            handleSetSearchText={this.handleSetSearchText}
            handleSetSearchCategory={this.handleSetSearchCategory}
            handleSearch={this.handleSearch}
          />
        </Toolbar>
        {this.state.searching ?
          <LinearProgress variant="indeterminate" color="secondary"/> : null
        }
      </AppBar>
      <HamburgerDrawer open={this.state.accountDrawerState} closeFunc={this.closeDrawer}/>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.cart.items,
    loggedIn: state.auth.loggedIn
  };
}

export default connect(mapStateToProps)(withStyles(styles)(NavBar));