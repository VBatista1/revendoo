import React from "react";
import { Container, Btn, ButtonText, Title } from "../../styles/global";

export default function Vendas({ navigation }) {
  return (
    <Container>
      <Title>O que você deseja fazer?</Title>
      <Btn>
        <ButtonText onPress={() => navigation.navigate("NovaVenda")}>
          REGISTRAR UMA VENDA
        </ButtonText>
      </Btn>
      <Btn>
        <ButtonText>CONSULTAR HISTÓRICO DE VENDAS</ButtonText>
      </Btn>
    </Container>
  );
}
