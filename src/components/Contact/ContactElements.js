import styled from "styled-components";
import FeaturePic from "../../images/contact-background.jpg";

export const ContactContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 600px;
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
    margin-bottom: 1rem;
  }
`;

export const ContactForms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1600px;
`;

export const Input = styled.input`
  width: 60%;
  height: 2rem;
  margin-top: 1rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const TextArea = styled.textarea`
  width: 60%;
  height: 10rem;
  margin-top: 1rem;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SubButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
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