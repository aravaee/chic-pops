import styled, { css } from "styled-components/macro";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const SldBackground = styled.div`
  background-color: #16120f;
`;

export const SldSection = styled.section`
  height: 75vh;
  /* width: 100vw; */
  /* height: 100vh; */
  /* height: 100%; */
  /* max-height: 1100px;
  max-width: 1300px; */
  padding: 2rem calc((100vw - 1200px) / 2);
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 820px) {
    height: 60vh;
  }
`;
export const SldWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 2rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1200px) {
    border-radius: 0rem;
  }
`;

export const SldSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const SldSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;
export const SldImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  /* width: 100vw;
  height: 100vh; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0.75;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0.75;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0.75;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0.75;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0.75;
    }
    to {
      opacity: 1;
    }
  }
`;
export const SldContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(2.5rem, 8vw, 6rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.5rem);
    margin-bottom: 1.2rem;
    margin-left: 0.25rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;
export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
  @media screen and (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;
export const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #b76e79;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3;

  &:hover {
    background: #b4636f;
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 37.5px;
    height: 37.5px;
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

export const SubButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  width: 7rem;
  border: none;
  background: #b76e79;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    transition: 0.2s ease-in-out;
    background: #f9e784;
    color: #745c4b;
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    width: 5rem;
  }
`;
