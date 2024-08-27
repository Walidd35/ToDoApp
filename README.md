API RESTful pour la Gestion des Tâches
60/100%
Cette API RESTful permet aux utilisateurs de gérer leurs tâches personnelles. Elle utilise Node.js, Express, Sequelize ORM pour interagir avec une base de données MySQL, et assure la sécurité via JWT (JSON Web Tokens) pour l'authentification, ainsi que le chiffrement des mots de passe avec bcrypt.
Fonctionnalités

    Inscription : Permet aux utilisateurs de créer un nouveau compte.
    Connexion : Permet aux utilisateurs de se connecter et d'obtenir un token JWT.
    Gestion des Tâches :
        Créer une tâche : Ajouter de nouvelles tâches.
        Lire les tâches : Récupérer toutes les tâches ou une tâche spécifique.
        Mettre à jour une tâche : Modifier les détails d'une tâche existante.
        Supprimer une tâche : Supprimer une tâche spécifique.
        Qualifier une tâche de faite ou non : Utiliser une table completed pour marquer les tâches comme complètes ou non.

Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

    Node.js (version 12.x ou supérieure)
    MySQL
    npm ou yarn

Installation

    Clonez le dépôt :

    bash

git clone https://github.com/wawa35/ToDoApp.git

Accédez au répertoire du projet :

bash

cd repository

Installez les dépendances :

bash

npm install
# ou
yarn install

Configurez votre base de données :

    Assurez-vous d'avoir une base de données MySQL en cours d'exécution.

    Créez un fichier .env à la racine du projet avec les informations suivantes :

    env

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=tasks_db
    JWT_SECRET=your_jwt_secret

Exécutez les migrations pour configurer la base de données :

bash

    npx sequelize-cli db:migrate

Utilisation

    Démarrez le serveur :

    bash

    npm start
    # ou
    yarn start

    Le serveur sera accessible à l'adresse http://localhost:3000.

    Endpoints de l'API :
        Inscription : POST /api/auth/register
            Body : { "username": "user", "password": "pass" }
        Connexion : POST /api/auth/login
            Body : { "username": "user", "password": "pass" }
        Créer une tâche : POST /api/tasks
            Headers : Authorization: Bearer <token>
            Body : { "title": "Task Title", "description": "Task Description" }
        Lire les tâches :
            Toutes les tâches : GET /api/tasks
            Tâche spécifique : GET /api/tasks/:id
        Mettre à jour une tâche : PUT /api/tasks/:id
            Headers : Authorization: Bearer <token>
            Body : { "title": "Updated Title", "description": "Updated Description" }
        Supprimer une tâche : DELETE /api/tasks/:id
            Headers : Authorization: Bearer <token>
        Qualifier une tâche de faite ou non : PATCH /api/tasks/:id/completed
            Headers : Authorization: Bearer <token>
            Body : { "completed": true }

TODO

    Compléter la partie contrôleur pour gérer les opérations CRUD.
    Implémenter la gestion des tâches avec l'ID de l'utilisateur pour associer les tâches à l'utilisateur qui les a créées.

Contribuer

Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

    Forkez le dépôt.
    Créez une branche pour votre fonctionnalité ou correction de bug (git checkout -b feature/your-feature).
    Commitez vos changements (git commit -am 'Add new feature').
    Poussez la branche (git push origin feature/your-feature).
    Ouvrez une Pull Request.

Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
