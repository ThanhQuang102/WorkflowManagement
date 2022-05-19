import TaskItem from './taskItem'
import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index'

class taskList extends React.Component { 
    constructor(props){
        super(props);
        this.state={
            filterName: '',
            filterStatus: -1
        }
    }
    onChange =(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter ={
            name: name === "filterName" ? value : this.state.filterName,
            status:name === "filterStatus" ? value : this.state.filterStatus
            
        }
        this.props.onFilterTable(filter);
        this.setState({
            [name]: value
        });

    }
  render(){
      var{tasks, filterTable, keyword, sort}= this.props; // var tasks = this.props.tasks
      var {filterName, filterStatus} = this.state;

        if (filterTable.name) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
            })
        }
        tasks = tasks.filter((task) => {
            if (filterTable.status === '-1') {
                return task;
            } else {
                return task.status === (filterTable.status === '1' ? true : false)
            }
        });
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        })
        console.log(sort);
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            })
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            })
        }

      var element = tasks.map((task, index)=>{
          return <TaskItem 
                    key={task.id} 
                    index={index} 
                    task={task} 
                     />
      })
      return ( 
      <table className="table table-hover">
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên Công Việc</th>
                <th>Trạng Thái</th>
                <th>Tiện ích</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td></td>
            <td>
            <input 
                type="text" 
                name="filterName" 
                className="form-control" 
                value={filterName} 
                onChange={this.onChange}
            />
            </td>
            <td>
            <select 
                name="filterStatus" 
                className="form-control"
                value={filterStatus}
                onChange={this.onChange}
            >
            <option value={-1}>Tất Cả</option>
            <option value={1}>Kích Hoạt</option>
            <option value={0}>Ẩn</option>
            </select>
            </td>
            <td></td>
        </tr>
        {element}
        </tbody>
    </table>
      );
    }
}

const maStateToProps = (state)=>{
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
        onFilterTable : (filter)=>{
            dispatch(action.filterTask(filter))
        }
    }
}
export default connect(maStateToProps, mapDispatchToProps)(taskList);
