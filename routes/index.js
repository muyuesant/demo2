const express = require("express");
const router = express.Router();

router.get('/', function(req,res) {
	res.send('Hello! This is a local app!')
})

module.exports = router;