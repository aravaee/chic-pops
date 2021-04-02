import React from "react";
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  SubButton,
} from "./PartyElements";
import srcImage from "../../images/cp-p-1.jpg";
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
          <SubButton>Order Now</SubButton>
        </ColumnLeft>
        <ColumnRight>
          <img src={srcImage} alt="Easter Theme"></img>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Party;
