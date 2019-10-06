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

//buscar no banco
app.get('/', function(req,res){
    //exibndo todos os cadastros do banco de dados, pela função passada para o then.
    //objeto passado no findAll serve para ordenar as postagens cadastradas.

    //DESC - ordena pela postagem mais recente
    //ASC - ordena pela postagem mais velha
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        //mostra um array de postagens no console.
        //console.log(posts)
        res.render('./layouts/home',
        {posts: posts})
     })
    })

//cadastrar no banco
app.get('/cad', function(req,res){
    //informando ao express que queremos renderizar o arquivo formulario.handlebars
    res.render('formulario')
})

//deletar no banco
//criando uma rota para deletar chamada del, e passando o id como parametro
  app.get('/del/:id', function(req, res){
    //deletando o post pelo id.
    //passando uma instrução sql where para buscar o id.
       Post.destroy({where: {'id': req.params.id}}).then(function(){
         res.send('Postagem deletada com sucesso!')
       }).catch(function(erro){
         res.send('Erro ao deletar postagem' + erro)
       })
  })

  //editando dados no banco
  app.get('/edit/:id', function(req, res){
    //(findByPk) -> Pesquisa uma única instância por sua chave primária.
  Post.findByPk(req.params.id)
    .then(post => {
      res.render('formulario-edit', {
        id: req.params.id,
        titulo: post.titulo,
        conteudo: post.conteudo
      })
    })
    .catch(erro => {
      res.send('Requisição não encontrado!')
    })
})
app.post('/editar/:id', function(req, res){
  Post.update({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  },
  {
    where: { id: req.params.id }
  }).then(function(){
    res.redirect('/')
  }).catch(function(erro){
    res.send('Erro ao atualizar o cadastro!')
  })
})


//pegando dados dos inputs do formulario e enviando os dados via POST
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
