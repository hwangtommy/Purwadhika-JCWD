const url = require("url");
const http = require("http");

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

http.createServer((req, res) => {
    const httpMethod = req.method;
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.path.split("/")[1];
    console.log(path)
})
.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
})