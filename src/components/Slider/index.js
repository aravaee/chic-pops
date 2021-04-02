import React, { useEffect, useState, useRef } from "react";
import {
  SldBackground,
  SldSection,
  SldWrapper,
  SldSlide,
  SldSlider,
  SubButton,
  SldImage,
  SldContent,
  SliderButtons,
  PrevArrow,
  NextArrow,
} from "./SliderElements";
import { Link } from "react-scroll";
const Sld = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // Auto slider
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 4000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const pervSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SldBackground>
      <SldSection>
        <SldWrapper>
          {slides.map((slide, index) => {
            return (
              <SldSlide key={index}>
                {index === current && (
                  <SldSlider>
                    <SldImage src={slide.image} alt={slide.alt} />
                    <SldContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.body}</p>
                      <SubButton>
                        <Link
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={600}
                        >
                          {slide.label}
                        </Link>
                      </SubButton>
                    </SldContent>
                  </SldSlider>
                )}
              </SldSlide>
            );
          })}
          <SliderButtons>
            <PrevArrow onClick={pervSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </SldWrapper>
      </SldSection>
    </SldBackground>
  );
};

export default Sld;
