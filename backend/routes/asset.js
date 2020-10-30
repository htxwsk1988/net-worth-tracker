const router = require('express').Router();
const Client = require('node-rest-client').Client;
const options_auth = { user: "admin", password: "admin" };
const client = new Client(options_auth);

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

router.route('/').get((req, res) => {
    const currency = req.query && req.query.currency;

    if (currency) {
        client.get("http://localhost:5000/currencies/"+ currency, data => {
            const rate = data.rate;
            const newAssets = assets.map(asset => ({
                id: asset.id,
                name: asset.name,
                amount: asset.amount * rate,
                shortTerm: asset.shortTerm
            }));
            return res.json(newAssets)
        });
    }  else {
        return res.json(assets);
    }
});

router.route('/sum').get((req, res) => {
    let sum=0;
    assets.forEach(asset => sum += 1 * asset.amount);

    const currency = req.query && req.query.currency;
    
    if (currency) {
        client.get("http://localhost:5000/currencies/"+ currency, data => {
            // console.log(data);
            const rate = data.rate;
            sum *= rate;
            return res.json(sum)
        });
    } else {
        return res.json(sum);
    }
});

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