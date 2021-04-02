import React from "react";
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  SubButton,
} from "./PartyElements";
import srcImage from "../../images/cp-p-1.jpg";
import { Link } from "react-scroll";
const Party = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Let's Celebrate Together!</h1>
          <p>
            Birthday? Wedding? Anniversary? I can make your cake pops just the
            way you like it.
          </p>
          <SubButton>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Order Now
            </Link>
          </SubButton>
        </ColumnLeft>
        <ColumnRight>
          <img src={srcImage} alt="Easter Theme"></img>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Party;
