const Expenses = require('../models/expense');

exports.getAllExpenses = (req, res, next) => {
    Expenses.findAll()
        .then(response => res.json(response))
        .catch(err => console.log(err));
}

exports.getOneExpense = (req, res, next) => {
    Expenses.findByPk(req.params.id)
        .then(response => res.json(response))
        .catch(err => console.log(err));
}

exports.postAddExpense = (req, res, next) => {
    const amount = parseInt(req.body.amount);
    const description = req.body.description;
    const category = req.body.category;
    Expenses.create({
        amount: amount,
        description: description,
        category: category
    })
        .then(response => res.json(response))
        .catch(err => console.log(err));
}

exports.putUpdateExpense = (req, res, next) => {
    const expenseId = req.params.id;
    console.log(req.body);
    Expenses.update({
        amount: parseInt(req.body.amount),
        description: req.body.description,
        category: req.body.category
    }, {
        where: {
            id: expenseId
        }
    }
    )
        .then(response => res.json(response))
        .catch(err => console.log(err));
}

exports.deleteExpense = (req, res, next) => {
    Expenses.destroy({
        where: {
            id: req.params.id
        }
    })
}