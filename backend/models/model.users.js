const sqlz = require('sequelize');
const sqlzconfig =require('../config/configbdd');

const User = sqlzconfig.define('User,',{
    username:{
        type:sqlz.STRING,
        allowNull: false
    },
    email:{
        type:sqlz.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: sqlz.STRING,
        allowNull: false,
    }
   },{
    tableName: 'Utilisateur',
    timestamps: false
   }
);

console.log(User === sqlzconfig.models.User);
module.exports = User;