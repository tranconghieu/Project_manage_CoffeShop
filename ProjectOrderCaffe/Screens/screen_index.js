import React, {Component} from 'react';
import AppContainer from '../Navigation';
import SignIn from './login';
import {connect } from 'react-redux';
import {View} from 'react-native';
import getToken from '../api/getToken';
class Abc extends Component {
  componentDidMount (){
      getToken()
      .then(token => JSON.parse(token))
      .then(res =>  this.props.dispatch({ type : 'LOAD_USER' , user : res.user }))
  }
  //
  render(){
    const {user} = this.props.data;
    return(
      <View style={{flex :1}}>
        { (user != null ?  <AppContainer></AppContainer> :   <SignIn></SignIn>) }
      </View>
    );
  }

}
export default connect(state => ({ data : state.user}))(Abc);