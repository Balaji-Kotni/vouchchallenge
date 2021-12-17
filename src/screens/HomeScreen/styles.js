import {StatusBar, StyleSheet} from 'react-native';
import {
  COLORS,
  deviceHeight,
  deviceWidth,
  heightToDp,
  widthToDp,
} from '../../constants';

const styles = StyleSheet.create({
  container: {
    top: StatusBar.length + 35,
  },
  topBar: {
    height: 0.25 * deviceHeight,
    width: deviceWidth,
  },
  topBarText: {
    alignSelf: 'center',
    marginTop: heightToDp('10%'),
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  topBarBody: {
    alignSelf: 'center',
    color: '#758283',
  },
  topBarBodyContainer: {
    marginTop: 10,
  },
  searchInput: {
    borderRadius: 50,
    borderWidth: 1,
    width: widthToDp('90%'),
    height: 50,
    alignSelf: 'center',
    borderColor: '#CAD5E2',
    paddingHorizontal: widthToDp('20%'),
  },
});

export default styles;
