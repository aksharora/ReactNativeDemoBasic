/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  DatePickerIOS,
  View,
  TextInput,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ApiIntructor from './Networking/Config/ApiIntructor';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'default user',
      password: 'default pwd',
    }
    this.btnClick = this.btnClick.bind(this);
  }

btnClick(){
  const username = this.state.username;
  const password = this.state.password;
  
  if(username==null || username =='')
    Alert.alert('Please enter valid username');
  else if(password==null || password =='')
    Alert.alert('Please enter valid password');
  else{
      ApiIntructor
      .fetchMovieData()
      .then((response) => {
        this.props.updateState('Home', response.data);
     })
      .catch(function (error) {
        console.warn("error="+error); 
    });
    }
//  Alert.alert(`User: ${username}, Pass: ${password}`);
}

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
      <View style={{ marginHorizontal: 20, flex: 0, justifyContent:'center', alignItems:'center'}}>
       <Image source={
           require('./image/punchh_logo.jpg')
         } style={{ width: 200, height: 70}}/>
        <TextInput
          style={{ width: width - 40 }}
          placeholder="User Name"
          value={this.state.username}
          onChangeText={(text) => { this.setState({ username: text })}}
        />
        <TextInput
          style={{ width: width - 40 }}
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text })}}
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
          <Text style={{ color: 'white', fontWeight: 'bold' }}>SUBMIT</Text>
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
