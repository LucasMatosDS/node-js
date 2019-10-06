const banco = require('./banco');

//definindo a tabela do Banco de Dados chamada postagens.
const Post = banco.sequelize.define('postagens', {
    titulo:{
        type: banco.Sequelize.STRING
    },
    conteudo:{
        type: banco.Sequelize.TEXT
    }
})
//Post.sync({force: true})
module.exports = Post
