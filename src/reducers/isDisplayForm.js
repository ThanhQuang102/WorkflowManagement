import * as types from '../constants/actionType';

var initialState = false;


var myReducer = (state= initialState, action)=>{
    switch(action.type){
        case types.CLOSE_FORM:
            return false
        case types.TOGGLE_FORM:
            return !state
        case types.OPEN_FORM:
            return true
        default: return state;
    }
}

export default myReducer;