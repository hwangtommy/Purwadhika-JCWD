const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = require("./models")
const User = db.User;

const PORT = process.env.PORT;

// Register new account
app.post("/users", async (req, res) => {
    const { email, username, password, phone_number } = req.body;
    const result = await User.create({
        email: email,
        username: username,
        password: password,
        phone_number: phone_number
    })

    console.log(result);
    res.send(result);
})

// Log in to account
app.post("/users", async (req, res) => {

})

// Update account
app.patch("/users", async (req, res) => {
    const { gender, birthdate, occupation } = req.body;
    
})

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})