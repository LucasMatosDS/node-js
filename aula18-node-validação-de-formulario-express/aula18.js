/*
Modulos a serem instalados para essa aula.

npm install --save express-session
npm install --save connect-flash
*/

//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routers/admin')
//modulo padrão do node, serve para manipular pastas.
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')

//Configurações
//app.use() -> usado para configuração
//session passando um objeto
app.use(session({
  secret: "curso-nodejs",
  resave: true,
  saveUnitialized: true
}));

//configurando o flash
app.use(flash())

//configurando o Middleware para ser usado
app.use((req,res,next) => {
    //flash é uma função que desaparece quando a pagina é recarregada
    //declarando variaveis globais, com locals

    //variavel success_msg criada.
    res.locals.success_msg = req.flash("success_msg")
    //variavel error_msg criada.
    res.locals.error_msg = req.flash("error_msg")
    //passando para o proximo.
    next()
})

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
 app.get('/', (req,res) => {
      res.redirect("/admin")
 })

app.use('/admin', admin)

//Outros

const port = 8086;
app.listen(port, () => {
   console.log('Servidor rodando na url http://localhost:8086')
})
