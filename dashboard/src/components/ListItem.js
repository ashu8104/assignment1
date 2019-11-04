import React from 'react';
import DragNDrop from './DragNDrop';

export default class ListItem extends React.Component{
	constructor(props){
		super(props);
		this.populateList = this.populateList.bind(this);
		this.populateInput = this.populateInput.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.state ={ taskName:''}

	}
	handleInput(e){
		{
		this.setState({taskName : e.target.value});
		}
	}

	populateInput(){
		return(
			<div className ="container display-card">
				<form>
					<input placeholder="Task name"value={this.state.taskName} id="card-input" type="text" className="validate" onChange ={this.handleInput} /> 
				</form>
				 <a class="btn-floating btn-xsmall waves-effect waves-light aqua"><i class="material-icons">add</i></a>
			</div>
		);
	}
	populateList(){
		if(this.props.listItem){
			return(
					<div className ="col s12 m6 l3">
						<div className ="list-card display-card">
							<div className="my-span">{this.props.listItem}</div>
							{this.populateInput()}
							<DragNDrop />
						</div>
					</div>
			);
		}
		else{
			return(<div></div>);
		}
}
	render(){
		return(
		<div>
		{this.populateList()}
		</div>);


	}
}