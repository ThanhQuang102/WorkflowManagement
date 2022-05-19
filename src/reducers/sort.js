import * as types from '../constants/actionType';

var initialState = {
    by:'',
    value:''
};


var myReducer = (state= initialState, action)=>{
    switch(action.type){
        case types.SORT:
            return {
                by: action.by,
                value: action.value
            };
        default: return state;
    }
}

export default myReducer;