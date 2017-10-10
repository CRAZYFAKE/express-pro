var app = require('express');
var router = app.Router();

router.get('/a', function (req, res, next) {
    res.json('GET /users/a')
});

module.exports = router;