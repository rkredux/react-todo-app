import React, {Component} from "react"; 

class InputTask extends Component{

	constructor(props){
		super(props); 
		this.handleInput = this.handleInput.bind(this); 
	}

	handleInput(event){
		event.preventDefault();
		const obj = {
		    name: this.taskName.value, 
			status: "Incomplete", 
			time: Date.now()
		};
		this.props.updateTask(obj); 
	}

	render(){
		return (
			<form action="#" onSubmit={this.handleInput}>
			    <label htmlFor="Name">Task</label>
			    <input type="text" ref={(input) => this.taskName = input}/>
			    <button type="submit">lets go!</button>
			</form>
			); 
	}s
}


export default InputTask; 