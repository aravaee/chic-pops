import styled from "styled-components";
import ImgBg from "../../images/main-cake-pop.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.2rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #745c4b;
  letter-spacing: 1px;
  line-height: 1.25;
  padding-bottom: 4px;
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 4vw, 2rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.div`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  padding: 1rem clamp(1.2rem, 2.5vw, 2rem);
  border: none;
  background: #b76e79;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 1rem;
  text-transform: none;

  &:hover {
    background: #f9e784;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #745c4b;
    transform: translateY(-2px);
  }
`;
