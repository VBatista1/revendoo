import React from "react";
import { Text } from "react-native";
import {
  ProductImage,
  ProductPrice,
  ProductQuantity,
  ProductTitle,
  ActionButton,
  ActionButtonText,
  RemoveButton,
  RemoveButtonText,
  Txt,
  ProductView,
  Divider,
  ProductDetails,
  ProductColumn,
  TxtRow,
  RemoveColumn,
} from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, BlueButton, ButtonText, Steps } from "../../styles/global";

export default function NovaVenda02() {
  return (
    <>
      <Steps>
        <Text>Passo 1 de 5 - Adicionar produtos ao Carrinho</Text>
      </Steps>
      <Container>
        <ProductView>
          <ProductImage
            source={{ uri: "https://www.tibs.org.tw/images/default.jpg" }}
          />
          <ProductColumn>
            <ProductTitle>Produto 1</ProductTitle>
            <ProductQtyBox>
              <Icon name="add-circle" />
              <Icon name="add-circle" />
            </ProductQtyBox>
          </ProductColumn>
          <RemoveColumn>
            <RemoveButton>
              <RemoveButtonText>
                <Icon name="close" size={15} /> Remover
              </RemoveButtonText>
            </RemoveButton>
            <ProductPrice color="#9c28b1">R$ 30,00</ProductPrice>
          </RemoveColumn>
        </ProductView>
        <Divider />
        <ProductDetails>
          <ActionButton>
            <ActionButtonText>
              <Icon name="add-circle" size={15} /> ADICIONAR PRODUTOS
            </ActionButtonText>
          </ActionButton>
          <TxtRow>
            <Txt>Quantidade</Txt>
            <Txt color="#9c28b1">1</Txt>
          </TxtRow>
          <TxtRow>
            <Txt>Total</Txt>
            <Txt color="#9c28b1">R$ 30,00</Txt>
          </TxtRow>
          <ActionButton>
            <ActionButtonText>
              <Icon name="add-circle" size={15} /> APLICAR DESCONTO
            </ActionButtonText>
          </ActionButton>
        </ProductDetails>
        <BlueButton>
          <ButtonText>CONTINUAR</ButtonText>
        </BlueButton>
      </Container>
    </>
  );
}
