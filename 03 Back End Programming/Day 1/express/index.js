const express = require("express");
const app = express();
const PORT = 2000;

const users = [
    {
        id: 1,
        nama: "udin",
        email: "udin@mail.com"
    },
    {
        id: 2,
        nama: "sasuke",
        email: "sasuke@mail.com"
    }
];

app.get("/", (req, res) => {
    res.send("This is simple API")
})

app.get("/users", (req, res) => {
    res.status(200).json({
        message: "User data fetched",
        result: users
    })
})

app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
})