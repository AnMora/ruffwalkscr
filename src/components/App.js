import React, { Component } from 'react';

// Developer Parts
// import Loading from '../loading';
import Navbarnav from './nav';
import Introduction from './introduction';
import About from './about';
import Services from './services';
import Packages from './packages';
import Cares from './cares';
import Contact from './contact';

// Data
import Data from '../utils/data';

class RuffWalksCR extends Component {
  state = {
    productData: Data
  }

  render() {
    return (
      <>
        {/* <h1>RuffWalksCR</h1> */}
        <Navbarnav data={this.state.productData} />
        <Introduction data={this.state.productData} />
        <About data={this.state.productData} />
        <Services data={this.state.productData} />
        <Packages data={this.state.productData} />
        <Cares data={this.state.productData} />
        <Contact data={this.state.productData} />
      </>
    )
  }

}

export default RuffWalksCR