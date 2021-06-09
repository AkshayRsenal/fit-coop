const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/users_coll.model');
const app= express();
// const { forwardAuthenticated } = require('../config/auth');

// Login Page
// router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
// router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));
// router.get('/weconnector',function(req, res) {  Response.writeHead(3000,'http://localhost:3000/');});

const targetBaseUrl = 'http://localhost:3001/';
async function handleRedirect(req, res) {
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}
 app.get('*',  handleRedirect);
const port = process.env.port || 3001;
app.listen(port);

// router.route('/weconnector').get((req,res) => {
//   res.redirect("http://localhost:3000/");
// });


// Register
// router.post('/register', (req, res) => {
//   const { username, emailid, password, password2 } = req.body;
//   let errors = [];

//   if (!username || !emailid || !password || !password2) {
//     errors.push({ msg: 'Please enter all fields' });
//   }

//   if (password != password2) {
//     errors.push({ msg: 'Passwords do not match' });
//   }

//   if (password.length < 6) {
//     errors.push({ msg: 'Password must be at least 6 characters' });
//   }

//   if (errors.length > 0) {
//     res.render('register', {
//       errors,
//       username,
//       emailid,
//       password,
//       password2
//     });
//   } else {
//     User.findOne({ email: email }).then(user => {
//       if (user) {
        
//         res.render('register', {
//           errors,
//           username,
//           emailid,
//           password,
//           password2
//         });
//       } else {
//         const newUser = new User({
//           username,
//           emailid,
//           password
//         });

//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser
//               .save()
//               .then(user => {
//                 req.flash(
//                   'success_msg',
//                   'You are now registered and can log in'
//                 );
//                 console.log('You are now registered and can log in');
//                 res.redirect('/users/login');
//               })
//               .catch(err => console.log(err));
//           });
//         });
//       }
//     });
//   }
// });

// Login
// router.route('/userdata').get((req,res)=>{
//   console.log('get works!')
 
// });
// router.get('/data', forwardAuthenticated, (req, res) => { res.json('get works!')});


// router.post('/users', (req, res, next) => {
//   passport.authenticate('local', {
//     successRedirect: '/landing',
//     failureRedirect: '/auth/login',
//     failureFlash: true
//   })(req, res, next);
// });

// Logout
// router.get('/users_next', (req, res) => {
//   req.logout();
//   req.flash('success_msg', 'You are logged out');
//   res.redirect('/auth/login');
// });

module.exports = router;
