const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post =  require('./models/Post');
//config

//templete engine
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/', function(req,res){
    //exibndo todos os cadastros do banco de dados, pela função passada para o then.
    //objeto passado no findAll serve para ordenar as postagens cadastradas.
    //DESC - ordena pela postagem mais recente
    //ASC - ordena pela postagem mais velha
    Post.findAll({order: [['id', 'desc']]}).then(function(posts){
        //mostra um array de postagens no console.
        //console.log(posts)
        res.render('./layouts/home',
        {posts: posts})
     })
    })

app.get('/cad', function(req,res){
    //informando ao express que queremos renderizar o arquivo formulario.handlebars
    res.render('formulario')
})

//pegando dados dos inputs do formulario. enviando dados via POST
app.post('/form', function(req, res){
    //enviando dados do input para a rota form
     Post.create({

     	titulo: req.body.titulo,
     	conteudo: req.body.conteudo

    }).then(function(sucess){
      //redirecionando para rota contendo um arquivo html.
      res.redirect('/')
     }).catch(function(erro){
     	 res.send('erro no Mysql' + erro)
     })

     //res.send("Titulo:" + req.body.titulo + "<br>Conteudo:" + req.body.conteudo);
})

app.listen(8086, function(){
    console.log('Servidor rodando na url http://localhost:8086')
})
