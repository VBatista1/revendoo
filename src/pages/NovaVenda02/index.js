import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  ProductPrice,
  ProductQtyBox,
  AddQty,
  ProductTitle,
  ActionButton,
  ActionButtonText,
  RemoveButton,
  RemoveButtonText,
  Txt,
  ProductView,
  ProductDetails,
  ProductColumn,
  RemoveColumn,
} from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  ProductImage,
  Container,
  Btn,
  ButtonText,
  Steps,
  TxtRow,
  Divider,
} from "../../styles/global";

export default function NovaVenda02({ navigation }) {
  const unitPrice = 30;
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Steps>
        <Text>Passo 2 de 5 - Produtos no Carrinho</Text>
      </Steps>
      <Container>
        <ProductView>
          <ProductImage
            source={{ uri: "https://www.tibs.org.tw/images/default.jpg" }}
          />
          <ProductColumn>
            <ProductTitle>Produto 1</ProductTitle>
            <ProductQtyBox>
              <Text style={{ color: "#999", fontSize: 11 }}>Quantidade</Text>
              <AddQty>
                <TouchableOpacity
                  onPress={() =>
                    quantity > 1 ? setQuantity(quantity - 1) : null
                  }
                >
                  <Icon name="remove-circle" size={20} color="#999" />
                </TouchableOpacity>
                <Text style={{ fontSize: 17 }}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                  <Icon name="add-circle" size={20} color="#999" />
                </TouchableOpacity>
              </AddQty>
            </ProductQtyBox>
          </ProductColumn>
          <RemoveColumn>
            <RemoveButton>
              <RemoveButtonText>
                <Icon name="close" size={15} /> Remover
              </RemoveButtonText>
            </RemoveButton>
            <ProductPrice color="#9c28b1">
              R$ {(quantity * unitPrice).toFixed(2)}
            </ProductPrice>
          </RemoveColumn>
        </ProductView>
        <Divider />
        <ProductDetails>
          <ActionButton>
            <ActionButtonText>
              <Icon name="add-circle" size={20} /> ADICIONAR PRODUTOS
            </ActionButtonText>
          </ActionButton>
          <TxtRow>
            <Txt>Quantidade</Txt>
            <Txt bold={true} color="#9c28b1">
              {quantity}
            </Txt>
          </TxtRow>
          <TxtRow>
            <Txt>Total</Txt>
            <Txt bold={true} color="#9c28b1">
              R$ {(quantity * unitPrice).toFixed(2)}
            </Txt>
          </TxtRow>
          <ActionButton>
            <ActionButtonText>
              <Icon name="add-circle" size={20} /> APLICAR DESCONTO
            </ActionButtonText>
          </ActionButton>
        </ProductDetails>
        <Btn>
          <ButtonText
            onPress={() => {
              navigation.navigate("NovaVenda03");
            }}
          >
            CONTINUAR
          </ButtonText>
        </Btn>
      </Container>
    </>
  );
}
