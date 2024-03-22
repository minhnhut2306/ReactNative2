import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bai1 from './Bai1';
import Bai2 from './Bai2';
import Bai3 from './Bai3';

const Stack = createNativeStackNavigator();

const TabNavigationBai4 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bai1" component={Bai1} />
      <Stack.Screen name="Bai2" component={Bai2} />
      <Stack.Screen name="Bai3" component={Bai3} />
    </Stack.Navigator>
  );
};
export default TabNavigationBai4;
