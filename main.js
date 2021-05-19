const Web = require('webapp');
const bodyParser = require('middleware').bodyParser;
const iosched = require('iosched');

/* Whether the app was awakened by a shared message */
if (ARGUMENT != undefined) {
	console.log('Awakened by share message:', ARGUMENT);
}

// Create app.
const app = Web.createApp();
app.use(bodyParser.json());
app.use(Web.static('./public', { index: ['index.html', 'index.htm'] }));

// Register rest api here
app.use('/demo', require('./routers'));

// Start app.
app.start();

/*
 * Event loop
 */
iosched.forever();
