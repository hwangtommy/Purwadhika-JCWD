const express = require("express");
const router = express.Router();
const app = express();
app.use(Express.json())

const PORT = 2000;

app.use("/users", router);

app.get("/", (req, res, next) => {
    console.log("Hello");
    next();
}, 

(req, res) =>{
    res.send("Hello")
})

app.listen(PORT, () =>{
    console.log("API is running on port " + PORT)
})