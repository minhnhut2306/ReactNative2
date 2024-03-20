import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Animation from './Amimation';
import Animation2 from './Animation2';
import Animation3 from './Animation3';
import Animation4 from './Animation4';
import Animation5 from './Animation5';
import Animation6 from './Animation6';

const Stack = createNativeStackNavigator();

const TabNavigationBai3 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}> 
     
      <Stack.Screen name="Amimation" component={Animation} />
      <Stack.Screen name="Amimation2" component={Animation2} />
      <Stack.Screen name="Amimation3" component={Animation3} />
      <Stack.Screen name="Amimation4" component={Animation4} />  
      <Stack.Screen name="Amimation5" component={Animation5} /> 
      <Stack.Screen name="Amimation6" component={Animation6} />
    </Stack.Navigator>
  );
};
export default TabNavigationBai3;
