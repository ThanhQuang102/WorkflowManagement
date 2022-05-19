import { connect } from 'react-redux';
import * as action from '../actions/index';
import React from 'react';

class taskForm extends React.Component { 
  constructor(props){
    super(props);
    this.state={
      id:'',
      name: '',
      status: false
    }
  }
  onToggleform = () => {
    this.props.isDisplayForm()
  }
  onCloseForm = () => {
    this.props.closeForm()
  }
  onChange = (event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    })
  }
  onSubmit =(event)=>{
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.props.closeForm();
  }
  onClear = () =>{
    this.setState({
      name: '',
      status: false
    })
  }
  componentWillMount(){
    if (this.props.itemEditting && this.props.itemEditting.id!==null) {
      this.setState({
        id: this.props.itemEditting.id,
        name: this.props.itemEditting.name,
        status: this.props.itemEditting.status
      })
    }else{
      this.onClear();
    }
  }
  componentWillReceiveProps(nextprops){
    if (nextprops && nextprops.itemEditting) {
      this.setState({
        id: nextprops.itemEditting.id,
        name: nextprops.itemEditting.name,
        status: nextprops.itemEditting.status
      })
    } else {
      this.onClear();
    }
  }
  render(){
    if (!this.props.isDisplayForm) return null;
    return (
      <div>
          <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">{this.state.id !== ''? "Sua cong viec" : "Them Cong Viec"}
                    <button type="button" className="btn btn-warning" onClick={this.onCloseForm}>hủy</button>
                  </h3>
                </div>
          </div>
          <form className="form-horizontal" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Ten Cong Viec:</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Trang Thai</label>
                <select 
                  name="status" 
                  id="input" 
                  className="form-control" 
                  required="required"
                  onChange={this.onChange}
                  value={this.state.status}>
                  <option value={true}>Kich hoat</option>
                  <option value={false}>An</option>
                </select>
              </div>
              <div className="form-group">
                <div className="col-sm-10 col-sm-offset-2">
                  <button type="submit" className="btn btn-success">Luu Lai</button>&nbsp;
                  <button type="submit" className="btn btn-warning" onClick={this.onClear}>Huy Bo</button>
                </div>
              </div>
          </form>
      </div>
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
    onSaveTask: (task)=>{
      dispatch(action.saveTask(task))
    },
    closeForm: (task)=>{
      dispatch(action.closeForm())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps ) (taskForm);
