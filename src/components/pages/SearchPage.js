import React from 'react';

import axios from 'axios';

import Container from '@material-ui/core/Container';

import NavBar from '../NavBar/NavBar';
import SearchResults from '../SearchResults/SearchResults';
import Footer from '../Footer/Footer';


function SearchPage(props) {
  if (props.location.state) {
    return(
      <>
      <NavBar/>
      <Container>
        <SearchResults items={props.location.state.items} query={props.location.state.query}/>
      </Container>
      <Footer/>
      </>
    );
  }

  let params = new URLSearchParams(props.location.search);
  let q = params.get('q');
  let category = params.get('category');

  let items = []
  
  axios.get('/v1/search', {params: {q, category}})
  .then(res => {
    items = res.data;
  })
  .catch(err => {
    console.error(err);
  });

  return(
    <>
    <NavBar/>
    <Container>
      <SearchResults items={items} query={q}/>
    </Container>
    <Footer/>
    </>
  );
}

export default SearchPage;