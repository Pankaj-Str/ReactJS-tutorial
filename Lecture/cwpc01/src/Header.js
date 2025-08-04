import { Component } from "react";
import logo from './img/open-book1.png';
// import Menu from './Menu';
import Home from './Home';
import About from './About';
import Product from "./Product";
class Header extends Component{

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home', // Initial page
    };
  }

    handlePageChange = (pageName) => {
       this.setState({ currentPage: pageName });
    };

  render(){
    const { currentPage } = this.state;

   return (
        <>
<nav class="navbar navbar-expand-lg border border-1 border-black">
  <div class="container">
    <a class="navbar-brand fs-3 " href="#">
    <img src={logo} alt="Logo" height="45" width="45" class="image_logo"/>  
    &nbsp; Joy Book Store
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item theme_color ps-4 pe-4 rounded-pill text-center m-2">
          <a class="nav-link text-light" aria-current="page" href="#" onClick={() => this.handlePageChange('Home')}><i class="bi bi-house-door-fill" ></i>&nbsp; Home</a>
        </li>
         <li class="nav-item theme_color ps-4 pe-4 rounded-pill text-center m-2">
          <a class="nav-link text-light" aria-current="page" href="#" onClick={() => this.handlePageChange('About')}><i class="bi bi-anthropic" ></i>&nbsp; About</a>
        </li>
         <li class="nav-item theme_color ps-4 pe-4 rounded-pill text-center m-2">
          <a class="nav-link text-light" aria-current="page" href="#" onClick={() => this.handlePageChange('Shop')}>
            <i class="bi bi-person-workspace"></i>&nbsp; Shop</a>
        </li>
         <li class="nav-item theme_color ps-4 pe-4 rounded-pill text-center m-2">
          <a class="nav-link text-light" aria-current="page" href="#"><i class="bi bi-envelope-open-fill"></i> &nbsp; Contact Us</a>
        </li>
      </ul>
    </div>
          
  </div>
</nav>
            {currentPage === 'Home' && <Home></Home>}
          {currentPage === 'About' && <About></About>}
          {currentPage === 'Shop' && <Product></Product>}
        </>
    );
  }


}

export default Header