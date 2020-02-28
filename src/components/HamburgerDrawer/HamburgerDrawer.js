import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


function HamburgerDrawer(props) {
  return (
    <Drawer anchor="right" open={props.open} ModalProps={{onBackdropClick: props.closeFunc}}>
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon/>
          </ListItemIcon>
          Sample Text
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon>
            <FormatListBulletedIcon/>
          </ListItemIcon>
          View Past Orders
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon/>
          </ListItemIcon>
          Logout
        </ListItem>
      </List>
    </Drawer>
  );
}

export default HamburgerDrawer;