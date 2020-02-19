import React, {Component} from 'react';
import { View ,Text} from 'react-native';
export default class UserInfoScene extends Component {
   
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column' }}>
      <View style={{
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
          User Info
        </Text>
      </View>
    </View>
    );
  }
}
