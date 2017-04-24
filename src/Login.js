/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Button, DatePickerIOS, View, TextInput, Alert, Image, Dimensions, TouchableOpacity, } from 'react-native';
import ApiIntructor from './Networking/Config/ApiIntructor';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    }
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick() {
    const username = this.state.username;
    const password = this.state.password;

    if (username == null)
      Alert.alert('Please enter valid username');
    else if (password == null)
      Alert.alert('Please enter valid password');
    else
      console.warn('Will CAll API');
    ApiIntructor
      .fetchLoginData(username, password)
      .then(function(response) {
        console.warn(response);
      })
      .catch(function(error) {
        console.warn(error);
      });
  //  Alert.alert(`User: ${username}, Pass: ${password}`);
  }

  render() {
    let pic = {
      uri: 'https://pos.toasttab.com/hs-fs/hubfs/Punchh_logotag_small.jpg?t=1486849914720&width=1024&name=Punchh_logotag_small.jpg'
    };
    const {width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
      <View style={{
        marginHorizontal: 20,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
       <Image source={
      require('./image/punchh_logo.jpg')
      } style={{
        width: 200,
        height: 70
      }}/>
        <TextInput
      style={{
        width: width - 40
      }}
      placeholder="User Name"
      onChangeText={(text) => {
        this.setState({
          username: text
        })
      }}
      />
        <TextInput
      style={{
        width: width - 40
      }}
      placeholder="Password"
      secureTextEntry
      onChangeText={(text) => {
        this.setState({
          password: text
        })
      }}
      />
        <TouchableOpacity
      onPress={this.btnClick}
      style={{
        width: width - 40,
        height: 40,
        marginTop: 20,
        backgroundColor: '#99D48F',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
          <Text style={{
        color: 'white',
        fontWeight: 'bold'
      }}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  marginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
