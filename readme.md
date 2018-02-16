# Software Engineering Front End - Take-Home Challenge
---

### Introduction
Consider a web-service capable of storing, fetching and deleting events emitted by a variety of clients. Your task is to design and implement a frontend for this service using ReactJS. Feel free to use any additional technologies and/or npm packages under the hood if you wish.

A skeleton project has been provided for you using a template similar to that which we use in order to save you time. The idea is that this way you can focus on the functionality and design of your app — not worrying about tooling.

### Getting Started
The project is set up for you to build already. Check out the `scripts` section in the `package.json` for commands to run that will build and start the project.

For more information about Vitreum (the build system we use) you can find it [here](https://github.com/stolksdorf/vitreum).

### Event Objects
An event will be JSON with the following format
```
{
    "type": "[string] The event type",
    "serviceId": "[string] An ID for the service that created this event",
    "icon": "[string] The URL to a small icon for this event",
    "timestamp": "[string] A timestamp indicating when the event occurred",
    "title": "[string] A short summary description of the event",
    "data": "[string] The event payload"
}
```

The main thing we’re interested in is how you design your frontend. We've already set up a RESTful API that you may use to store and manage your events.

**_Note: The server stores these event objects non-persistently in memory and they may be erased at any time._**

#### Storing a new event:
`POST https://forgetful-elephant.herokuapp.com/events`

The server will assign your event an ID and return the object that was saved (including its new ID).

#### Retrieving a collection of saved events:
`GET https://forgetful-elephant.herokuapp.com/events`

The server will respond with an array of event objects.

#### Deleting an event:
`DELETE https://forgetful-elephant.herokuapp.com/events/:id`

The server will delete the event indicated by the specified ID and return the object that was deleted.

### Frontend
Create a React UI that can show a list of these events and a side-panel next to the list. An event entry in the list should display the event's type, title, and icon. When you click one of the events, it should populate the side-panel with all the details of the event. You should also be able to delete events. The overall structure and style in which you display the data are up to you, however, it must fit the listed requirements.

### Requirements
- We care about design with documentation and not merely a working solution.
- Use a CSS preprocessor. The project comes with LESS setup for you.
- There should be a separate style file that has "tweakable" style settings, such as colors, dimensions, or font sizes
- Use flexbox wherever you can to make layouts more intuitive.
- Build as many components as you feel is needed.
- Document your project along with any other notes/considerations/etc. using `submission.md`.

### ESLint

We have included an `eslint` configuration that we typically use for front-end applications. If there are any rules that you found you were missing or wanted to remove/change - let us know!

### Extra Considerations
If you finish early and want to experiment with some more features:

- How could we make this tool handle inconsistent internet connection?
- If our operators wanted to add filtering how would you do it? What questions would you need to ask them to make sure you get the feature right?
- If we wanted to fully utilize server-side rendering with API data, how would you do that?
- What other features do you think would be useful to add to this tool?

---

Good luck and if you have any questions, please don’t hesitate to contact brock.dusome@thalmic.com.
