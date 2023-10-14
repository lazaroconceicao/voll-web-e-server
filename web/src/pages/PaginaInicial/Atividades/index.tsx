import styled from "styled-components";
import escudo from "./assets/escudo.png";
import calendario from "./assets/calendario.png";
import like from "./assets/like.png";
import sino from "./assets/sino.png";


export default function Atividades() {

  const Container = styled.section`
  display: flex;
    justify-content: space-between;
    text-align: center;
    width: 60%;
  `;

  const Bloco = styled.div`
    width: 20%;
    background-color: var(--cinza-claro);
    padding: 16px 8px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  `;

  const Texto = styled.p`
    line-height: 19px;
    color: var(--azul-escuro);
  `;

  return (
    <>
      <Container>
        <Bloco>
          <img src={escudo} alt="escudo" />
          <Texto>Encontre um especialista</Texto>
        </Bloco>
        <Bloco>
          <img src={calendario} alt="calendario" />
          <Texto>Agende uma consulta</Texto>
        </Bloco>
        <Bloco>
          <img src={sino} alt="sino" />
          <Texto>Defina lembrete</Texto>
        </Bloco>

        <Bloco>
          <img src={like} alt="like" />
          <Texto>Avalie um serviço</Texto>
        </Bloco>
      </Container>
    </>
  );
}
