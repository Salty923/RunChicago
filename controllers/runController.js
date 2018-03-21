// importing models to use their database functions
var db = require('../models/');
var path = require('path');
var passport = require('../config/passport');

// remember to change file names once updated info is available
module.exports = function (app) {
    app.post("/api/signup", function(req, res) {
        console.log(req.body);
        db.User.create({
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
            'location': req.body.address,
            'level': req.body.user,
            'runType': req.body.message,
            'distance': 10,
            'pace': 'test',
            'recurringGroup': false
        }).then(function (result) {
            console.log(result.body);
        })
    });

    app.put("api/numRun/:id", function (req, res) {
        db.RunGroup.update(
            {
                numRun: sequelize.literal('numRun')+1
            }, {
                where: {
                    id: req.body.id
                }
            }).then(function (runGroup) {
            res.json(runGroup);
        });
    });

}