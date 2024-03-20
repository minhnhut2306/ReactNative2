import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bai1 from './Bai1';

const Stack = createNativeStackNavigator();

const TabNavigationBai4 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bai1" component={Bai1} />
    </Stack.Navigator>
  );
};
export default TabNavigationBai4;
