import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, StackNavigator, ActivityIndicator, ListView, Image, } from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel'

export default class Home extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.response)
    };
  }

  renderRow(rowData) {
    return <View><View style={{
        flexDirection: 'row'
      }}>
  <Image style={{
        width: 100,
        height: 100
      }}
      source={{
        uri: rowData.image
      }}
      />
  <View style={{
        paddingTop: 3,
        flex: 1
      }}>
      <Text style={{
        color: '#000000',
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 20
      }}>{rowData.title}</Text>
      <Text style={{
        color: '#000000',
        marginHorizontal: 10,
        fontSize: 20
      }}>{rowData.rating}</Text>
    </View>
    </View>
    <View style={{
        width: '100%',
        height: 1,
        backgroundColor: '#d0d0d0'
      }}></View>
    </View>

  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
      ref={(ref) => this._drawer = ref}
      content={<ControlPanel />}
      >
      <View style={{
        flex: 1,
        paddingTop: 22
      }}>
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}
      />
      </View>
      </Drawer>
      );
  }

}
