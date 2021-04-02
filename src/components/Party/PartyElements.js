import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
  background-color: #16120f;
  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;
export const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 840px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0rem calc((100vw - 1300px) / 2);
    grid-template-rows: 420px;
  }
`;
export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  color: #fff;
  order: 1;  
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;
export const ColumnRight = styled.div`
  padding: 2rem 2rem 0 2rem;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-delay: 3s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 8px 8px #745C4B;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SubButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  width: 10rem;
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
`;