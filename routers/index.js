const WebApp = require('webapp');
const Router = WebApp.Router;
const router = Router.create();

router.get('/', function(req, res) {
	res.send('Hello world')
})

module.exports = router
