import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import Logo from "../../images/cake-pop-logo.svg";

export const Nav = styled.nav`
  background: transparent;
  height: 90px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 3rem;
  text-decoration: none;
  position: absolute;
  top: 10px;
  left: 25px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  color: #fff;
`;

export const CakePopLogo = styled.i`
  display: block;
  background-image: url(${Logo});
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  @media screen and (max-width: 400px) {
    height: 2.5rem;
    width: 2.5rem;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
