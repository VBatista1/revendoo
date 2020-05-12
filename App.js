import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './src/pages/Login/index';
import cadastro from './src/pages/Cadastro/index';
import principal from './src/pages/Principal/index';
import PrincipalHeader from './src/components/PrincipalHeader'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={cadastro} options={{
          title: 'CRIE SUA CONTA',
          headerStyle: {
            backgroundColor: 'linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerRight: () => (
          //   <Image source={require('../../../assets/RevendooLogoIcon.jpg')} />
          // ),
        }} />
        <Stack.Screen name="Principal" component={principal} options={{
          headerTitle: () => <PrincipalHeader />,
          headerStyle: {
            backgroundColor: 'linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)',
          },
          headerTitleAlign: 'center',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
