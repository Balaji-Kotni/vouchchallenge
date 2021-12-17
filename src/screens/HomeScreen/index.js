import React, {useRef} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import bg from '../../assets/bg.png';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <ImageBackground source={bg} style={styles.topBar} resizeMode="contain">
        <Text style={styles.topBarText}>Your Protected Payments</Text>
        <View style={styles.topBarBodyContainer}>
          <Text style={styles.topBarBody}>
            We are excited for you to protect
          </Text>
          <Text style={styles.topBarBody}>your first payment!</Text>
        </View>
      </ImageBackground>
      <TextInput
        style={styles.searchInput}
        placeholder="Find People who are vouched"
        placeholderTextColor="#CAD5E2"
      />
    </View>
  );
};

export default HomeScreen;
