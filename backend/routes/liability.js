const router = require('express').Router();

let liabilities = [
    {id: '1', name: 'Credit Card 1', monthlyPayment: 200, amount: 4342, shortTerm: true},
    {id: '2', name: 'Credit Card 2', monthlyPayment: 200, amount: 322, shortTerm: true},
    {id: '3', name: 'Mortgage 1', monthlyPayment: 2000, amount: 250999, shortTerm: false},
    {id: '4', name: 'Mortgage 2', monthlyPayment: 3500, amount: 632634, shortTerm: false},
    {id: '5', name: 'Line of Credit', monthlyPayment: 500, amount: 10000, shortTerm: false},
    {id: '6', name: 'Investment Loan', monthlyPayment: 700, amount: 10000, shortTerm: false},
    {id: '7', name: 'Student Loan', monthlyPayment: 0, amount: 0, shortTerm: false},
    {id: '8', name: 'Car Loan', monthlyPayment: 0, amount: 0, shortTerm: false}
];

router.route('/').get((req, res) => res.json(liabilities));

router.route('/:id').get((req, res) => res.json(liabilities.find(liability => liability.id === req.params.id)));

router.route('/add').post((req, res) => {
    liabilities.push({
        id: req.body.id,
        name: req.body.name,
        amount: req.body.amount,
        shortTerm: req.body.shortTerm
    });
    return res.json(liabilities);
});

router.route('/update/:id').post((req, res) => {
    let liability = liabilities.find(liability => liability.id === req.params.id);
    liability.amount =  req.body.amount;
    return res.json(liability);
});

module.exports = router;