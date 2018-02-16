
module.exports = (vitreum) => {
	return `<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		${vitreum.head}
		<title>Star Events</title>
	</head>
	<body>
		<main id="reactRoot">${vitreum.body}</main>
		<div id="particles-js"></div>
	</body>
	${vitreum.js}
	<script src="/assets/lib/particles.min.js"></script>
</html>`;
};
