//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routers/admin')
//const mongoose = require('mongoose')


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

//Rotas
 //necessário informar as rotas criadas.
 //prefixo admin para acessar as rotas, criadas no admin.js
 
  app.use('/admin', admin)

//Outros

const port = 8086;
app.listen(port, () => {
   console.log('Servidor rodando na url http://localhost:8086')
})
