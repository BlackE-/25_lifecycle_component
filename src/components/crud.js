import React from 'react';
import './crud.css';

class Crud extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			'input':'',
			'todo':[
				{
					'task':'wash your hands',
					'status':false,
					'id':0 //size ID
				},{
					'task':'check for fever',
					'status':false,
					'id':1 //size ID
				},

			]
		}
		this.toogleTask = this.toogleTask.bind(this);
		this.getInputValue = this.getInputValue.bind(this);
		this.addTask = this.addTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	toogleTask(index){
		this.setState(()=>{
			return this.state.todo.map((item)=>{
				if(item.id === index){
					item.status = !item.status
				}
				return item;
			})
		});
	}

	getInputValue(input){
		this.setState({
      		input: input.target.value
    	});
	}

	addTask(){
		const newTask = {
			task:this.state.input,
			status:false,
			id:this.state.todo.length + 1
		}
		this.state.todo.push(newTask);
		this.setState({
      		input:''
    	});
	}

	deleteTask(index){
		this.state.todo.splice(index,1);
		this.setState(()=>{
			return this.state.todo.map((item,index)=>{
				console.log(item);
				item.id = index;
				return item;
			})
		});
	}

			// componentDidMount(){
			// 	console.log('componentDidMount');
			// 	return true;
			// }

			// shouldComponentUpdate(nextProps,nextState){
			// 	if(this.state === nextState){
			// 		return false;
			// 	}
			// 	return true;
			// }

	render(){
		const items = [];
		for(let index in this.state.todo){
			const input = <input type="checkbox" value={this.state.input} onChange={() => this.toogleTask(this.state.todo[index].id)} />
			const buttonDelete = <button onClick={()=> this.deleteTask(this.state.todo[index].id)}>Delete</button>
			const li = <li id='index_${index}'>{input}{this.state.todo[index].task} {buttonDelete}</li>;
			items.push(li);
		}
		return(
			<div>
				<div>
					<ul>
						{items}
	                </ul>
				</div>
				<div className='form_addTask'>
					<p>Form</p>
					<input type='text' className='addTask' onChange={(e) => this.getInputValue(e)	}/>
					<button onClick={() => this.addTask()}>Agregar Tarea</button>
				</div>
			</div>
		)
	}
}

export default Crud;