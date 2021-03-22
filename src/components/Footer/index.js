import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
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
              
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="//www.instagram.com/chic.pops.london/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
