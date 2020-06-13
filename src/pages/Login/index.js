import React, { useState } from "react";
import { Image } from "react-native";
import { LoginButton, LoginLogo } from "./styles";
import { TxtInput, Container, Btn, ButtonText } from "../../styles/global";
import axios from "axios";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(" ");
  const [senha, setSenha] = useState(" ");

  function submitlogin() {
    axios({
      method: "POST",
      url: "https://dry-crag-51345.herokuapp.com//login",
      data: {
        email,
        senha,
      },
    })
      .then(function (response) {
        console.log(response.data["id"]);
        var iD = response.data["id"];
        if (iD != "Login Invalido") {
          navigation.navigate("Principal");
        } else {
          alert(iD);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Container>
      <LoginLogo>
        <Image
          style={{ width: 252, height: 74.4 }}
          source={require("../../../assets/RevendooLogo.jpg")}
        />
      </LoginLogo>
      <TxtInput
        placeholder="E-mail"
        onChangeText={(value) => setEmail(value)}
      />
      <TxtInput placeholder="Senha" onChangeText={(value) => setSenha(value)} />
      <LoginButton
        onPress={() => {
          submitlogin();
        }}
      >
        <ButtonText>ENTRAR</ButtonText>
      </LoginButton>
      <Btn
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      >
        <ButtonText>CADASTRAR COM E-MAIL</ButtonText>
      </Btn>
    </Container>
  );
}
