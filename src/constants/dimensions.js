import {Dimensions, PixelRatio} from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const appWindowHeight = Dimensions.get('window').height;
const appWindowWidth = Dimensions.get('window').width;

const widthToDp = width => {
  let normalizedWidth = typeof width === 'number' ? width : parseFloat(width);
  return PixelRatio.roundToNearestPixel(
    (appWindowWidth * normalizedWidth) / 100,
  );
};

const heightToDp = height => {
  let normalizedHeight =
    typeof height === 'number' ? height : parseFloat(height);
  return PixelRatio.roundToNearestPixel(
    (appWindowHeight * normalizedHeight) / 100,
  );
};

export {deviceHeight, deviceWidth, widthToDp, heightToDp};
