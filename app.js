const config = require('nconf')
	.argv()
	.env({lowerCase: true})
	.file('environment', {file: `config/${process.env.NODE_ENV}.json`})
	.file('defaults', {file: 'config/default.json'});

const server = require('./server/server.js');

const PORT = config.get('port');
server.listen(PORT, () => {
	console.log(`server on port:${PORT}`);
});