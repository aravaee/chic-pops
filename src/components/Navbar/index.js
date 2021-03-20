import React from 'react';
import { Nav, NavLink, NavIcon, CakePopLogo } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Chic Pops</NavLink>
        <NavIcon onClick={toggle}>
          <CakePopLogo />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
