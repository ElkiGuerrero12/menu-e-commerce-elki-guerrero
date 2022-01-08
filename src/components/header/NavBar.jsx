import './NavBar.css';


function NavBar() {
  return (
    <div className="header">
      <div className="header-section container">
        <a className="logo" href="">
          Nutherbs.com
        </a>
        <ul>
            <li><a href=""></a>Nosotros</li>
            <li><a href=""></a>Productos</li>
            <li><a href=""></a>Contacto</li>
            
        </ul>
        <div>
          <i className="fa fa-cart-plus cart "></i>          
        </div>        
      </div>
    </div>
  );
}

export default NavBar;
