import React from 'react';

function Footer(props) {
  return(
    <>
    <hr/>
      <div>
        &copy; {new Date().getFullYear()} All rights Reserved.
      </div>
    </>
  )
}

export default Footer;