const router = require('express').Router();
// GET /places
router.get('/', (req, res) => {
    let places = [];
    res.render('places/index', { places });
});
// More code here in a moment

module.exports = router;
