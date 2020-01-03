import React from 'react';

import axios from 'axios';

import Container from '@material-ui/core/Container';

import NavBar from '../NavBar/NavBar';
import ProductDetail from '../ProductDetail/ProductDetail';
import Footer from '../Footer/Footer';

import Recommendations from '../Recommendations/Recommendations';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {},
      recommendations: []
    };
  }

  getItem() {
    axios.get(`/v1/products/${this.props.match.params.slug}`)
    .then(res => {
      console.log(res.data.pk);
      this.setState({product: res.data});

      axios.get(`/v1/recommendations?id=${res.data.pk}`)
      .then(res => this.setState({
        recommendations: res.data,
        loading: false
      }))
      .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
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
          <div style={{paddingBottom: 32}}>
            {this.state.loading ? <ProductDetail loading={true}/>
            : <ProductDetail
              loading={false}
              img={this.state.product.images.img1920x1080}
              name={this.state.product.name}
              price={this.state.product.price.toFixed(2)}
              list_price={this.state.product.list_price.toFixed(2)}
              on_sale={this.state.product.on_sale}
              description={this.state.product.description}
              product={this.state.product}
            />
            }
            <hr/>
            <Recommendations items={this.state.recommendations}/>
          </div>
        </Container>
        <Footer/>
      </>
    );
  }
}

export default ProductDetailPage;