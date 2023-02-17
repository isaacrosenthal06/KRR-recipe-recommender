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
          <NavLink to="/favrecipes" activeStyle class="nav-list">
            Our Favorite Recipes
          </NavLink>
          <NavLink to="/signin" activeStyle class="nav-list">
            Sign In
          </NavLink>
          <NavLink to="/signup" activeStyle class="nav-list">
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
    
  );
};
  
export default Navbar;