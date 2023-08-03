const router = require('express').Router();
const db = require('../models/places')
// const places = require('../models/places');

router.get('/', (req, res) => {
    db.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
});

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
    }
    else {
        res.render('error404')
    }
    })
});



router.get('/new', (req, res) => {
  res.render('places/new')
});

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
});



router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
});

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
});

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
});

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
});

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
});




// GET places
// router.get('/', (req, res) => {
//     // const places = [{
//     //     name: 'H-Thai-ML',
//     //     city: 'Seattle',
//     //     state: 'WA',
//     //     cuisines: 'Thai, Pan-Asian',
//     //     pic: '/images/thai-food.jpg'
//     // }, {
//     //     name: 'Coding Cat Cafe',
//     //     city: 'Phoenix',
//     //     state: 'AZ',
//     //     cuisines: 'Coffee, Bakery',
//     //     pic: 'http://placekitten.com/250/250'
//     // }];
//     res.render('places/index', { places });
// });
// // More code here in a moment
// router.get('/new', (req, res) => {
//     res.render('places/new')
// });
// router.post('/', (req, res) => {
//     if (!req.body.pic) {
//         // Default image if one is not provided
//         req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//         req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
// });


// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     console.log(id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/show', { place: places[id], id })
//     }

// });
// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//       res.render('places/edit', { place: places[id] })
//     }
//   });
//   router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }
  
//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
//   });  
  
// router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         places.splice(id, 1)
//         res.redirect('/places')
//     }
// })

module.exports = router;
