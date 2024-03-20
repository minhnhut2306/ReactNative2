import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from './src/AppNavigation';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AppNavigation />
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
})

export default App;

// Lab
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import demo1 from './src/Demo/demo1';

// const Stack = createStackNavigator();

// function App(): React.ReactElement {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='demo1'>
//       {/* <Stack.Screen name="Bai1" component={Bai1} options={{ headerShown: false}} /> */}
//       <Stack.Screen name="demo1" component={demo1} options={{ headerShown: false}} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
