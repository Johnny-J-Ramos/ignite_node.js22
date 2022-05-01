const Sequelize = require('sequelize');
const db = require('./db')

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        AllowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        AllowNull: false,
    }
})

//Será criado uma tabela, caso não exista o mesmo. 
//User.sync()

//Verifica se há alguma diferença na tabela, realiza a alteração
//User.sync({ alert: true})

module.exports = User
 
