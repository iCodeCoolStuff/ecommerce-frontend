import React from 'react';

import axios from 'axios'

import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import NavBar from '../NavBar/NavBar';
import HeroCarousel from '../HeroImage/HeroImage';
import Deals from '../Deals/Deals';
import Footer from '../Footer/Footer';
import ProgressDiv from '../ProgressDiv';

const styles = theme => ({
  wrapperDiv: {
    marginBottom: 32
  }
});

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: []
    }
  }

  getFeatured() {
    axios.get('/v1/products/featured')
    .then(res => {
      this.setState({loading: false, items: res.data.slice(0, 12)})
    })
    .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getFeatured();
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <NavBar/>
        <Container>
          {this.state.loading ? <div className={classes.wrapperDiv}><ProgressDiv/></div> 
            : 
            <div style={{paddingBottom: 32}}>
              <HeroCarousel/>
              <Deals items={this.state.items.slice(0, 4)}/>
              <Deals items={this.state.items.slice(4, 8)} title="We're betting you'll love..."/>
              <Deals items={this.state.items.slice(8, 12)} title="Save on essentials"/>
            </div>
          }
        </Container>
        <Footer/>
      </>
    );
  }
}

export default withStyles(styles)(IndexPage);