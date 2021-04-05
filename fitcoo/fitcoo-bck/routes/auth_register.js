const router = require('express').Router();
let AuthUser = require('../models/users_coll.model');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { forwardAuthenticated } = require('../config/auth');

router.route('/').get((req,res)=>{
    AuthUser.find()
     .then(users => res.json(users))
     .catch(err => res.status(400).json('Error:' + err));
});

// router.route('/').post((req,res)=>{
//     console.log(req.body);
//     res.send('Hello There');
// });



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

// router.route('/:username').post((req,res)=>{
//         const loginusername = req.body.username;
//         const loginpassword = req.body.pass;
//         restwe = AuthUser.findOne({username: req.body.username})
//         if(restwe == true){
//             res.json('returnmsg:'+ Object.values(restwe))
//         }else{
//             res.json('somenmsg:cyc')
//         }
//         //  .then(users => )
//         //  .catch(err => );
//     });


    router.route('/checkemail').post((req,res)=>{
        const loginusername = req.params.emailid;
        // const loginpassword = req.body.pass;
        restwe = AuthUser.findOne({emailid: req.body.emailid})
        .then(users => {
            if (users) {
              
                res.json('already--exists')
            } else {
                res.json('doesnot--exist')
        //  .then(users => )
        //  .catch(err => );
            }
        });
    });

module.exports = router;
