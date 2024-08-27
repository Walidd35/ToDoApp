const sequelize = require('../backend/config/configbdd')

//La fonction ".authenticate" permet de voir notre statut de connexion .
sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie.');
    })
    .catch(error => {
        console.error('Impossible de se connecter à la base de données verifier fichier testco :', error);
    });



