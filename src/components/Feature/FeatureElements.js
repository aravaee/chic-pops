import styled from 'styled-components';
import FeaturePic from '../../images/banner-cake-pop.jpg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 2rem;
  border: none;
  background: #b76e79;
  color: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;
  border-radius: 1rem;
  
  &:hover {
    transition: 0.2s ease-in-out;
    background: #F9E784;
    color: #745C4B;
    transform: translateY(-2px);
  }
`;
