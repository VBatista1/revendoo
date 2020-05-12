import styled from 'styled-components/native';

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
  padding: 20px;
  background-color: #fff;
  height: 120%;
`;

export const BlueButton = styled.TouchableOpacity`
  height: 40px;
  margin: 20px 0;
	padding: 12px;
	border-radius: 5px;
  background-color: #1564c0;
`;

export const ButtonText = styled.Text`
  letter-spacing: 1px;
  font-weight: bold;
	font-size: 15px;
	color: #fff;
	text-align: center;
`;