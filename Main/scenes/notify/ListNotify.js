import React, {Component} from 'react';
import { View ,Text} from 'react-native';
export default class ListNotify extends Component {
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column' }}>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>
          This is ListNotify Screen
        </Text>
      </View>
    </View>
    );
  }
}
