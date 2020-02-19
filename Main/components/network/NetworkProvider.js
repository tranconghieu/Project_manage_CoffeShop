import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { connect } from 'react-redux';


import networkReducer from '../../redux/network';
import Colors from '../../constants/Colors';
import MyText from '../myText/MyText';
const TYPE = {
  NONE: 'none',
  UNKNOWN: 'unknown',
  wifi : 'wifi'
};

class NetworkProvider extends React.Component {
  unsubscribe = null;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    requestAnimationFrame(async () => {
      const { type } = await NetInfo.fetch();
      if (type === TYPE.NONE || type === TYPE.UNKNOWN) {
        this.props.setIsConnected(false);
      }
      // if (type != TYPE.wifi) {
      //   this.props.setIsConnected(false);
      // }
    });

    this.unsubscribe = NetInfo.addEventListener(({isConnected}) => {
        console.log(isConnected,'isConnected');
        this.props.setIsConnected(isConnected);
      },
    );
  }

  UNSAFE_componentWillMount () {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    if (this.props.isConnected) {
      return null;
    }
    const { container, textStyle } = styles;
    return (
      <View style={container}>
        <MyText i18nKey={'no-connect-internet'} style={textStyle}></MyText>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: Colors.danger,
    paddingVertical: 3,
  },
  textStyle: {
    color: Colors.primaryConstraint,
    textAlign: 'center',
  },
};

const mapStateToProps = state => {
  return {
    isConnected: state.network.isConnected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsConnected : isConnected => {
      dispatch(networkReducer.actions.setIsConnected(isConnected))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NetworkProvider);