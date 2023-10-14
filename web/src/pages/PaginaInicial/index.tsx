import styled from "styled-components";
import Banner from "./Banner";
import Atividades from "./Atividades";
import Pesquisa from "./Pesquisa";
import Depoimentos from "./Depoimentos";

export default function PaginaInicial() {
  const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <>
      <Banner />
      <Container>
        <Pesquisa />
        <Atividades />
        <Depoimentos />
      </Container>
    </>
  );
}
