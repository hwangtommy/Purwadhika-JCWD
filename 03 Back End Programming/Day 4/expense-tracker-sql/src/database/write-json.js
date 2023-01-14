const fs = require("fs")

const savedJSON = (database) => {
    fs.writeFile(
        "./src/database/db.json",
        JSON.stringify(database), 
        ()=> {
            
        }
    )
}

module.exports = savedJSON