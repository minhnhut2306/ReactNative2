import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import B1 from './src/BaiTap/B1';
import B2 from './src/BaiTap/B2';
import Categories from './src/BaiTap/Categories';
import Book from './src/BaiTap/Book';
import Book2 from './src/BaiTap/Book2';
import Book3 from './src/BaiTap/Book3';
const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='B2'>
        <Stack.Screen name="B1" component={B1} options={{ headerShown: false}} />
        <Stack.Screen name="B2" component={B2} options={{ headerShown: false}} />
        <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false}} />
        <Stack.Screen name="Book" component={Book} options={{ headerShown: false}} />
        <Stack.Screen name="Book2" component={Book2} options={{ headerShown: false}} />
        <Stack.Screen name="Book3" component={Book3} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;