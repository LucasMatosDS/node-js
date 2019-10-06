//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routers/admin')
//modulo padrão do node, serve para manipular pastas.
const path = require('path')
const mongoose = require('mongoose')


//Configurações

//BodyParser
 app.use(bodyParser.urlencoded({extended: true}))
 app.use(bodyParser.json())

//handlebars
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//Mongoose
//configurando a conexão com o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/webaplication").then(() => {
   console.log('Conectado ao Mongo!')
}).catch((erro) => {
  console.log('erro ao se conectar!' + erro)
})
//Public
//informando o caminho para a pasta public
app.use(express.static(path.join(__dirname, 'public')))


//Rotas
 //necessário informar as rotas criadas.
 //prefixo admin para acessar as rotas, criadas no admin.js
 //rota inicial
  app.use('/admin', admin)

//Outros

const port = 8086;
app.listen(port, () => {
   console.log('Servidor rodando na url http://localhost:8086')
})
