import logo from './img/open-book1.png';
import Menu from './Menu';

function Header(){

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
        <Menu></Menu>
      </ul>
    </div>
  </div>
</nav>
        </>
    );

}

export default Header;