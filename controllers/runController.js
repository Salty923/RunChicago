// importing models to use their database functions
var db = require('../models/');
var path = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

var passport = require('../config/passport');

// remember to change file names once updated info is available
module.exports = function (app) {
    app.post("/api/signup", function(req, res) {
        console.log(req.body);
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        }).then(function() {
            res.json("/success")
        //   res.redirect(307, "/api/login");
        }).catch(function(err) {
          console.log(err);
          res.json(err);
          // res.status(422).json(err.errors[0].message);
        });
      });
      
    app.post("/api/login", function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
          if (err) { return next(err); }
          if (!user) { return res.send('/fail'); }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            // return res.redirect('/users/' + user.username);
            return res.json("/success");
          });
        })(req, res, next);
      });

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    });

    app.get('/api/map', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/leafletMap.html'))
    });

    app.post('/api/runlist', function (req, res) {
        db.RunGroup.findAll({
            //space is just for my own readability
        }).then(function (result) {
            console.log(result);
            res.json(result);
        });
    });

    app.post('/api/map', function (req, res) {
        db.RunGroup.findAll({

        }).then(function (result) {
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

        db.RunGroup.update(
            {
                numRun: req.body.newRunners
            }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
            // wrapper for orm.js that using MySQL update callback will return a log to console,
            // render back to index with handle
            console.log(`added runnersssss: ${req.body.newRunners}`);
            res.json('/');
        });
    });

    app.get('/api/usersRuns/:id', function (req, res) {
        var query = `SELECT RunGroups.id, RunGroups.location, RunGroups.level, RunGroups.runType, RunGroups.distance, RunGroups.pace, RunGroups.numRun FROM Users JOIN UserRunLists ON UserRunLists.userId = Users.id JOIN RunGroups ON UserRunlists.runGroupId = RunGroups.id WHERE Users.id = ${req.params.id} ;`
        sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        }).then(allRuns => {
            res.json(allRuns);
        });
    });

    app.get('/api/runsUsers/:id', function (req, res) {
        var query = `SELECT Users.id, Users.firstName, Users.LastName, Users.email, Users.points FROM RunGroups JOIN UserRunLists ON UserRunLists.runGroupId = RunGroups.id JOIN Users ON UserRunlists.userId = Users.id WHERE RunGroups.id = ${req.params.id} ;`
        sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        }).then(allRunners => {
            res.json(allRunners);
        });
    });

}