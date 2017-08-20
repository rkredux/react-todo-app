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
			    {Object.keys(values).map((value) => 
			    	<TaskEntry 
			    	   updateTaskStatus={this.props.updateTaskStatus} 
			    	   removeTask={this.props.removeTask} 
			    	   taskId={value} 
			    	   key={value} 
			    	   name={values[value].name}
			    	   time={values[value].time}
			    	/>
			    	)
			    }
			</div>
			)
	}
}

export default TaskList; 