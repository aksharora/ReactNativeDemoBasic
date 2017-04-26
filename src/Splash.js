/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
}
from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator,
}
from 'react-native';

export default class Splash extends Component {

  // constructor(props) {
  //   super(props);
  // 
  //   setTimeout(() => {
  //     this.props.route({
  //       name:'Login',
  //     });
  //     // this.props.navigator.push({
  //     //   name: 'Login',
  //     //   data: 'I am from FirstScene'
  //     // });
  //   }, 2000);
  // }

  render() {
    return (<Image source = {
        require('./image/slider-1.png')
      }
      style = {
        styles.container
      }>
      <View style = {
        styles.instructions
      }>
      <ActivityIndicator animating style = {
        {
          height: 50
        }
      }
      size = "large" />
    <Text style = {styles.welcome}>Loading... </Text></View></Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    marginBottom: 20,
  },
  instructions: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
