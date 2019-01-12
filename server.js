const express = require("express");
const cors = require('cors');
const session = require('express-session');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware to avoid cross origin reference errors
//your headers coming from the server are going to be
//{"origin": "*",
// "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
// "preflightContinue": false,
// "optionsSuccessStatus": 204
// }
app.use(cors())

//express session setup for unique id to hold user data
app.use(session({
  secret: process.env.SESSIONSECRET || "keyboard cat",
  resave: false,
  saveUninitialized: true
}));


// set default user obj to session
function userSetup(req, res, next) {
  if (!req.session.user) {
    req.session.user = {
      id: null,
      first_name: '',
      last_name: '',
      email: '',
      loggedIn: false
    }
  }
  next()
}

//useing that user setup as middleware
app.use(userSetup)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
