import styled from "styled-components/native";

export const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ProductPrice = styled.Text``;
export const ProductQuantity = styled.Text``;
export const ProductTitle = styled.Text``;
export const TxtValue = styled.Text``;

export const ActionButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;
export const ActionButtonText = styled.Text`
  font-weight: bold;
  color: #1564c0;
`;
export const RemoveButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const RemoveButtonText = styled.Text`
  font-weight: bold;
  color: #1564c0;
`;

export const Txt = styled.Text`
  color: ${(props) => props.color};
`;

export const ProductView = styled.View`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  margin: 15px 0px;
`;

export const Divider = styled.View`
  border-bottom-color: #d3d3d3;
  border-bottom-width: 1px;
`;

export const ProductDetails = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RemoveColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TxtRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
