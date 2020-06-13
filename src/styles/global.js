import styled from "styled-components/native";

export const TxtInput = styled.TextInput`
  margin: 10px 0;
  padding-left: 10px;
  height: 60px;
  border-color: #999;
  border-bottom-width: 1px;
  margin-bottom: 10;
  background-color: #f5f5f5;
`;

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

export const Btn = styled.TouchableOpacity`
  height: 40px;
  margin: 20px 0;
  padding: 12px;
  border-radius: 5px;
  background-color: ${(props) => (props.color ? props.color : "#1564c0")};
`;

export const ButtonText = styled.Text`
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => (props.color ? props.color : "#fff")};
  text-align: center;
`;

export const Title = styled.Text`
  letter-spacing: 1px;
  font-size: 15px;
  text-align: center;
`;

export const Steps = styled.View`
  background-color: #f5f5f5;
  width: 100%;
  padding: 20px;
`;

export const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Divider = styled.View`
  border-bottom-color: #d3d3d3;
  border-bottom-width: 1px;
`;

export const TxtRow = styled.View`
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
