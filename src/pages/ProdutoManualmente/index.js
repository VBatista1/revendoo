import React from "react";
import {
  TxtInput,
  Container,
  BlueButton,
  ButtonText,
} from "../../styles/global";

export default function ProdutoManualmente({ navigation }) {
  return (
    <Container>
      <TxtInput placeholder="Nome do Produto" />
      <BlueButton onPress={() => navigation.navigate("NovaVenda02")}>
        <ButtonText>SALVAR</ButtonText>
      </BlueButton>
    </Container>
  );
}
