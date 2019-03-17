import React, { Component } from 'react';
import { Image, Stylesheet, Text, View } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic1 = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Boston_University_block_logo.jpg'
    };
    let pic2 = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Boston_University_Photonics_Center_-_DSC03068.JPG'
    };
    return (
       <View style={{
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
       }}>
         <Image source={pic1} style={{width: 200, height: 150}} />
         <Image source={pic2} style={{width: 200, height: 150}} />
       </View>
    );
  }
}
