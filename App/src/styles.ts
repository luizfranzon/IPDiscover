import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import { ToastContainer } from "react-toastify";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Inter, sans-serif;
  }

  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :root {
    --toastify-toast-background: #04d361 !important;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

export const SpanText = styled.span`
  color: white;
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: 620px) {
    font-size: 1.2rem;
  }
`;

export const IpValue = styled.h1`
  font-size: 6rem;
  color: #04d361;
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 900px) {
    font-size: 4rem;
  }

  @media (max-width: 620px) {
    font-size: 2.3rem;
    gap: 0px;

    svg {
      display: none;
    }
  }
`;

export const CopyButton = styled.button`
  width: 60%;
  height: 70px;
  background-color: #121214;
  border: 2px solid #04d361;
  font-weight: bolder;
  color: #04d361;
  font-size: 1.5rem;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s, transform 0.2s;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  cursor: pointer;

  &:hover {
    background-color: #04d361;
    color: #121214;
  }

  &:active {
    transform: scale(1.08);
  }
`;

export const StyledContainer = styled(ToastContainer)`
  .Toastify__toast-theme--light {
    background-color: #04d361;
    color: #121214;
    font-weight: bold;
  }
  .Toastify__progress-bar {
    background: white;
  }

`;
