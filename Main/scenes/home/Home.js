import React, {Component} from 'react';
import { View ,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class HomeScene extends Component {
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column' }}>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Icon name='md-home' size={25} color='tomato'></Icon>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>

          This is Home Screen
        </Text>
      </View>
    </View>
    );
  }
}
