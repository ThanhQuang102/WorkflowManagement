import { connect } from 'react-redux';
import React from 'react';
import * as action from '../actions/index'

class taskItem extends React.Component { 
  onUpdateStatus = () =>{
    this.props.onUpdateStatus(this.props.task.id);
  }
  onDeleteItem = () =>{
    this.props.onDeleteItem(this.props.task.id);
    this.props.onCloseForm();
  }
  onUpdateItem = () =>{
    this.props.onOpenForm();
    this.props.onEditItem(this.props.task);
    
  }
  render(){
      var { task, index } = this.props;
      return (
       <tr>
            <td>{index+1}</td>
            <td> {task.name} </td>
            <td>
            <button 
              type="button" 
              className={task.status===true ? 'btn btn-danger' : 'btn btn-success'}
              onClick={this.onUpdateStatus}
            >{task.status===true ? 'Kick hoat' : 'An'}</button>
            </td>
            <td>
            <button 
              type="button" 
              className="btn btn-warning"
              onClick={this.onUpdateItem}
            >Sửa</button>&nbsp;
            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={this.onDeleteItem}
            >Xóa</button>
            </td>
        </tr>
      );
    }
}

const mapStateToProps = state =>{
  return {
  }
}

const mapDispatchToProps = (dispatch, props)=>{
  return {
      onUpdateStatus : (id)=>{
          dispatch(action.updateStatus(id))
      },
      onDeleteItem : (id)=>{
        dispatch(action.deleteTask(id))
      },
      onCloseForm : ()=>{
        dispatch(action.closeForm())
      },
      onOpenForm : ()=>{
        dispatch(action.openForm())
      },
      onEditItem : (task)=>{
        dispatch(action.editItem(task))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (taskItem);
