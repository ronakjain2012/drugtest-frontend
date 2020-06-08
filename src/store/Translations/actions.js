import {SET_TRANSLATION} from '../StoreActionsTypes'


export const _T = (lang) => (
    {
        type: SET_TRANSLATION,
        payload: {
            lang
        }
    }
)
