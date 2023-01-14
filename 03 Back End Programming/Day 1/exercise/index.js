const express = require("express");
const app = express();
const PORT = 2000;

const items = [
    {
        id: 1,
        name: "Sliced Pork Belly (500gr)",
        price: 35000
    },
    {
        id: 2,
        name: "Beef Brisket (500gr)",
        price: 70000
    },
    {
        id: 3,
        name: "Skinless Boneless Chicken Breast (1kg)",
        price: 40000
    },
    {
        id: 4,
        name: "Salmon Fillet (500gr)",
        price: 35000
    }
];

app.get("/items", (req, res) => {
    res.status(200).json({
        message: "Item data fetched",
        result: items
    })
})

app.post("/items", (req, res) => {
    const data = req.body;
    items.push(data);
    res.status(201).json({
        messange: "New item added",
        result: data,
    })
})

app.put("items/:id", (req, res) =>{
    const data = req.body;
    const id = req.params.id;

    const findIndex = products.findIndex((val) => {
        return val.id == id;
    })

    if (findIndex == -1){
        res.status(400).json({
            message: "ID not found",
        });
        return;
    }

    products[findIndex]={
        ...products[findIndex],
        ...data,
    }
})

app.delete("items/:id", (req, res) =>{
    const id = req.param.id;

    const findIndex = products.findIndex((val) => {
        return val.id == id;
    })

    if (findIndex == -1){
        res.status(400).json({
            message: "ID not found",
        });
        return;
    }

    products.splice(findIndex, 1)

    res.status(200).json({
        message: "Item deleted",
    })
})

app.patch("items/:id", (req, res) =>{
    const data = req.body;
    const id = req.params.id;

    const findIndex = products.findIndex((val) => {
        return val.id == id;
    })

    if (findIndex == -1){
        res.status(400).json({
            message: "ID not found",
        });
        return;
    }

    products[findIndex]={
        ...products[findIndex],
        ...data,
    }
})

app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
})