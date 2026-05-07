
let btn = document.getElementById ("btn");
let section = document.querySelector(".section");



btn.addEventListener("click", async() => {
let nom = document.getElementById("nom").value;
let prix = document.getElementById("prix").value;
    let response = await fetch("http://localhost:3000/produits", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nom,prix 

        })
    })
    Affiche();
})

async function modifierProduit(id){
    let nom = document.getElementById("nom").value;
    let prix = document.getElementById("prix").value;
    let responseModif = await fetch(`http://localhost:3000/produits/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nom,prix
        })
    })

    const data = await responseModif.json();
    console.log(data);
    Affiche();
}

async function SupprimerProduit(id) {
    let nom = document.getElementById("nom").value;
    let prix = document.getElementById("prix").value;
    let responseSup = await fetch(`http://localhost:3000/produits/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nom,prix
        })
    })

    const data = await responseSup.json();
    console.log(data);
    Affiche();
}

async function Affiche(){
    const response = await fetch("http://localhost:3000/produits");
    const affiche = await response.json();
    console.log(affiche);
    let html = affiche.map(p => 
        `
        <div>
        <h1>${p.nom} </h1>
        <h3>${p.prix} FCFA</h3>
        <button onclick = "SupprimerProduit(${p.id})">Supprimer</button>
        <button onclick = "modifierProduit(${p.id})">Modifier</button>
        `
    ).join("")
    section.innerHTML = html
}

Affiche();