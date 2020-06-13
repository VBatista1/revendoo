import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Title,
  Txt,
  TxtContainer,
  TxtColumn,
  ProductView,
  ProductColumn,
  ProductRow,
  DescriptionColumn,
  ButtonRow,
} from "./styles";
import {
  ProductImage,
  Container,
  Steps,
  Divider,
  TxtRow,
  Btn,
  ButtonText,
} from "../../styles/global";

function NovaVenda05() {
  return (
    <>
      <Steps>
        <Text>Passo 5 de 5 - Resumo da Venda</Text>
      </Steps>
      <Container>
        <Txt>Venda para</Txt>
        <Txt fontWeight="500" color="#9c28b1">
          Cliente nao informado
        </Txt>
        <TxtContainer>
          <TxtColumn>
            <Txt>Data da Venda</Txt>
            <Txt fontWeight="500" color="#9c28b1">
              <Icon name="edit" size={20} /> 17/05/2020
            </Txt>
            <Txt>Pagamento</Txt>
            <Txt fontWeight="500" color="#9c28b1">
              <Icon name="edit" size={20} /> Dinheiro
            </Txt>
          </TxtColumn>
          <TxtColumn>
            <Txt>Data da Venda</Txt>
            <Txt fontWeight="500" color="#9c28b1">
              <Icon name="edit" size={20} /> 17/05/2020
            </Txt>
            <Txt>Data de Pagamento</Txt>
            <Txt fontWeight="500" color="#9c28b1">
              <Icon name="edit" size={20} /> 17/05/2020
            </Txt>
          </TxtColumn>
        </TxtContainer>
        <Title>Produtos</Title>
        <ProductView>
          <ProductImage
            source={{ uri: "https://www.tibs.org.tw/images/default.jpg" }}
          />
          <ProductColumn>
            <Txt>Produto 1</Txt>
            <ProductRow>
              <DescriptionColumn>
                <Txt>Quantidade</Txt>
                <Txt color="#9c28b1">1</Txt>
              </DescriptionColumn>
              <DescriptionColumn>
                <Txt>Valor</Txt>
                <Txt color="#9c28b1">R$ 30,00</Txt>
              </DescriptionColumn>
            </ProductRow>
          </ProductColumn>
        </ProductView>
        <Divider />
        <TxtRow>
          <Txt>Quantidade total</Txt>
          <Txt color="#9c28b1">1</Txt>
        </TxtRow>
        <TxtRow>
          <Txt>Valor total sem desconto</Txt>
          <Txt color="#9c28b1">R$ 30,00</Txt>
        </TxtRow>
        <TxtRow>
          <Txt>Desconto</Txt>
          <Txt color="#9c28b1">R$ 0,00</Txt>
        </TxtRow>
        <Divider />
        <TxtRow>
          <Txt>Valor a receber do cliente</Txt>
          <Txt color="#9c28b1">R$ 30,00</Txt>
        </TxtRow>
        <Title>Lucro</Title>
        <ButtonRow>
          <Btn color="transparent">
            <ButtonText color="#1564c0">EDITAR PEDIDO</ButtonText>
          </Btn>
          <Btn color="#1564c0">
            <ButtonText>CONCLUIR</ButtonText>
          </Btn>
        </ButtonRow>
      </Container>
    </>
  );
}

export default NovaVenda05;
