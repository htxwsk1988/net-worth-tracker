const router = require('express').Router();

let assets = [
    {id: '1', name: 'Chequing', amount: 2000, shortTerm: true},
    {id: '2', name: 'Savings for Taxes', amount: 4000, shortTerm: true},
    {id: '3', name: 'Rainy Day Fund', amount: 506, shortTerm: true},
    {id: '4', name: 'Savings for Fun', amount: 5000, shortTerm: true},
    {id: '5', name: 'Savings for Travel', amount: 400, shortTerm: true},
    {id: '6', name: 'Savings for Personal Development', amount: 200, shortTerm: true},
    {id: '7', name: 'Investment 1', amount: 5000, shortTerm: true},
    {id: '8', name: 'Investment 2', amount: 60000, shortTerm: true},
    {id: '9', name: 'Investment 3', amount: 30000, shortTerm: true},
    {id: '10', name: 'Investment 4', amount: 50000, shortTerm: true},
    {id: '11', name: 'Investment 5', amount: 24000, shortTerm: true},
    {id: '12', name: 'Primay Home', amount: 455000, shortTerm: false},
    {id: '13', name: 'Second Home', amount: 1564321, shortTerm: false}
]

router.route('/').get((req, res) => res.json(assets));

router.route('/:id').get((req, res) => res.json(assets.find(asset => asset.id === req.params.id)));

router.route('/add').post((req, res) => {
    assets.push({
        id: req.body.id,
        name: req.body.name,
        amount: req.body.amount,
        shortTerm: req.body.shortTerm
    });
    return res.json(assets);
});

router.route('/update/:id').post((req, res) => {
    let asset = assets.find(asset => asset.id === req.params.id);
    asset.amount =  req.body.amount;
    return res.json(asset);
});

module.exports = router;