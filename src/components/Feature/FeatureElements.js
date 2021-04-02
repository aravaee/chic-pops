import styled from "styled-components";
import FeaturePic from "../../images/banner-cake-pop.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.1)),
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
    font-size: clamp(2.5rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }

  @media screen and (max-width: 768px) {
    p {
      padding-top: 1rem;
    }
  }
`;
export const FeatureButton = styled.div`
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
    background: #f9e784;
    color: #745c4b;
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
  }
`;
