const router = require('express').Router();
let UserColl = require('../models/users_coll.model');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { forwardAuthenticated } = require('../config/auth');



router.route('/').get((req,res)=>{
    UserColl.find()
     .then(users => res.json(users))
     .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const emailid = req.body.emailid;
    const password = req.body.password;
    const extra = req.body.extra;
    const status = Number(req.body.status);

    const newUserColl = new UserColl({
        username,
        emailid,
        password,
        extra,
        status
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUserColl.password, salt, (err, hash) => {
          if (err) throw err;
          newUserColl.password = hash;
          newUserColl
            .save()
            .then(users => {
              req.flash(
                'success_msg',
                'You are now registered and can log in'
              );
              // res.redirect('/auth/login');
            })
            .then(() => res.json('User added!'))
            .catch(err => console.log(err));
        });
      });
    

    // newUserColl.save()
    // .catch(err => res.status(400).json('Error:' + err));
    

});

// Login
router.route('/userdata').get((req,res)=>{
    res.json('get works!et works!')
   
});
// router.get('/landing', forwardAuthenticated, (req, res) => { res.json('login get works!')});
// router.get('/register/users', forwardAuthenticated, (req, res) => { res.json('register get works!')});


router.post('/users/login', (req, res, next) => {
    passport.authenticate('local', {
        successReturnToOrRedirect : '/welcome_land/',
      failureRedirect: 'localhost:3000/authlogin',
      failureFlash: true
    })(req, res, next);
  });
  
  // Logout
  // router.get('/users/logout', (req, res) => {
  //   req.logout();
  //   req.flash('success_msg', 'You are logged out');
  //   res.redirect('/auth/login');
  // });

module.exports = router;
