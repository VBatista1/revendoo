import React from "react";
import { TxtInput, Container, Btn, ButtonText } from "../../styles/global";

export default function ProdutoManualmente({ navigation }) {
  return (
    <Container>
      <TxtInput placeholder="Nome do Produto" />
      <Btn onPress={() => navigation.navigate("NovaVenda02")}>
        <ButtonText>SALVAR</ButtonText>
      </Btn>
    </Container>
  );
}
