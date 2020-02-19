import React, {Component} from 'react';
import { View ,Text} from 'react-native';
export default class PermissionScene extends Component {
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column' }}>
      <View style={{
        flex: 1,
        backgroundColor: '#007256',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
          This is permission Screen
        </Text>
      </View>
    </View>
    );
  }
}
