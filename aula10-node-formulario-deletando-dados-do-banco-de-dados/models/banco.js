const Sequelize = require("sequelize");

//conexão com o Banco de Dados Mysql
const sequelize = new Sequelize('postapp',"root", "",{
    host: "localhost",
    dialect: "mysql",
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
