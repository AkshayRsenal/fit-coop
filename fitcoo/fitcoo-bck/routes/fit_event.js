const router = require('express').Router();
let FitEvent = require('../models/fit_event.model');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.route('/').get((req,res)=>{
    FitEvent.find()
     .then(fitevents => res.json(fitevents))
     .catch(err => res.status(400).json('Error:' + err));
});

// router.get('/', ensureAuthenticated, (req, res) => {
//     FitEvent.find()
//      .then(fitevents => res.json(fitevents))
//      .catch(err => res.status(400).json('Error:' + err));
// });

// router.get('/reconnector',function(req, res) {Response.writeHead(3000,'http://localhost:3000/');});
    

router.route('/add').post((req,res) => {
    const eventname = req.body.eventname;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const numOfPeople = Number(req.body.noOfPeople);
    const status = Number(req.body.status);

    const newFitEvent = new FitEvent({
        eventname,
        description,
        duration,
        date,
        numOfPeople,
        status
    });

    newFitEvent.save()
    .then(() => res.json('FitEvent added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) => {
    FitEvent.findById(req.params.id)
    .then(fit_event => res.json(fit_event))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req, res) => {
  FitEvent.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sports event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  FitEvent.findById(req.params.id)
    .then(fit_event => {

const eventname = req.body.eventname;
      fit_event.eventname = req.body.eventname;
      fit_event.description = req.body.description;
      fit_event.duration = Number(req.body.duration);
      fit_event.date = Date.parse(req.body.date);
      fit_event.numOfPeople = Number(req.body.noOfPeople);
      fit_event.status = Number(req.body.status);


      fit_event.save()
        .then(() => res.json('Sports Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
