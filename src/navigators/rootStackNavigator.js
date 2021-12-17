import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

//Stack Navigators
import AuthStackNavigator from './authStackNavigator';
import AppStackNavigator from './appStackNavigator';

const RootNavigator = ({isSignedIn = false}) => {
  return (
    <NavigationContainer>
      {isSignedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

// const mapStateToProps = state => ({
//   isSignedIn: state.auth.isSignedIn,
// });

//export default connect(mapStateToProps)(RootNavigator);
export default RootNavigator;
