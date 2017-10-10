var app = require('express');
var router = app.Router();

router.get('/a', (req, res, next) => {
    res.json('GET /users/a')
});

router.get('/haha', (req, res, next) => {
    res.json({
        haha: 'gepi'
    })
})

module.exports = router;