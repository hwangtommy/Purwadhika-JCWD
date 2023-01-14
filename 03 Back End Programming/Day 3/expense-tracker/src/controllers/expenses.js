const db = require("../database/db.json")

const savedJSON = require("../database/write-json")

const expensesController = {
    // Get expense list
    getExpenseList: (req, res) => {
        res.status(200).json({
            message: "Expenses data fetched",
            result: db.expenses
        })
    },
    // Get expense details
    getExpenseData: (req, res) => {
        const id = req.params.id

        const detailExpense = db.expenses.find((val) => {
            return val.id == id
        })

        res.status(200).json({
            message: `Data with ID ${id} fetched`,
            result: detailExpense
        })
    },
    // Create new expense data
    newExpense: (req, res) => {
        const data = req.body

        db.expenses.push(data)
        
        savedJSON(db)
        res.status(200).json({
            message: "New expenses added",
            result: data
        })
    },
    // Edit expense data
    editExpense: (req, res) => {
        const data = req.body
        const id = req.params.id

        const findIndex = db.expenses.findIndex((val) => {
            return val.id == id
        })

        db.expenses[findIndex] = {
            ...db.expenses[findIndex],
            ...data,
        }

        savedJSON(db)
        res.status(200).json({
            message: `Expense ID ${id} edited.`,
            result: db.expenses[findIndex]
        })
    },
    // Delete expense data
    deleteExpense: (req, res) => {
        const id = req.params.id

        const findIndex = db.expenses.findIndex((val) => {
            return val.id == id
        })

        db.expenses.splice(findIndex, 1)

        savedJSON(db)
        res.status(200).json({
            message: `Expense ID ${id} deleted.`,
            result: db.expenses[findIndex]
        })
    },
    // Get total expense by date range
    getExpenseDate: (req, res) => {
        const dateFrom = req.query.dateFrom
        const dateTo = req.query.dateTo
        let total = 0

        db.expenses.map((val) => {
            if(Date.parse(val.date) >= Date.parse(dateFrom) && Date.parse(val.date) <= Date.parse(dateTo)){
                total += val.nominal
            }
        })

        res.status(200).json({
            message: `Expenses from ${dateFrom} to ${dateTo} total found.`,
            result: total
        })
        
    },
    // Get total expense by category
    getExpenseCategory: (req, res) => {
        const data = req.query.category
        let total = 0

        db.expenses.map((val) => {
            if(val.category == data){
                total += val.nominal
            }
        })

        res.status(200).json({
            message: `${data} category expenses found.`,
            result: total
        })

    }
}

module.exports = expensesController