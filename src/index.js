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
		this.addTask = this.addTask.bind(this); 
		this.removeTask = this.removeTask.bind(this);
		this.updateTaskStatus = this.updateTaskStatus.bind(this);   
	}
	

	addTask(task){
		const tasks = {...this.state.tasks}; //take a copy
		const timestamp = task.time; 
		tasks[`task-${timestamp}`] = task; 
		this.setState({tasks}); 
	}


	removeTask(task){
		const tasks = {...this.state.tasks}; //take a copy
		delete tasks[`${task}`]
		this.setState({tasks}); 
	}


	updateTaskStatus(task){
		const tasks = {...this.state.tasks};
		if ( tasks[`${task}`].status === "Incomplete"){
			tasks[`${task}`].status = "Complete"; 
		} else{
			tasks[`${task}`].status = "Incomplete"; 
		}
		this.setState({tasks}); 
	}


	render(){
		console.log("Inside App render method"); 
		return(
			<div>
				<InputTask addTask={this.addTask}/>
				<TaskList updateTaskStatus= {this.updateTaskStatus} removeTask={this.removeTask} tasks={this.state.tasks}/>
			</div>
			)
	}
}

ReactDOM.render(<App/>,
	document.getElementById("root")
	); 




