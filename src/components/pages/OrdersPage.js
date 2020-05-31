import React from 'react';

import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import Orders from '../Orders/Orders';
import ProgressDiv from '../ProgressDiv';

import { getToken, getPayload } from '../../utils';

class OrdersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      orders: {}
    }
  }

  getOrders() {
    let token = getToken();
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    let userId = getPayload()['user_id'];

    axios.get(`/v1/users/${userId}/orders/`, config)
      .then(res => {
        this.setState({
          loading: false,
          orders: res.data
        });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getOrders();
  }

  render() {
    return(
      <>
        <NavBar/>
        <Container>
          {this.state.loading ? <ProgressDiv/> : 
          <div style={{paddingTop: "16px", paddingBottom: "16px"}}>
            <Orders orders={this.state.orders}/>
          </div>}
        </Container>
        <Footer/>
      </>
    );
  }
}

export default OrdersPage;