const express = require("express")
const router =  express.Router()

const expensesController  = require("../controllers/expenses")

router.get("/", expensesController.getExpenseList)
router.post("/", expensesController.newExpense)
router.patch("/:id", expensesController.editExpense)
router.delete("/:id", expensesController.deleteExpense)
router.get("/byCategory", expensesController.getExpenseCategory)
router.get("/byDate", expensesController.getExpenseDate)
router.get("/:id", expensesController.getExpenseData)

module.exports = router