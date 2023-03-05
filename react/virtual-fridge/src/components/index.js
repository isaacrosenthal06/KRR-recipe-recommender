import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
  
const Navbar = () => {
  return (
    <div>
      <Nav class = "navbar background">
        <NavMenu>
          <NavLink to="/about" activeStyle class="nav-list">
            About 
          </NavLink>
          <NavLink to="/myfridge" activeStyle class="nav-list">
            Update Fridge
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
    
  );
};
  
export default Navbar;