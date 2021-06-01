const Web = require('webapp');
const bodyParser = require('middleware').bodyParser;
const iosched = require('iosched');

// Create app.
const app = Web.createApp();

app.use(bodyParser.json());
app.use(Web.static('./public', { index: ['index.html', 'index.htm'] }));

// Register rest api here.
app.use('/demo', require('./routers'));

// Start app.
app.start();

/*
 * Event loop
 */
iosched.forever();
