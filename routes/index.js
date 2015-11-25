var express = require('express');
var router = express.Router();
module.exports = router;
var path = require('path');

var pathToIndexHTML = path.join(__dirname, '../', './views/index.html');

//home:
router.get('/', function (req, res, next){
	res.sendFile(pathToIndexHTML);
})