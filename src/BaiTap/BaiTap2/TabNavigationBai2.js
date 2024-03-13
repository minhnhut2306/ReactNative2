import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import bai1 from './bai1';
import bai2 from './bai2';
import bai3 from './bai3';
const TabNavigationBai2 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="bai3" component={bai3} />
      <Stack.Screen name="bai1" component={bai1} />
      <Stack.Screen name="bai2" component={bai2} />
    </Stack.Navigator>
  );
};
export default TabNavigationBai2;
