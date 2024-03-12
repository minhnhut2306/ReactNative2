import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import B1 from './B1';
import B2 from './B2';
import B3 from './B3';
import Book from './Book';
import Book2 from './Book';
import Book3 from './Book';
import Categories from './Categories';
const Stack = createNativeStackNavigator();
const TabNavigationBai1 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="B1" component={B1} />
      <Stack.Screen name="B2" component={B2} />
      <Stack.Screen name="B3" component={B3} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Book2" component={Book2} />
      <Stack.Screen name="Book3" component={Book3} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

export default TabNavigationBai1;
