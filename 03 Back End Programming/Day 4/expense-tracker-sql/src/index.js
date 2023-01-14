const express = require("express");
const app = express();
app.use(express.json())
const expensesRoutes = require("./routes/expenses")

const PORT = 2000;

app.use("/expenses", expensesRoutes)

app.listen(PORT, () =>{
    console.log("API is running on port " + PORT)
})