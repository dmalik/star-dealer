const express = require('express');
const app     = express();

app.use(express.static('./build'));

app.use(require('./page.router.js'));

app.get('*', (req, res) => {
	res.send('Uh-oh, you are lost');
});

module.exports = app;