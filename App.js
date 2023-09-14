import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from './screen/Page1';
import Page2 from './screen/Page2';
import Page3 from './screen/Page3';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // pengaturan untuk navigasi antar screen
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen
          name="Page1"
          component={Page1}
          options={{
            headerShown: false,
            // animation: 'slide_from_left',
          }}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{
            headerShown: false,
            // animation: 'slide_from_left',
          }}
        />
        <Stack.Screen
          name="Page3"
          component={Page3}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
