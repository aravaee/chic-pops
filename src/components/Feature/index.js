import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";
import { Link } from "react-scroll";


const Feature = () => {
  return (
    <FeatureContainer id="customize">
      <h1>Customize your Cake Pops!</h1>
      <p>Let me know how you like them.</p>
      <FeatureButton>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          Contact Me
        </Link>
      </FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
