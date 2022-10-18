import { CopySimple, Globe } from "phosphor-react";
import { useEffect, useState } from "react";

import { CopyButton, GlobalStyle, IpValue, SpanText, StyledContainer, Wrapper } from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const [ip, setIp] = useState("");

  const notify = () => toast("IP Copiado com sucesso!");

  function getIp() {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }

  useEffect(() => {
    getIp();
  });

  function copyIpAdress() {
    navigator.clipboard.writeText(ip);
    notify()
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <SpanText>Qual o meu IP?</SpanText>
      <IpValue>
        <Globe size={80} />
        {ip}
      </IpValue>
      <CopyButton onClick={copyIpAdress}>
        Copiar <CopySimple size={32} weight="bold" />
      </CopyButton>
      <StyledContainer position="bottom-right" autoClose={3000}/>
    </Wrapper>
  );
}
