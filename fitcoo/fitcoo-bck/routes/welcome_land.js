const router = require('express').Router();
let AuthUser = require('../models/users_coll.model');



// router.route('/').get((req,res)=>{
//     AuthUser.find()
//      .then(users => res.json(users))
//      .catch(err => res.status(400).json('Error:' + err));
// });

router.route('/').get((req,res)=>{
    
    // .then(user => {
    //     req.flash(
    //       'success_msg',
    //       'You are now registered and can log in'
    //     );
    //     res.redirect('/users/login');
    //   })
    res.redirect("/landing");
});
// router.get('/res', (req,res) => res.render("<p>Welcome</p>"));

// router.route('/add').post((req,res) => {
//     const username = req.body.username;
//     const emailid = req.body.emailid;
//     const password = req.body.password;
//     const extra = req.body.extra;
//     const status = Number(req.body.status);

//     const newUserColl = new AuthUser({
//         username,
//         emailid,
//         password,
//         extra,
//         status
//     });

    

//     newUserColl.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error:' + err));
// });



module.exports = router;
