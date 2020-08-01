import React from 'react';

import axios from 'axios';

import Container from '@material-ui/core/Container';

import NavBar from '../NavBar/NavBar';
import SearchResults from '../SearchResults/SearchResults';
import Footer from '../Footer/Footer';
import ProgressDiv from '../ProgressDiv';


class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: (this.props.location.search) ? true : false,
      items: [],
      q: ''
    };
  }

  componentDidMount() {
    this.getSearchResults();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getSearchResults();
    }
  }

  getSearchResults() {
    let params = new URLSearchParams(this.props.location.search);
    let config = {
      params: {
        q: encodeURIComponent(params.get('q')),
        category: encodeURIComponent(params.get('category'))
      }
    };
    
    axios.get('/v1/search', config)
    .then(res => {
      this.setState({items: res.data, q: params.get('q'), loading: false})
    })
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    if (this.props.location.state) {
      return(
        <>
        <NavBar/>
        <Container>
          <SearchResults items={this.props.location.state.items} query={this.props.location.state.query}/>
        </Container>
        <Footer/>
        </>
      );
    }

    if (this.state.loading) {
      return(
        <>
        <NavBar/>
        <Container>
          <ProgressDiv/>
        </Container>
        <Footer/>
        </>
      );
    } else {
      return(
        <>
        <NavBar/>
        <Container>
          <SearchResults items={this.state.items} query={this.state.q}/>
        </Container>
        <Footer/>
        </>
      );
    }
  } 
}

export default SearchPage;