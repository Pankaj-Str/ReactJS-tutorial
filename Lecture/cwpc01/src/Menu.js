// import './css/style.css';
function Menu(){
    return (
        <>
         <li class="nav-item theme_color ps-4 pe-4 rounded-pill text-center m-2">
          <a class="nav-link text-light" aria-current="page" href="#"><i class="bi bi-house-door-fill"></i>&nbsp; Home</a>
        </li>
         <li class="nav-item theme_color ps-4 pe-4 rounded-pill text-center m-2">
          <a class="nav-link text-light" aria-current="page" href="#"><i class="bi bi-anthropic"></i>&nbsp; About</a>
        </li>
         <li class="nav-item theme_color ps-4 pe-4 rounded-pill text-center m-2">
          <a class="nav-link text-light" aria-current="page" href="#">
            <i class="bi bi-person-workspace"></i>&nbsp; Service</a>
        </li>
         <li class="nav-item theme_color ps-4 pe-4 rounded-pill text-center m-2">
          <a class="nav-link text-light" aria-current="page" href="#"><i class="bi bi-envelope-open-fill"></i> &nbsp; Contact Us</a>
        </li>
        </>

    );
}

export default Menu;