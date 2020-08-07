import React from 'react';

import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import OrderNotFound from '../OrderNotFound';
import OrderDetailView from '../OrderDetailView/OrderDetailView';
import ProgressDiv from '../ProgressDiv';

import { getToken, getPayload } from '../../utils';

class OrderDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      order: {},
      is404: false
    }
  }

  getOrder() {
    let token = getToken();
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    let userId = getPayload()['user_id'];
    let orderItemId = this.props.match.params.id - 1000000;

    axios.get(`/v1/users/${userId}/orders/${orderItemId}`, config)
    .then(res => {
      this.setState({
        loading: false,
        order: res.data,
      });
    })
    .catch(err => {
      if (err.response.status === 404) {
        this.setState({is404: true});
      } else {
        console.error(err);
      }
    });
  }

  componentDidMount() {
    this.getOrder();
  }

  render() {
    return(
      <>
        <NavBar/>
        <Container>
          {this.state.is404 ? <OrderNotFound/> :
            <>
              {this.state.loading ? <div style={{paddingBottom: 32}}><ProgressDiv/></div>
              :
              <OrderDetailView items={this.state.order.items}/>
            }
            </>
          }
        </Container>
        <Footer/>
      </>
    );
  }
}

export default OrderDetailPage;