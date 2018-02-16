const label = 'build';
console.time(label);

const steps = require('vitreum/steps');
const Proj = require('../package.json').vitreum;

Promise.resolve()
	.then(() => steps.clean())
	.then(() => steps.libs(Proj.bundled))
	.then(() => steps.jsx('home', './client/home/home.jsx', { libs: Proj.bundled, shared: Proj.shared }))
	.then((deps) => steps.less('home', { shared: Proj.shared }, deps))
	.then(() => steps.assets(Proj.assets, Proj.shared))
	.then(() => console.timeEnd(label))
	.catch((err) => console.error(err));