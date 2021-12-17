import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {heightToDp, widthToDp} from '../constants';

const Input = ({label, placeholder, onChangeText, value}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#758283"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: '300',
    marginLeft: widthToDp('4%'),
    marginTop: heightToDp('3%'),
    marginBottom: heightToDp('0.5%'),
  },
  input: {
    height: 50,
    width: widthToDp('85%'),
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#CAD5E2',
  },
});
