const express = require("express");
const app = express(); 
const db = require("./db")
app.use(express.json());
const cors = require("cors");

app.use(cors());




app.post("/produits", (req, res, next) => {
    const {nom, prix} = req.body;
    const sql = "INSERT INTO produits (nom, prix) VALUES (?, ?)";
    db.query(sql, [nom, prix], (err, result) => {
        if(err) return res.status(500).json(err);
        res.json({message: "Produits ajouter"})
    })
    console.log(req.body);
    
})

app.get("/produits", (req, res, next) => {
    db.query("SELECT * FROM produits", (err, result) => {
        if(err) return res.status(500).json(err);
        res.json(result);
    })
   
});

app.put("/produits/:id", (req, res) => {
    const {id} = req.params;
    const {nom, prix} = req.body;
    const sql = "UPDATE produits SET nom=?, prix=? WHERE id=?";
    db.query(sql, [nom, prix, id], (err) => {
        if(err) return res.status(500).json(err);
        res.json({message: "Produits modifié"});
    })
})

app.delete("/produits/:id", (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM PRODUITS WHERE id=?";
    db.query(sql, [id], (err) => {
        if(err) return res.status(500).json(err);
        res.json({message: "Produit supprimmer "})
    })
})

app.use((req,res) => {
    res.status(404).send("PAge non trouvé")
})




module.exports =  app;
