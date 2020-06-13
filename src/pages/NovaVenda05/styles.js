import styled from "styled-components/native";

export const Title = styled.Text`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
  color: #fff;
  background-color: #9c28b1;
  font-weight: 500;
  padding-left: 5px;
`;

export const Txt = styled.Text`
  margin: 2px 0px;
  font-size: ${(props) => (props.size ? props.size : 15)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  color: ${(props) => (props.color ? props.color : "#000")};
`;

export const TxtColumn = styled.View`
  display: flex;
  flex-direction: column;
`;

export const TxtContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
`;

export const ProductView = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  width: 100%;
  align-items: center;
`;

export const ProductColumn = styled.View`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  width: 75%;
`;

export const DescriptionColumn = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ProductRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px 0px;
  justify-content: space-between;
`;

export const ButtonRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px 0px;
  justify-content: space-evenly;
`;
