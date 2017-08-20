import React, {Component} from "react"; 

class TaskEntry extends Component{

	constructor(props){
		super(props); 
		this.handleDelete = this.handleDelete.bind(this); 
		this.handleSelect = this.handleSelect.bind(this); 
	}

	handleSelect(){
		// event.preventDefault(); 
		console.log(this.props.taskId); 
		this.props.updateTaskStatus(this.props.taskId); 
	}

	handleDelete(event){
		event.preventDefault(); 
		this.props.removeTask(this.props.taskId); 
	}

	render(){

		const objStyle = {
			display: "flex"
		}; 

		return (
			<div style={objStyle}>
			   <input type="checkbox" name="status" value="check" onClick={this.handleSelect}/>
			   <div>{this.props.name}</div>
			   <time>{new Date(this.props.time).toLocaleDateString()}</time>
			   <input type="submit" value="delete" onClick={this.handleDelete}/>
	        </div>
	    ); 
	}
}


export default TaskEntry; 

