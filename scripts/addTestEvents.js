const request = require('superagent');

/* Event Schema
{
	"type": "[string] The event type",
	"serviceId": "[string] An ID for the service that created this event",
	"icon": "[string] The URL to a small icon for this event",
	"timestamp": "[string] A timestamp indicating when the event occurred",
	"title": "[string] A short summary description of the event",
	"data": "[string] The event payload"
}
*/

const sampleEvent = {
	//Add sample event info here
};

request.post('https://forgetful-elephant.herokuapp.com/events')
	.send(sampleEvent)
	.end(() => console.log('Sample event added!'));