const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');


require('./config/passport')(passport);



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Connect flash
app.use(flash());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const fit_eventRouter = require('./routes/fit_event');
const users_collRouter = require('./routes/users_coll');

const auth_userRouter = require('./routes/auth_user');
const auth_registerRouter = require('./routes/auth_register');
const welcome_landRouter = require('./routes/welcome_land');

app.use('/test', fit_eventRouter);
app.use('/users', users_collRouter);

app.use('/fit_event', fit_eventRouter);
app.use('/users_coll', users_collRouter);
app.use('/auth_user', auth_userRouter);
app.use('/auth_register', auth_registerRouter);
app.use('/welcome_land', welcome_landRouter);




// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});