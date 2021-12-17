import {StyleSheet} from 'react-native';
import {COLORS, heightToDp, widthToDp} from '../../constants';

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: widthToDp('15%'),
  },
  inputView: {
    alignItems: 'center',
    marginTop: heightToDp('3%'),
  },
  button: {
    height: 55,
    width: widthToDp('85%'),
    backgroundColor: COLORS.primary,
    marginTop: heightToDp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: COLORS.white,
  },
});

export default styles;
