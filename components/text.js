import React from 'react';
import {
  Text,
} from 'react-native';

import * as Font from 'expo-font';

export default class CustomText extends React.Component {
  constructor(props) {
    super(props);
  }

  async loadFonts() {
    await Font.loadAsync({
      
      'inter': require('../assets/font/inter.ttf'),

     
      'Montserrat-Regular': {
        uri: require('../assets/font/Montserrat-Regular.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    return (
      <Text style={[{ fontFamily: 'Montserrat-Regular', fontSize: 12 }, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

