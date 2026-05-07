#CRUD Produits - Express & MySQL

##Description
Application CRUD réalisée avec Node.js, Express et MySQL.

Le projet permet de :
- Ajouter un produit
- Afficher les produits
- Modifier un produit
- Supprimer un produit

##Technologies utilisées
- Node.js
- Express.js
- MySQL
- JavaScrip



#initialisation

bash git clone https://github.com/TON_USERNAME/crud-express-mysql.git 

#2. Installer les dépendances

 npm install 

#3. Configurer MySQL

Créer une base de données :

sql CREATE DATABASE crud_db; 

Créer la table :

sql CREATE TABLE produits (   id INT AUTO_INCREMENT PRIMARY KEY,   nom VARCHAR(255),   prix DECIMAL(10,2) ); 

#4. Lancer le serveur

node server.js 

Le serveur démarre sur :

 http://localhost:3000 

 #Routes API

 GET  /produits  Afficher tous les produits 
 POST  /produits  Ajouter un produit 
 PUT  /produits/:id  Modifier un produit 
DELETE  /produits/:id  Supprimer un produit 



#Fonctionnalités
CRUD complet  
API REST  
Connexion MySQL  
Frontend JavaScript avec Fetch API  
