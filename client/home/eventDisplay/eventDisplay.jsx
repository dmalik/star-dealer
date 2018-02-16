const React 									= require('react');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const createClass 						= require('create-react-class');
const _ 											= require('lodash/core');
const request 								= require('superagent');

const EventAdd 								= require('../eventAdd/eventAdd.jsx');
const EventDetails 						= require('../eventDetails/eventDetails.jsx');
const defaultEvents 					= require('./defaultData.json');

const EventDisplay = createClass({
	getInitialState() {
		return {
			events       : [], //Our current events to display
			error        : false, //Flag if there is an error in the API call
			load         : true, //Loading set to false after API calls have been made.
			showAddModal : false, //Toggles the add event modal
			currentEvent : {}, //Information of the event to display in EventDetails
			showDetails  : false //When to show the EventDetails component
		};
	},

	componentDidMount() {
		this.updateEvents(); //Call the api and update the state
	},

	updateEvents() {
		//Call the api and update the state
		request.get('https://forgetful-elephant.herokuapp.com/events')
			.then((res) => {
				this.setState({ events: res.body, load: false });
			})
			.catch((res) => {
				this.setState({ error: true, load: false });
			});
	},

	//Close any modal that's open by updating the state
	closeModal() {
		this.setState({ showAddModal: false, showDetails: false });
	},

	addEvent(eventObj) {
		//Hide modal
		this.setState({ showAddModal: false });
		//Add the event
		request.post('https://forgetful-elephant.herokuapp.com/events')
			.send(eventObj)
			.then((res) => {
				this.updateEvents(); //Call the api and update the state
			})
			.catch((res) => {
				console.log('EventDisplay - Add - Error', res);
				this.setState({ error: true });
			});
	},

	deleteEvent() {
		//Hide modal
		this.setState({ showDetails: false });
		//Delete request
		request.del(`https://forgetful-elephant.herokuapp.com/events/${this.state.currentEvent.id}`)
			.then((res) => {
				this.updateEvents(); //Call the api and update the state
			})
			.catch((res) => {
				this.setState({ error: true });
			});
	},

	eventList() {
		//Map over events
		//Determine what type of icon it is and display the correct color
		//Tried using react transition group to animate
		const events = this.state.events.map((event) => (
			<div
				className={event.icon === 'rebel' ? 'event' : 'event red'}
				key={event.id}
				onClick={() => this.showDetails(event)}
			>
				<h3> {event.title} </h3>
				<p> {event.type} </p>
				<div className='iconContainer'>
					<i className={`eventIcon fa fa-${event.icon}`} aria-hidden='true' />
				</div>
			</div>
		));
		return (
			<div className='eventItemContainer'>
				<ReactCSSTransitionGroup
					transitionName='eventAnimation'
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
					transitionAppear={true}
					transitionAppearTimeout={500}
				>
					{events}
				</ReactCSSTransitionGroup>
			</div>
		);
	},

	//Auto generate some events if there are none
	generateEvents() {
		const promises = defaultEvents.events.map((event) => {
			return request.post('https://forgetful-elephant.herokuapp.com/events')
				.send(event)
				.then((res) => {
					return res;
				})
				.catch((res) => {
					return res;
					this.setState({ error: true });
				});
		});
		Promise.all(promises).then((results) => {
			this.updateEvents(); //Once all events are added lets make a call to see if they're there
		});
	},

	//Update the state to show the details modal
	showDetails(event) {
		this.setState({ currentEvent: event, showDetails: true });
	},

	//Update the state to show the add modal
	openAddEventModal() {
		this.setState({ showAddModal: true });
	},

	render() {
		/* Display a load message until we have some data to work with */
		if(this.state.load) {
			return <h4>Refueling Millennium Falcon... Please wait...</h4>;
		}

		/* Display an error message if there was a problem accessing the API */
		if(this.state.error) {
			return (
				<h4 className='eventError'>
					Sorry! There was an error. Please try again later.
				</h4>
			);
		}

		return (
			<div className='eventDisplayContainer'>
				<div className='buttonContainer'>
					<a onClick={this.openAddEventModal}>
						<i className='fa fa-plus-circle' aria-hidden='true' /> Add Event
					</a>
				</div>
				<div className='eventDisplay'>
					{this.state.events.length !== 0 ? (
						this.eventList()
					) : (
						<React.Fragment>
							<h4>Please add an event.</h4>
							<a onClick={this.generateEvents}><i class='fa fa-cogs' aria-hidden='true'></i> Auto generate events</a>
						</React.Fragment>
					)}
				</div>
				<EventAdd
					open={this.state.showAddModal}
					closeModal={this.closeModal}
					addEvent={this.addEvent}
				/>
				<EventDetails
					open={this.state.showDetails}
					details={this.state.currentEvent}
					closeModal={this.closeModal}
					deleteDetail={this.deleteEvent}
				/>
			</div>
		);
	}
});

module.exports = EventDisplay;
