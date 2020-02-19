import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import languageReducer from '../../redux/i18n';
import MyText from '../../components/myText/MyText';
class LoginScene extends Component {
  constructor(porps) {
    super(porps);

  }
  setLanguage = language => {
    //this.setState({ language });
    this.props.setLanguage(language);
  }
  nativeTohome = () =>{
    const { navigation } = this.props;
    //debugger
    navigation.navigate('Main');
  }
  render() {
    const { textStyle,bnt_right } = styles;
    const { language } = this.props;  
    const isVNLang = language === 'vi' ? true : false;
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <MyText i18nKey={'set-language'} style={textStyle}>hrrhhrh</MyText>
          <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity onPress={() => this.setLanguage('vi')}
              style={{ marginLeft: 20 }}>
              <Text style={{ color: isVNLang ? 'blue' : 'grey' }}>Việt Nam</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setLanguage('en')}
              style={{ marginLeft: 5 }}>
              <Text style={{ color: !isVNLang ? 'blue' : 'grey' }}>England</Text>
            </TouchableOpacity>
            
          </View>
          <View>
           <TouchableOpacity onPress={ () => this.nativeTohome() } style={bnt_right}>
                <Text>goHome</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}
const styles = {
  textStyle: {
    color: 'black',
    fontWeight: 'bold'
  },
  bnt_right: {
    backgroundColor: '#045FB4',
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 7,
    
  }
}
const mapStateToProps = state => {
  return {
    language: state.languageReducer.language
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLanguage: language => {
      dispatch(languageReducer.actions.changeLanguage(language));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene)