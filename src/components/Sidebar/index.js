import React from "react";
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SocialIconLink,
  SideBtnWrap,
} from "./SidebarElements";

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  textDecoration: "none",
  listStyle: "none",
  color: "#fff",
  cursor: "pointer",
};

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <Link
          onClick={toggle}
          style={linkStyle}
          activeClass="active"
          to="premium"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          Premium
        </Link>
        <Link
          onClick={toggle}
          style={linkStyle}
          activeClass="active"
          to="customize"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          Customize
        </Link>
        <Link
          onClick={toggle}
          style={linkStyle}
          activeClass="active"
          to="basic"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          Basic
        </Link>
        <Link
          onClick={toggle}
          style={linkStyle}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          Contact
        </Link>
      </SidebarMenu>
      <SideBtnWrap>
        <SocialIconLink
          href="//www.instagram.com/chic.pops.london/"
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialIconLink>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
