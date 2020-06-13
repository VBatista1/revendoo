import React, { useState } from "react";
import { Text } from "react-native";
import { TxtInput, Container, Btn, ButtonText } from "../../styles/global";
import { SwitchCadastro, ViewSwitch } from "./styles";

export default function Cadastro({ navigation }) {
  const [switchState, setSwitchState] = useState(false);

  return (
    <Container>
      <TxtInput placeholder="Nome Completo" />
      <TxtInput placeholder="CPF" />
      <TxtInput placeholder="Telefone" />
      <TxtInput placeholder="E-mail" />
      <TxtInput placeholder="Confime e-mail" />
      <TxtInput placeholder="Senha" />
      <Text>
        Crie uma senha com no mínimo 4 caracteres, ela será solicitada sempre
        que acessar seu APP.
      </Text>
      <TxtInput placeholder="Confirme senha" />
      <ViewSwitch>
        <SwitchCadastro
          onValueChange={() => setSwitchState(!switchState)}
          value={switchState}
        />
        <Text>Li e aceito os Termos de Uso</Text>
      </ViewSwitch>
      <Btn
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <ButtonText>CRIE SUA CONTA</ButtonText>
      </Btn>
    </Container>
  );
}
