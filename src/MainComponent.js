import React, {
  Component
}
from 'react';
import {
  AppRegistry,
  View,
  Navigator,
}
from 'react-native';
import Splash from './Splash';
import Login from './Login';
import Home from './Home';

export default class MainComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = { scene: 'Splash', response: null };
    setTimeout(() => {
      this.updateSceneState('Login',null);
    }, 2000);
  }
  
  updateSceneState(scene, response) {
    this.setState({scene, response});
  }
  
  render() {
    let com = null;
    switch (this.state.scene) {
      case 'Login': com = Login; break;
      case 'Home': com = Home; break;
      default: com = Splash;
    }
    return React.createElement(com, { updateState: this.updateSceneState.bind(this), response: this.state.response});
  }

}
