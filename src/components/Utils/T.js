import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as TranslationActions from '../../store/Translations/actions'


// This maps the state to the property of the component

function mapStateToProps(state) {
    return {
		translations: state.TranslationsStoreReducer.translations,
		default_lang: state.TranslationsStoreReducer.default_lang,
    }
}

// This maps the dispatch to the property of the component


const T = (props) => {
	const _T = (value) => {
		if(props.translations != undefined && props.translations[value] != undefined){
			return props.translations[value];
		}
		return value
	}

	return _T(props.t);
};

export default connect(mapStateToProps)(T);
