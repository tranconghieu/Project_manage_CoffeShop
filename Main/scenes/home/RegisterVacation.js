import React, {Component} from 'react';
import { View ,Text} from 'react-native';
export default class RegisterVacation extends Component {
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column' }}>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
          This is Register Vacation Screen
        </Text>
      </View>
    </View>
    );
  }
}
