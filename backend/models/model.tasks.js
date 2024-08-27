const sqlz = require('sequelize');
const sqlzconfig = require('../config/configbdd');
const User = require('../models/model.users')

const Task = sqlzconfig.define('Task', {
  title: {
    type: sqlz.STRING,
    allowNull: false
  },
  description: {
    type: sqlz.TEXT
  },
  isDone: {
    type: sqlz.BOOLEAN,
    defaultValue: false
  },
  UserId: {
    type: sqlz.INTEGER,
    allowNull: false,
    references: {
        model: User, 
        key: 'id'
    }
}}
)
const events = require('events');
events.EventEmitter.defaultMaxListeners = 20; 
module.exports = Task;
