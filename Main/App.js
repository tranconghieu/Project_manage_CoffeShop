import React, {Component} from 'react';

import store from './store';
import {Provider } from 'react-redux';
import { View ,Text} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Colors from './constants/Colors';
import AppRootContainer from './navigation/RootNavigator';

import NetworkProvider from './components/network/NetworkProvider';
export default class App extends Component {
  render(){
    return(
      <Provider store = {store}>  
        <SafeAreaView style={styles.container}>
          <SafeAreaView style={styles.container}>
          <AppRootContainer></AppRootContainer> 
          </SafeAreaView>
          
          <NetworkProvider></NetworkProvider>
         </SafeAreaView>
         
      </Provider>   
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.primaryConstraint,
  },
};
