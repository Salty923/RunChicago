var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('./config/passport');
var app = express();
var PORT = process.env.PORT || 3000;

// serve static content from the public directory
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

// // setting up handlebars in case we decide to use it
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

// requiring our models for syncing
var db = require('./models');

var routes = require('./controllers/runController.js');
routes(app);

// syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});