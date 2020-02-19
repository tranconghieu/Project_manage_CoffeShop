
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
// import SideBar from '../components/sidebar/SideBar';
import LoginScene from '../scenes/auth/Login';
import HomeScene from '../scenes/home/Home';
import PermissionScene from '../scenes/permission';
import RegisterVacation from '../scenes/home/RegisterVacation';
import ListNotify from '../scenes/notify/ListNotify';
import Colors from '../constants/Colors';
// import { Dimensions  } from 'react-native';
// const { height ,width} = Dimensions.get('window');
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const getTabBarIcon = (navigation, focused, tintColor) => {
  //debugger
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Main') {
    iconName = `${Platform.OS === 'ios' ? 'ios-' : 'md-'}home`;
    //  IconComponent = HomeIconWithBadge;
  }
  if (routeName === 'Notify') {
    iconName = `${Platform.OS === 'ios' ? 'ios-' : 'md-'}notifications`;

  }
  // if (routeName === 'Contact') {
  //   iconName = `${focused ? 'ios-' : 'md-'}contact`;

  // }
  // if (routeName === 'Search') {
  //   iconName = `${focused ? 'ios-' : 'md-'}search`;

  // }
  return <IconComponent name={iconName} size={25} color={tintColor} />
  // <Badge name={iconName} size={25} color={tintColor} badgeCount={3}  />



}
// const navigationOptionsCogfig = (navigation,Title_Key) =>{
//   return {
//     title: <MyText i18nKey={Title_Key} >{Title_Key}</MyText>,
//     headerLeft: <MyText i18nKey={Title_Key} >{Title_Key}</MyText>,
//     headerStyle: {
//       backgroundColor: '#ffff',
//     },
//     headerTintColor: 'black',
//   }
// }
const navigationOptionsCogfigHeaderNull = (navigation) =>{
  return {
    header : ()=>{ return null }  
  }
}


const NavigatorStack = createStackNavigator({
  Home: {
    screen: HomeScene,
    //navigationOptions: ({ navigation }) => (navigationOptionsCogfigHeaderNull(navigation)),
  },
  VacationRegister :{
    screen: RegisterVacation,
    //navigationOptions: ({ navigation }) => (navigationOptionsCogfigHeaderNull(navigation)),
  }
});

const NotifyStack = createStackNavigator({
  ListNotify: {
    screen: ListNotify,
    //navigationOptions: ({ navigation }) => (navigationOptionsCogfigHeaderNull(navigation)),
  },
});



const IndexNavigator = createBottomTabNavigator(
  {
    'Main': NavigatorStack,
    'Notify': NotifyStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: Colors.black,
      keyboardHidesTabBar : true,//an tabbar khi keuboard show
    },
  }
);
const MainContainer = createAppContainer(IndexNavigator);
export default MainContainer
