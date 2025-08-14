import React, { Component } from 'react';
import Product_Section from './Product_Section.js'; // Importing Product_Section component
import Home from './Home.js';
class Header extends Component {
  
 constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Shop', // Initial page
    };
  }

  handlePageChange = (pageName) => {
    this.setState({ currentPage: pageName });
  };

render() {
    const { currentPage } = this.state;

    return (
      <div>
        <h1>Page Switcher Example</h1>
        <div>
          <button onClick={() => this.handlePageChange('Shop')}>Shop</button>
          <button onClick={() => this.handlePageChange('Home')}>Home</button>
        </div>
        <div>
          {currentPage === 'Shop' && <Product_Section></Product_Section>}
          {currentPage === 'Home' && <Home></Home>}
        </div>
      </div>
    );
  }
}

export default Header;