import { SET_TRANSLATION } from "../StoreActionsTypes";
import * as Data from './../../config/GlobalTranslations.json'
const initialTranslationsState = {
	default_lang: 'en',
	translations: Data['en']
};

export function TranslationsStoreReducer(state = initialTranslationsState, action) {
    
	switch (action.type) {
		case SET_TRANSLATION:
			return {
				...state,
				translations: Data[action.payload.lang],
				default_lang: action.payload.lang
			};
		default: {
			return state;
		}
	}
}
