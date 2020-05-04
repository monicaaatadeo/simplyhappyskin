const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

// ======== MIDDLEWARE ======== //
//parse incoming encoded form data, populate req.body object
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Serves Public Directory
app.use(express.static(`${__dirname}/public`));

// Express Session
app.use(session({
    store: new MongoStore({
      url: process.env.MONGODB_URI || 'mongodb://localhost:27017/simplyhappyskin',
    }),
    secret: process.env.SESSION_SECRET || 'Supercalifragiliticex[eali34899849838020iljsljsojh',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // Two weeks
    }
  }));

// ======== ROUTES ======== //
// HTML Routes
app.use('/', routes.views);

// API (JSON) Routes
app.use('/api/v1/', routes.api)

// ======== START SERVER ======== //
app.listen(PORT, () => console.log(`Server running at localhost: ${PORT}`))


// DO NOT ADD ANY MORE!!! DONE 