# 📌 API Node.js / Express / MongoDB

## 🚀 Description
Cette application est une **API RESTful** développée avec **Node.js**, **Express** et **MongoDB**.  
Elle permet de gérer des opérations **CRUD**, une **authentification sécurisée avec JWT**, ainsi que le **téléchargement de fichiers** (images, PDF, etc.) grâce à **Multer**.

---

## ⚙️ Fonctionnalités principales
- 🔑 **Authentification sécurisée** avec `bcrypt` et `jsonwebtoken (JWT)`  
- 📂 **Gestion des fichiers** (upload et suppression) avec `Multer`  
- 📦 **CRUD complet** sur les ressources  
- 🗄️ **Base de données MongoDB** manipulée avec `Mongoose`  
- 🌍 Middleware pour servir des fichiers statiques  

---

## 🛠️ Technologies utilisées
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/)  
- [Mongoose](https://mongoosejs.com/)  
- [bcrypt](https://www.npmjs.com/package/bcrypt)  
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  
- [Multer](https://www.npmjs.com/package/multer)  

---

## 📂 Structure du projet
```
├── backend
│   ├── controllers/   # Logique métier
│   ├── models/        # Schémas Mongoose
│   ├── routes/        # Définition des routes
│   ├── middleware/    # Auth, multer, etc.
│   ├── images/        # Stockage des fichiers uploadés
│   ├── app.js         # Configuration de l'application
│   └── server.js      # Point d'entrée
```

---

## ⚡ Installation

### 1 Cloner le projet
```bash
git clone https://github.com/thiernomoontaga/api_stuff.git
cd api_stuff
```

### 2 Installer les dépendances
```bash
npm install
```


### 3 Lancer le serveur
```bash
npm start
```

---

## 🔑 Exemple d’utilisation de l’API

### 🔹 Inscription
```
POST /api/auth/signup
```
Body : 
```json
{
  "email": "thierno@exemple.com",
  "password": "thierno"
}
```

### 🔹 Connexion
```
POST /api/auth/login
```
Retourne un **token JWT**.

### 🔹 Création d’une ressource avec image
```
POST /api/stuff
Headers: Authorization: Bearer <token>
```
Body (form-data) :
- `title`: Mon produit  
- `image`: fichier image  

---



## 👨‍💻 Auteur
Développé par **thierno segnane**  
📩 Contact : thiernosegnane316@gmail.com 
🔗 GitHub : thiernomoontaga 