import React, {Component} from "react"; 

class TaskEntry extends Component{

	constructor(props){
		super(props); 
	}
	
	handleSelect(event){
		event.preventDefault(); 
		console.log("Checkbox selected"); 
	}

	handleDelete(event){
		event.preventDefault(); 
		console.log("Task deleted"); 
	}

	render(){

		const objStyle = {
			display: "flex"
		}; 

		return (
			<div style={objStyle}>
			   <input ref={(input) => this.check = input} type="checkbox" onClick={this.handleSelect}/>
			   <div>{this.props.name}</div>
			   <input ref={(input) => this.delete = input} type="submit" value="Delete" onClick={this.handleDelete}/>
	        </div>
	    ); 
	}
}


ref={(input) => this.check = input}




export default TaskEntry; 

