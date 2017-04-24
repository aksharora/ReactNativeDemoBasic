/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';

import BaseComponent from './src/BaseComponent';

export default class ReactDemoProject extends Component {

  render() {
    return (
      <BaseComponent/>
      );
  }
}



AppRegistry.registerComponent('ReactDemoProject', () => ReactDemoProject);
