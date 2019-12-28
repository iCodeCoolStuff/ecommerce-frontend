import React from 'react';

import Container from '@material-ui/core/Container';

import NavBar from '../NavBar/NavBar';
import SearchResults from '../SearchResults/SearchResults';
import Footer from '../Footer/Footer';


function SearchPage() {
  return(
    <>
    <NavBar/>
    <Container>
      <SearchResults/>
      <Footer/>
    </Container>
    </>
  );
}

export default SearchPage;