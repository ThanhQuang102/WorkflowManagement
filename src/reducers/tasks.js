import * as types from '../constants/actionType';

var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : [];

var s4=() =>{
    return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
}
var createID=() => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

var findIndex = (data, id) => {
    var i = -1
    data.forEach((task, index) => {
        if (task.id === id) {
            i = index;
        }
    })
    return i;
}
var index = -1;
var myReducer = (state= initialState, action)=>{
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            console.log(action);
            if (action.task.id) {
                index = findIndex(state, action.task.id);
                state[index]={
                    ...state[index],
                    status: action.task.status,
                    name: action.task.name
                }
            }else{
                var newTask={
                    id: createID(),
                    name: action.task.name,
                    status: action.task
                    .status === 'true' ? true : false
                }
                state.push(newTask);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
            index = findIndex(state, action.id);
            state[index]={
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        case types.DELETE_TASK:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state]
        default: return state;
    }
}

export default myReducer;