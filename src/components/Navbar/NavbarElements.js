import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import Logo from "../../images/cake-pop-logo.svg";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 2rem calc((100vw - 1300px) / 2);
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2.5rem;
  text-decoration: none;
  padding-left: 2rem;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const NavIcon = styled.div`
  padding-top: 0.5rem;
  padding-right: 1rem;
  display: flex;
  color: #fff;
`;

export const CakePopLogo = styled.i`
  display: block;
  background-image: url(${Logo});
  height: 3.2rem;
  width: 3.2rem;
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
