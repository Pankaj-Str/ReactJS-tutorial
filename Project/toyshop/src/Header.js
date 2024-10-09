import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo  from './data/img/rubber-duck.png';

function Header(){


        return(

            <>

                <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">
                        <img src={logo} alt="Logo" width="50" height="50" ></img>
                        &nbsp;
                        Nishant Joy Store    
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                        
                    </div>
                    </div>
                </div>
                </nav>
            
            </>


        );



}

export default Header;