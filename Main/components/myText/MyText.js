import React, {Component} from 'react';
import { View ,Text} from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../i18n/i18n';
class MyText extends Component{
    constructor(props){ 
        super(props);
        this.state = {
            i18n : I18n
        };
    }
    UNSAFE_componentWillMount () {
		const { language } = this.props;
		if (language) this.setMainLocaleLanguage(language);
	}

	UNSAFE_componentWillReceiveProps  = nextProps => {
		const { language } = nextProps;
		if (language) this.setMainLocaleLanguage(language);
    }
    
    setMainLocaleLanguage =(language)=>{
        let {i18n} = this.state;
        i18n.locale = language;
        this.setState({i18n});

    }
    render(){
        const { i18nKey, style, children } = this.props;
        const { i18n } = this.state;
        return (
            <Text style={ [{fontSize : 16} ,style] }>
                {i18nKey ? i18n.t(i18nKey) : children }
            </Text>
        );
    }
}

const mapStateToProps = state => {
	return {
		language: state.languageReducer.language
	};
};
export default  connect(mapStateToProps, null)(MyText);
