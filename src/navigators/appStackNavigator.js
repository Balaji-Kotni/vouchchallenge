import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Import Screens */
import HomeScreen from '../screens/HomeScreen';

const AppStack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
