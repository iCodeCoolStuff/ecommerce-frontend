import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import { logout } from '../../actions/actions';
import { checkAuth, getPayload } from '../../utils';


function AccountDrawer(props) {
  let [redirect, setRedirect] = React.useState(false);

  return (
    <Drawer anchor="right" open={props.open} ModalProps={{onBackdropClick: props.closeFunc}}>
      { redirect ? <Redirect to="/orders" push /> : null}
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon/>
          </ListItemIcon>
          {checkAuth() ? getPayload()['first_name'] + " " + getPayload()['last_name'] : null}
        </ListItem>
        <Divider/>
        <ListItem button onClick={() => setRedirect(true)}>
          <ListItemIcon>
            <FormatListBulletedIcon/>
          </ListItemIcon>
          View Past Orders
        </ListItem>
        <ListItem button onClick={() => {
          props.closeFunc();
          props.history.push('/');
          props.logout();
        }}>
          <ListItemIcon>
            <ExitToAppIcon/>
          </ListItemIcon>
          Logout
        </ListItem>
      </List>
    </Drawer>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(null, mapDispatchToProps)(withRouter(AccountDrawer));