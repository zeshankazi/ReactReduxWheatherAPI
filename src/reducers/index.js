import {combineReducers} from 'redux';
import WheatherReducer from './reducers_weather';
const rootReducer=combineReducers({
    // state:(state={})=>state
    weather :WheatherReducer

});

export default rootReducer;