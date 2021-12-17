import {StyleSheet} from 'react-native';
import {COLORS, deviceHeight, heightToDp, widthToDp} from '../../constants';

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: widthToDp('15%'),
  },
  content: {
    alignSelf: 'center',
  },
  infoBar: {
    marginTop: heightToDp('5%'),
    flexDirection: 'row',
  },
  infoBarText: {
    color: '#758283',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: widthToDp('10%'),
  },
  infoBarPhone: {
    marginLeft: widthToDp(2),
    fontSize: 18,
    fontWeight: '700',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#758283',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: '#000',
    borderBottomWidth: 2,
  },
  otpInputView: {
    alignSelf: 'center',
    width: '80%',
    marginTop: heightToDp('3%'),
    height: heightToDp('5%'),
  },
  footer: {
    margin: 0.05 * deviceHeight,
    flexDirection: 'row',
  },
  footerText: {
    color: '#758283',
    fontSize: 18,
    fontWeight: '700',
  },
  footerOption: {
    color: '#E21717',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 2,
  },
  button: {
    height: 55,
    width: widthToDp('85%'),
    backgroundColor: COLORS.primary,
    marginTop: heightToDp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 18,
  },
});

export default styles;
