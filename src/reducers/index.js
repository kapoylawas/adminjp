import {combineReducers} from 'redux'
import LigaReducer from './liga'
import AuthReducer from './auth'

export default combineReducers({
    LigaReducer,
    AuthReducer,
})