import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar
} from 'react-native';
import { TabNav, StackNav } from './src/component/Route.js';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
            hidden={true}
          />
          
          <ImageBackground style={styles.background
          
          } source={require('./src/image/back.png')} >
            <StackNav />
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
