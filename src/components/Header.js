import {useState} from 'react';
import Logo from '../images/herbal.png';
import '../styles/Header.css';
import {Link} from "react-router-dom";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'; 
 
 function Header() {
      const [isOpen, setIsOpen] = useState(false);
      const toggle = () => setIsOpen(!isOpen);
   return (
     <div className = "header">
        <Navbar className = "header__navbar" expand="md">
         
        <img className = "header__logo" src = {Logo} alt="" />
        <Link to = "/"><NavbarBrand className = "header__brandName">
            Arthica 
        </NavbarBrand>
         </Link> 
        <NavbarToggler className="header__toggle navbar-light" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className = "header__ul" href="/">Home</NavLink>
            </NavItem>
              <NavItem>
              <NavLink className = "header__ul" href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "header__ul" href="/gallery/">Gallery</NavLink>
            </NavItem>
              
          </Nav>
          
        </Collapse>
      </Navbar> 
     </div>
   );

     
 }

 export default Header;