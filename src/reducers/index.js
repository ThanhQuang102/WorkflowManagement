
import { combineReducers } from "redux";
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editItem  from "./editItem";
import filterTable from './filterTable';
import search from "./search";
import sort from './sort'

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    editItem,
    filterTable,
    search, 
    sort
})
export default myReducer;