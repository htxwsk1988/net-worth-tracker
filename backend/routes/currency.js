const router = require('express').Router();

let rates = [
    {id: '1', name: 'CAD', rate: 1},
    {id: '2', name: 'USD', rate: 0.76},
    {id: '3', name: 'EUR', rate: 0.64},
    {id: '4', name: 'JPY', rate: 79.73},
    {id: '5', name: 'MXN', rate: 15.89},
]

router.route('/').get((req, res) => res.json(rates));

router.route('/:name').get((req, res) => res.json(rates.find(rate => rate.name === req.params.name)));

module.exports = router;