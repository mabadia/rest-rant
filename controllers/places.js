const router = require('express').Router();
// GET places
router.get('/', (req, res) => {
    const places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }];
    res.render('places/index', { places });
});
// More code here in a moment
router.get('/new', (req, res) => {
    res.render('places/new')
});
router.post('/', (req, res) =>{
    console.log(req.body)
   res.send('POST /places')
});



module.exports = router;
