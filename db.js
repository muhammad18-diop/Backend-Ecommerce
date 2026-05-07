const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"
});

db.connect((err) => {
    if(err){
        console.log("Erreur lors de la connexion de l base de donne");
        
    }else{
        console.log("Connnexion à la base de donnée reussi");
        
    }
});

module.exports = db;