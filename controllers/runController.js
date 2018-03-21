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
        }).then(function (result) {
            console.log(result);
            res.json(result);
        });
    });

    app.post('/api/runs', function (req, res) {
        console.log(req.body);
        db.RunGroup.create({
            "date": req.body.date,
            'time': req.body.time,
            'location': req.body.location,
            'level': req.body.level,
            'runType': req.body.runType,
            'distance': 10,
            'pace': 'test',
            'recurringGroup': false
        }).then(function (result) {
            console.log(result.body);
        })
    });

    app.post('/api/users', function (req, res) {
        console.log(req.body);
        db.User.create({
            'firstName': req.body.firstName,
            'LastName': req.body.LastName,
            'email': req.body.email,
            'password': req.body.password,
            'reminder': req.body.reminder,
            'points': 10
        }).then(function (result) {
            console.log(result.body);
        })
    });


    app.post('/api/userRunList', function (req, res) {
        console.log(req.body);
        db.UserRunList.create({
            'userId': req.body.userId,
            'runGroupId': req.body.runGroupId
        }).then(function (result) {
            console.log(result.body);
        })
    });

    // put route -> back to index
    app.put("/api/numRun/:id", function (req, res) {
        db.RunGroup.update({
            numRun: request.params.newRunners
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            // wrapper for orm.js that using MySQL update callback will return a log to console,
            // render back to index with handle
            console.log(result);
            res.json('/');
        });
    });

    app.get('/api/usersRuns/:id', function (req, res) {
        var query = 'SELECT Users.id, Users.email, RunGroups.id, RunGroups.location FROM Users JOIN UserRunLists ON UserRunLists.userId = Users.id JOIN RunGroups ON UserRunlists.runGroupId = RunGroups.id WHERE Users.id = :id ;'
        selequize.query(query, {
            type: sequelize.QueryTypes.SELECT
        }).then(allRuns => {
            console.log(allRuns);
        });
    });

    app.get('/api/runsUsers/:id', function (req, res) {
        var query = 'SELECT RunGroups.id, RunGroups.location, Users.id, Users.name FROM RunGroups JOIN UserRunLists ON UserRunLists.runGroupId = RunGroups.id JOIN Users ON UserRunlists.userId = Users.id WHERE RunGroups.id = :id ;'
        selequize.query(query, {
            type: sequelize.QueryTypes.SELECT
        }).then(allRunners => {
            console.log(allRunners);
        });
    });

}