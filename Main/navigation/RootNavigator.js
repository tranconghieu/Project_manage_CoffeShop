
import React ,{ Component }from 'react';
// import { Dimensions  } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
// const { height ,width} = Dimensions.get('window');
import MyText from '../components/myText/MyText';
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScene from '../scenes/auth/Login';
import HomeScene from '../scenes/home/Home';
import PermissionScene from '../scenes/permission';
import UserInfo from '../scenes/auth/UserInfo';
import Main from '../scenes/main/Main';
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          {/* <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          /> */}
          <Text>
            Drawer
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const navigationOptionsCogfig = (navigation,Title_Key) =>{
  return {
    title: <MyText i18nKey={Title_Key} >{Title_Key}</MyText>,
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#ffff',
    },
    headerTintColor: 'black',
  }
}
const navigationOptionsCogfigHeaderNull = (navigation) =>{
  return {
    header : ()=>{ return null }  
  }
}

const LoginStackNavigator = createStackNavigator({
  Second: {
    screen: LoginScene,
    navigationOptions: ({ navigation }) => (navigationOptionsCogfigHeaderNull(navigation)),
  },
});
const PermisstionStackNavigator = createStackNavigator({
  Second: {
    screen: PermissionScene,
    navigationOptions: ({ navigation }) => (navigationOptionsCogfigHeaderNull(navigation)),
  },
});
const MainStackNavigator = createStackNavigator({
  Second: {
    screen: Main,
    navigationOptions: ({ navigation }) => (navigationOptionsCogfigHeaderNull(navigation)),
  },
});
const UserInfoStackNavigator = createStackNavigator({
  Second: {
    screen: UserInfo,
    navigationOptions: ({ navigation }) => (navigationOptionsCogfig(navigation,'UserInfo')),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Login: {
    //Title
    screen: LoginStackNavigator,
    navigationOptions: {
      drawerLabel:() => null,
      //drawerLabel: <MyText i18nKey={'Login'} style={{ fontWeight: 'bold' }} >{'Login'}</MyText>
    },
  },
  Permisstion: {
    //Title
    screen: PermisstionStackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },
  UserInfo: {
    //Title
    screen: UserInfoStackNavigator,
    navigationOptions: {
      drawerLabel: <MyText i18nKey={'UserInfo'} style={{ fontWeight: 'bold' }} >{'UserInfo'}</MyText>
    },
  },
  Main: {
    //Title
    screen: MainStackNavigator,
    navigationOptions: {
      drawerLabel: <MyText i18nKey={'Main_screen'} style={{ fontWeight: 'bold' }} >{'Main_screen'}</MyText>
    },
  }
});
const AppRootContainer = createAppContainer(DrawerNavigatorExample);
export default AppRootContainer
