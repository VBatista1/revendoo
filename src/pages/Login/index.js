import React from 'react';
import { Image, } from 'react-native';
import { LoginButton, LoginLogo } from './styles';
import { TxtInput, Container, BlueButton, ButtonText } from '../../styles/global';

export default function Login({ navigation }) {
  return (
    <Container>
      <LoginLogo>
        <Image style={{ width: 252, height: 74.4 }} source={require('../../../assets/RevendooLogo.jpg')} />
      </LoginLogo>
      <TxtInput placeholder="E-mail" />
      <TxtInput placeholder="Senha" />
      <LoginButton onPress={() => { navigation.navigate('Principal'); }}><ButtonText>ENTRAR</ButtonText></LoginButton>
      <BlueButton onPress={() => { navigation.navigate('Cadastro'); }}><ButtonText>CADASTRAR COM E-MAIL</ButtonText></BlueButton>
    </Container >
  );
}
