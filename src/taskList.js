import React, {Component} from "react"; 
import TaskEntry from "./taskEntry.js"; 




class TaskList extends Component{
	constructor(props){
		super(props); 
	}




	render(){
		const values = this.props.tasks; 

		return (
			 <div>

			    {Object.keys(values).map((value) => <TaskEntry key={value} name={values[value].name}/>)}

			 </div>
			)
	}



}


export default TaskList; 