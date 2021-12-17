import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Pressable,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {widthToDp} from '../../constants';

const OtpScreen = ({route, navigation}) => {
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);
  const {userData} = route.params;
  console.log(route.params);

  const onPress = () => {
    confirmCode(code);
  };

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  useEffect(() => {
    signInWithPhoneNumber(userData.phone);
  }, [userData]);

  async function confirmCode(code) {
    try {
      const {user} = await confirm.confirm(code);
      console.log(user);
      firestore().collection('users').doc(user.uid).set(userData);
      navigation.replace('Home');
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.header}>OTP Verification</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.infoBar}>
          <Text style={styles.infoBarText}>Enter OTP sent to</Text>
          <Text style={styles.infoBarPhone}>
            +91 {route.params.userData.phone}
          </Text>
        </View>
        <TextInput
          style={{
            width: widthToDp('75%'),
            height: 40,
            borderRadius: 5,
            borderWidth: 1,
          }}
          value={code}
          onChangeText={code => setCode(code)}
        />
        {/* <OTPInputView
          style={styles.otpInputView}
          autoFocusOnLoad
          pinCount={6}
          // code={code}
          // onCodeChanged={code => setCode(code)}
          onCodeFilled={code => confirmCode(code)}
          editable={true}
          keyboardType="number-pad"
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          codeInputFieldStyle={styles.underlineStyleBase}
        /> */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Didn't receive OTP ?</Text>
          <Pressable>
            <Text style={styles.footerOption}>RESEND OTP</Text>
          </Pressable>
        </View>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Verify & Proceed</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
