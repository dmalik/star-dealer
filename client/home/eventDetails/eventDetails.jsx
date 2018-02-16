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

const EventDetails = createClass({
	render() {
		return (
			<Modal
				isOpen={this.props.open}
				ariaHideApp={false}
				onRequestClose={this.props.closeModal}
				style={customStyles}
			>
				<div className='modelContent modalDetails'>
					<h2>Event Details</h2>
					<a className='close' onClick={this.props.closeModal}>
						<i className='fa fa-window-close' aria-hidden='true' />
					</a>
					<h3>Title:</h3>
					<p>{this.props.details.title}</p>
					<h3>Data:</h3>
					<p>{this.props.details.data}</p>
					<h3>Icon:</h3>
					<p>{this.props.details.icon}</p>
					<h3>Type:</h3>
					<p>{this.props.details.type}</p>
					<h3>ID:</h3>
					<p>{this.props.details.id}</p>
					<h3>Service ID:</h3>
					<p>{this.props.details.serviceId}</p>
					<h3>Timestamp:</h3>
					<p>{this.props.details.timestamp}</p>
					<div className='deleteContainer'>
						<a className='delete' onClick={this.props.deleteDetail}>
							<i className='fa fa-trash' aria-hidden='true' /> Delete
						</a>
					</div>
				</div>
			</Modal>
		);
	}
});

module.exports = EventDetails;
