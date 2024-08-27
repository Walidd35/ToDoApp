const Sequelize = require('sequelize');
// CONNEXION A LA BDD
const sequelize = new Sequelize(
    'backend', 'root', '', {
    host: 'localhost',        
    dialect: 'mysql',         
    logging: console.log          
});

module.exports = sequelize;