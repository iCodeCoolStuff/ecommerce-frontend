import React from 'react';

import Container from '@material-ui/core/Container';

import NavBar from '../NavBar/NavBar';
import ProductDetail from '../ProductDetail/ProductDetail';
import Footer from '../Footer/Footer';

import Deals from '../Deals/Deals';

//import Recommendations from '../Recommendations/Recommendations';

function ProductDetailPage(props) {
  return (
    <>
      <NavBar/>
      <Container>
        <div style={{paddingBottom: 32}}>
          <ProductDetail slug={props.match.params.slug}/>
          <hr/>
          <Deals title="You might also like"/>
        </div>
      </Container>
      <Footer/>
    </>
  );
}

export default ProductDetailPage;