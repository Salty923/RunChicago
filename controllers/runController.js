// importing models to use their database functions
var db = require('../models/')
var path = require('path');

// remember to change file names once updated info is available
module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    });

    app.post('/api/runlist', function (req, res) {
        db.RunGroup.findAll({
            //space is just for my own readability
        }).then(function(result) {
            console.log(result);
            res.json(result);
        });
    });

    app.post('/api/runs', function (req, res) {
        console.log(req.body);
        db.RunGroup.create({
            "date": req.body.date,
            'time': req.body.time,
            'location': req.body.address,
            'level': req.body.user, 
            'runType': req.body.message,
            'distance': 10,
            'pace': 'test',
            'recurringGroup': false
        }).then(function(result) {
            console.log(result.body);
        })
    })

}


