const label = 'dev';
console.time(label);

const steps = require('vitreum/steps');
const Proj = require('../package.json').vitreum;

Promise.resolve()
	.then(() => steps.jsxWatch('home', './client/home/home.jsx', { libs: Proj.bundled, shared: Proj.shared }))
	.then((deps) => steps.lessWatch('home', { shared: Proj.shared }, deps))
	.then(() => steps.assetsWatch(Proj.assets, Proj.shared))
	.then(() => steps.livereload())
	.then(() => steps.serverWatch('./app.js', ['server']))
	.then(() => console.timeEnd(label));
