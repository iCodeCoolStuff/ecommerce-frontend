import React from 'react';

import { Redirect } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import BagIcon from '@material-ui/icons/BusinessCenter';
import TechIcon from '@material-ui/icons/Computer';
import MiscIcon from '@material-ui/icons/Build';

export default class HamburgerDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodRedirect: false,
      clothingRedirect: false,
      techRedirect: false,
      miscRedirect: false
    };

    this.searchFood = () => {
      this.setState({
        foodRedirect: true,
        clothingRedirect: false,
        techRedirect: false,
        miscRedirect: false
      });
    };

    this.searchClothing = () => {
      this.setState({
        foodRedirect: false,
        clothingRedirect: true,
        techRedirect: false,
        miscRedirect: false
      });
    };

    this.searchTech = () => {
      this.setState({
        foodRedirect: false,
        clothingRedirect: false,
        techRedirect: true,
        miscRedirect: false
      });
    }

    this.searchMisc = () => {
      this.setState({
        foodRedirect: false,
        clothingRedirect: false,
        techRedirect: false,
        miscRedirect: true
      });
    }
  }

  render() {
    return(
      <Drawer anchor="left" open={this.props.open} ModalProps={{onBackdropClick: this.props.closeFunc}}>
        { this.state.foodRedirect ? <Redirect to="/search?q=&category=1" push /> : null}
        { this.state.clothingRedirect ? <Redirect to="/search?q=&category=2" push /> : null}
        { this.state.techRedirect ? <Redirect to="/search?q=&category=3" push /> : null}
        { this.state.miscRedirect ? <Redirect to="/search?q=&category=4" push /> : null}
        <List>
          <ListItem>
            Search by Category
          </ListItem>
          <Divider/>
          <ListItem button onClick={() => {this.searchFood(); this.props.closeFunc()}}>
            <ListItemIcon>
              <FastfoodIcon/>
            </ListItemIcon>
            Food & Drink
          </ListItem>
          <ListItem button onClick={() => {this.searchClothing(); this.props.closeFunc()}}>
            <ListItemIcon>
              <BagIcon/>
            </ListItemIcon>
            Clothing
          </ListItem>
          <ListItem button onClick={() => {this.searchTech(); this.props.closeFunc()}}>
            <ListItemIcon>
              <TechIcon/>
            </ListItemIcon>
            Technology
          </ListItem>
          <ListItem button onClick={() => {this.searchMisc(); this.props.closeFunc()}}>
            <ListItemIcon>
              <MiscIcon/>
            </ListItemIcon>
            Miscellaneous
          </ListItem>
        </List>
      </Drawer>
    );
  }
}