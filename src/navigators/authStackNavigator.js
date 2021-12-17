import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import SignInScreen from '../screens/SignInSignUpScreen';
import OtpScreen from '../screens/OtpScreen';
import Home from '../screens/HomeScreen';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="Otp" component={OtpScreen} />
      <AuthStack.Screen name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
