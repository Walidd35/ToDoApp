const sqlz = require('sequelize');
const sqlzConfig = require('../config/configbdd');

const Completed = sqlzConfig.define('Completed', {
  totalTasks: {
    type: sqlz.INTEGER,
    defaultValue: 0
  },
  completedTasks: {
    type: sqlz.INTEGER,
    defaultValue: 0
  }
});

module.exports = Completed;
