import React from 'react';

import axios from 'axios';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import NavBar from '../NavBar/NavBar';
import ProductDetail from '../ProductDetail/ProductDetail';
import Footer from '../Footer/Footer';

import Recommendations from '../Recommendations/Recommendations';
import ProductNotFound from '../ProductNotFound';
import ProgressDiv from '../ProgressDiv';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {},
      recommendations: [],
      is404: false,
    };
  }

  getItem() {
    axios.get(`/v1/products/${this.props.match.params.slug}`)
    .then(res => {

      this.setState({product: res.data});

      axios.get(`/v1/recommendations?id=${res.data.pk}`)
      .then(res => this.setState({
        recommendations: res.data,
        loading: false
      }))
      .catch(err => console.error(err));
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
    this.getItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      this.getItem();
    } 
  }


  render () {
    return (
      <>
        <NavBar/>
        <Container>
          {this.state.is404 ? <ProductNotFound/> :

            <div style={{paddingBottom: 32}}>
              {this.state.loading ? <ProgressDiv/>
              :
              <>
                <ProductDetail
                  loading={false}
                  img={this.state.product.images.img1920x1080}
                  name={this.state.product.name}
                  price={this.state.product.price.toFixed(2)}
                  list_price={this.state.product.list_price.toFixed(2)}
                  on_sale={this.state.product.on_sale}
                  description={this.state.product.description}
                  product={this.state.product}
                />
                <hr/>
                <Recommendations items={this.state.recommendations}/>
              </>
            }
            </div>

          }
        </Container>
        <Footer/>
      </>
    );
  }
}

export default ProductDetailPage;