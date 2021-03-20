import styled from 'styled-components';
import ImgBg from '../../images/main-cake-pop.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
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
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.2rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #745C4B;
  letter-spacing: 1px;
  line-height: 1.25;
  padding-bottom: 4px;
`;

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  padding: 1rem 4rem;
  border: none;
  background: #b76e79;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 1rem;

  &:hover {
    background: #F9E784;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #745C4B;
    transform: translateY(-2px);
  }
`;
