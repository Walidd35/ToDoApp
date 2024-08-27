const sqlzConfig = require('../config/configbdd');

const User = require('./model.users');
const Task = require('./model.tasks');
const Completed = require('./model.completed');


// User peut avoir plusieurs tâches .
User.hasMany(Task,{foreignKey:'userId'});
Task.belongsTo(User,{foreignKey:'userId'});

User.hasOne(Completed, { foreignKey: 'UserId' });
Completed.belongsTo(User, { foreignKey: 'UserId' });

sqlzConfig.sync({ force : true })
  .then(() => {
    console.log('Tables synchronisées avec succès');
  })
  .catch((error) => {
    console.error('Erreur lors de la synchronisation:', error);
  });

module.exports = { User, Task, Completed };