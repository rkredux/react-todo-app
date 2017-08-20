import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import InputTask from "./inputTask.js"; 
import TaskList from "./taskList.js"; 





class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			tasks: {}
		}; 
		this.updateTask = this.updateTask.bind(this);  
	}



	updateTask(task){
		const tasks = {...this.state.tasks}; //take a copy
		const timestamp = task.time; 
		tasks[`task-${timestamp}`] = task; 
		this.setState({tasks}); 
	}


	render(){
		console.log("Inside App render method"); 
		return(
			<div>
				<InputTask updateTask={this.updateTask}/>
				<TaskList tasks={this.state.tasks}/>
			</div>
			)
	}
}

ReactDOM.render(<App/>,
	document.getElementById("root")
	); 




