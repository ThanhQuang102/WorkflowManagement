
import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index'

class search extends React.Component { 
  constructor(props){
    super(props);
    this.state={
      name: ''
    }
  }
  onChange =(event)=>{
    this.setState({
      name : event.target.value
    })
  }
  onSearch =()=>{
    this.props.onSearch(this.state.name)
  }
  render(){
      return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input 
                  type="text" 
                  name="name"  
                  className="form-control" 
                  placeholder="nhap tu khoas..." 
                  onChange={this.onChange}
                />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default" onClick={this.onSearch}>Tim</button>
                </span>
            </div>
        </div>
      );
    }
}
const mapStateToProps = (state)=>{
  return {}
}
const mapDispatchToProps = (dispatch, props)=>{
  return {
      onSearch : (filter)=>{
          dispatch(action.searchTask(filter))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (search);
