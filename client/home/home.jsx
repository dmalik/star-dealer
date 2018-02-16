const React = require('react');
const createClass = require('create-react-class');
const _ = require('lodash/core');

const EventDisplay = require('./eventDisplay/eventDisplay.jsx');

const Home = createClass({
	getDefaultProps() {
		return {
			url    : '',
			config : {}
		};
	},
	render() {
		return (
			<div className='home'>
				<div className='fancybar' />
				<div className='header'>
					<h1>STAR EVENTS</h1>
				</div>
				<EventDisplay />
			</div>
		);
	}
});

module.exports = Home;
