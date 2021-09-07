import {combineReducers} from 'redux'
import LigaReducer from './liga'
import AuthReducer from './auth'
import JerseyReducer from './jersey'
import PesananReducer from './pesanan'

export default combineReducers({
    LigaReducer,
    JerseyReducer,
    AuthReducer,
    PesananReducer,
})