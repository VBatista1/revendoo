import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  ProductTitle,
  ActionButton,
  ActionButtonText,
  RemoveButton,
  RemoveButtonText,
  Txt,
  ProductView,
  Divider,
  TxtRow,
  RemoveColumn,
  LoginButton,
} from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, Btn, ButtonText, Steps , Title,TxtInput } from "../../styles/global";

export default function NovaVenda04() {
  const unitPrice = 30;
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Steps>
        <Text>Passo 4 de 5 - Informe o cliente desta venda</Text>
      </Steps>
      <Container>
        <Title>Cadastre um novo cliente:</Title>
        <TxtInput placeholder="Nome" />
        <TxtInput placeholder="Telefone" />
          <LoginButton onPress={() => { navigation.navigate(''); }}><ButtonText>SALVAR CLIENTE E CONTINUAR</ButtonText></LoginButton>
        <Title>OU</Title>
          <Btn>
            <ButtonText>LISTA DE CLIENTES</ButtonText>
          </Btn>
      </Container>

    </>
  );
}
