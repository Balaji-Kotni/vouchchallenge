import React, {useState} from 'react';
import {Pressable, SafeAreaView, StatusBar, Text, View} from 'react-native';
import Input from '../../components/Input';
import styles from './styles';

const SignUpSignInScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('balaji');
  const [lastName, setLastName] = useState('kotni');
  const [userName, setUserName] = useState('balaji123');
  const [email, setEmail] = useState('bb@gmail.com');
  const [phone, setPhone] = useState('7032874146');
  const [referralCode, setReferralCode] = useState('12345');

  const userData = {
    firstName,
    lastName,
    userName,
    email,
    phone: '+91' + phone,
    referralCode,
  };

  const onPress = () => {
    navigation.navigate('Otp', {userData});
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.header}>Sign Up!</Text>
      </View>
      <View style={styles.inputView}>
        <Input
          name="firstName"
          label="First Name"
          placeholder="Enter your First Name"
          onChangeText={text => setFirstName(text)}
          value={firstName}
        />
        <Input
          name="lastName"
          label="Last Name"
          placeholder="Enter your Last Name"
          onChangeText={text => setLastName(text)}
          value={lastName}
        />
        <Input
          name="userName"
          label="Username"
          placeholder="Enter a unique username(max 20 char)"
          onChangeText={text => setUserName(text)}
          value={userName}
        />
        <Input
          name="email"
          label="Email"
          placeholder="Enter your email id"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Input
          name="phone"
          label="Phone Number"
          placeholder="For ex: +91 9898989898"
          onChangeText={text => setPhone(text)}
          value={phone}
        />
        <Input
          name="referralCode"
          label="Referral Code"
          placeholder="For ex: New User"
          onChangeText={text => setReferralCode(text)}
          value={referralCode}
        />
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUpSignInScreen;
