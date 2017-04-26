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

export default class BaseComponent extends Component {

  renderScene(route, navigator) {
    switch (route.name) {
      case 'Splash':
        return <Splash navigator = {
          navigator
        }
        />;
      case 'Login':
        return <Login navigator = {
          navigator
        }
        />;
      case 'Home':
        return <Home navigator = {
          navigator
        }
        />;  
    }
  }

  render() {
    return <Navigator
    initialRoute = {
      {
        name: 'Splash'
      }
    }
    renderScene = {
      this.renderScene.bind(this)
    }
    />;
  }
}
