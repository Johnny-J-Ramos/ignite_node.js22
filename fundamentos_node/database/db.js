const Sequelize = require('sequelize');
const sequelize = new Sequelize("ignite", "root", "aqswdefr", {
    host:"localhost",
    dialect:"mysql"
});

sequelize.authenticate()
.then(function() {
    console.log("conetado com sucesso")
}).catch(function(err)  {
    console.log("banco de dados não conectou")
})

module.exports = sequelize