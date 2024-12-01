import { Platform, StatusBar, View } from 'react-native';
import React from 'react';
import { ReactCompBasicProp } from '../models/types/CustomTypes.model';

const ScreenWrapper = ({ children, style, ...props }: ReactCompBasicProp): React.JSX.Element => {

  return (
    <View style={[{ paddingTop: 1 }, style]} {...props}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
