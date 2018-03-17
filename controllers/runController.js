// importing models to use their database functions
var runGroup = require('../models/runGroup.js');
var user = require('../models/user.js');

var path = require('path');

module.exports = (app) => {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/index2_DoNotDelete.html'));
    })
}


