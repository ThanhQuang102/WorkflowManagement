
import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class control extends React.Component { 
  onClick=(sortBy, sortValue)=>{
    this.props.onSort(sortBy,sortValue)
  }
  render(){
      return (
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Sap Xep
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li onClick={()=>this.onClick('name', 1)}>Ten A-Z</li>
            <li onClick={()=>this.onClick('name', -1)}>Ten Z-A</li>
            <li className="divider"></li>
            <li onClick={()=>this.onClick('status', 1)}>Trang thai kich hoat</li>
            <li onClick={()=>this.onClick('status', -1)}>Trang thai an</li>
          </ul>
        </div>
      )
    }
}
const mapStateToProps = (state)=>{
  return {}
}
const mapDispatchToProps = (dispatch, props)=>{
  return {
      onSort : (by, value)=>{
          dispatch(action.sortTask(by, value))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (control);
