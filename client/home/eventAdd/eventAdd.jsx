const React 			= require('react');
const createClass = require('create-react-class');
const Modal 			= require('react-modal');

//This is a custom style overrides for the modal
const customStyles = {
	overlay : {
		backgroundColor : 'rgba(0, 0, 0, 0.40)'
	},
	content : {
		border     : '1px solid #BDC3C7',
		background : '#ecf0f1',
		padding    : '1.5rem'
	}
};

const EventAdd = createClass({
	getInitialState() {
		return {
			type      : '',
			serviceId : 'webform',
			icon      : 'rebel',
			title     : '',
			data      : ''
		};
	},

	//Called when submitting the form. Creates the event object and passes it to the parent.
	submitForm() {
		//Create an object from the state and add the current date
		const eventObj = {
			type      : this.state.type,
			serviceId : this.state.serviceId,
			icon      : this.state.icon,
			timestamp : String(new Date()),
			title     : this.state.title,
			data      : this.state.data
		};
		//Reset the state of this component
		this.setState({
			type      : '',
			serviceId : 'webform',
			icon      : 'rebel',
			title     : '',
			date      : ''
		});
		//Call the function from the parent
		this.props.addEvent(eventObj);
	},

	render() {
		return (
			<Modal
				isOpen={this.props.open}
				ariaHideApp={false}
				onRequestClose={this.props.closeModal}
				style={customStyles}
			>
				<div className='modelContent'>
					<h2>Add Event</h2>
					<a className='close' onClick={this.props.closeModal}>
						<i className='fa fa-window-close' aria-hidden='true' />
					</a>
					<form onSubmit={this.submitForm}>
						<div className='formItem'>
							<p>Title: </p>
							<input
								required='required'
								type='text'
								value={this.state.title}
								onChange={(e) => this.setState({ title: e.target.value })}
							/>
						</div>
						<div className='formItem'>
							<p>Icon: </p>
							<select
								value={this.state.icon}
								onChange={(e) => this.setState({ icon: e.target.value })}
							>
								<option value='rebel'>Rebel</option>
								<option value='empire'>Empire</option>
								<option value='first-order'>First Order</option>
							</select>
						</div>
						<div className='formItem'>
							<p>Type: </p>
							<input
								required='required'
								type='text'
								value={this.state.type}
								onChange={(e) => this.setState({ type: e.target.value })}
							/>
						</div>
						<div className='formItem'>
							<p>Data: </p>
							<textarea
								required='required'
								value={this.state.data}
								onChange={(e) => this.setState({ data: e.target.value })}
							/>
						</div>
						<input type='submit' value='Submit' />
					</form>
				</div>
			</Modal>
		);
	}
});

module.exports = EventAdd;
