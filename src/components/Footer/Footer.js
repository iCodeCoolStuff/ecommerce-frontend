import React from 'react';

import Container from '@material-ui/core/Container'

function Footer(props) {
  return(
    <Container>
    <hr/>
      <div>
        &copy; {new Date().getFullYear()} All rights Reserved.
      </div>
    </Container>
  );
}

export default Footer;