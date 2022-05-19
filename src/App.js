import './App.css';
import React from 'react';
import TaskForm from './components/taskForm';
import Control from './components/control';
import TaskList from './components/taskList';
import { connect } from 'react-redux';
import * as action from './actions/index'

class App extends React.Component {
    onToggleform = () => {
        if (this.props.itemEditting && this.props.itemEditting.id !=='') {
            this.props.onOpenForm()
        }else{
            this.props.ontoggleFrom();
        }
        this.props.onClearTask({
            id: '',
            name: '',
            status: false
        });
    }
    onOpenForm = () => {
        this.props.openForm();
    }
    render() {
        var {isDisplayForm} = this.props;
        return ( 
            <div className = "container" >
                <h1> Quản Lý Công Việc </h1>  
                <div className = "row" >
                    <div className = { isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "" } > { <TaskForm /> } </div> 
                    <div className = { isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" } >
                <button 
                    type = "button"
                    className = "btn btn-primary"
                    onClick = { this.onToggleform } >
                Them cong viec </button> 
                <div className = "row" >
                    <Control
                    /> 
                </div > 
                <  TaskList /> 
                </div >

                </div> 
            </div >
        );
    }
}

const mapStateToProps = state =>{
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditting: state.editItem
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        ontoggleFrom : ()=>{
            dispatch(action.toggleForm())
        },
        onClearTask: (task)=>{
            dispatch(action.editItem(task))
        },
        onOpenForm : ()=>{
        dispatch(action.openForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);