import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  LogoName,
  SocialIconLink,
  Copyright,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <LogoName >
          <Link
            activeClass="active"
            to="chicpops"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            Chic Pops
          </Link>
        </LogoName>

        <SocialIconLink
          href="//www.instagram.com/chic.pops.london/"
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{marginTop: "0.75rem"}}/>
        </SocialIconLink>
      </FooterWrap>
      <Copyright>&copy; 2021 Chic Pops. All Rights Reserved</Copyright>
    </FooterContainer>
  );
};

export default Footer;
