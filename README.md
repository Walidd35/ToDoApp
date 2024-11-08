API RESTful pour la gestion des tâches

Ce projet propose une API RESTful permettant de gérer les tâches personnelles, avec Node.js, Express, Sequelize et MySQL. Il utilise le JWT pour l'authentification et bcrypt pour le chiffrement des mots de passe.
Fonctionnalités :

    Inscription, connexion, gestion des tâches (CRUD).
    Marquer les tâches comme complètes.
    Sécurisé par JWT.

Prérequis :

    Node.js (12.x ou supérieur)
    MySQL
    npm ou yarn

Installation :

    Clonez le dépôt :
    git clone https://github.com/wawa35/ToDoApp.git

    Installez les dépendances :
    npm install ou yarn install

    Créez un fichier .env avec les variables suivantes :

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=tasks_db
    JWT_SECRET=your_jwt_secret

    Exécutez les migrations :
    npx sequelize-cli db:migrate

    Démarrez le serveur :
    npm start ou yarn start

Utilisation de l'API :

Consultez la documentation des routes dans le README, en utilisant des tokens JWT pour les appels authentifiés.
Contributions :

    Forkez ce projet.
    Soumettez une Pull Request.

Licence :

Sous licence MIT.
