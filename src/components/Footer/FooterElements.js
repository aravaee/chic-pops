import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  background-color: #b76e79;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterWrap = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
`;

export const LogoName = styled.div`
  display: flex;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.7rem;
  align-items: center;
  font-weight: bold;
  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 2.5rem;
  bottom: 0;
  @media screen and (max-width: 820px) {
    font-size: 2rem;
  }
`;

export const Copyright = styled.div`
  color: #fff;
  background-color: #16120f;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  width: 100%;
  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`;
