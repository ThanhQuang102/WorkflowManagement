import * as types from '../constants/actionType';

var initialState = {
    name: '',
    status: '-1'
};


var myReducer = (state= initialState, action)=>{
    switch(action.type){
        case types.FILTER_TABLE:
            return action.filter
        default: return state;
    }
}

export default myReducer;