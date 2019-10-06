const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Categoria')
//pegando o nome dado no arquivo Categoria
const Categoria = mongoose.model("categorias")

//definindo Rotas
/*OBS: se utiliza router passa definir uma rota não más app.
 OBS: optei por usar arrows functions do que function normais.
 por questão de otimização.
*/

router.get('/', (req, res) => {
   //informando que vai ser renderizado a view index.
   res.render("admin/index")
})

//rota de cadastro de categorias
router.get('/categorias', (req,res) => {
   res.render('admin/categorias')
})

//rota de catadastro de novas categorias
router.get('/categorias/add', (req, res) => {
     res.render('admin/addcategorias')
})

router.post('/categorias/nova', (req, res) => {
   //os campos nome e slug fazem referencia ao name dos inputs da pagina html
   //obj novaCategoria

   //validação manual

   var erros = []

   //(typeof) verifica se está vazio.
   if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome  == null){
      erros.push({texto: "Nome invalido!"})
      console.log(erros)
   }

   if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
       erros.push({texto: "Slug invalido!"})
   }

   if(req.body.nome.length < 2){
      erros.push({texto: "Nome da Categoria está muito pequeno!"})
   }

   if(erros.length > 0){
       //res.redirect('/posts')
       res.render('admin/addcategorias', {erros: erros})
   }else{

     const novaCategoria = {
       nome: req.body.nome,
       slug: req.body.slug
     }

     //passando novo obj
     new Categoria(novaCategoria).save().then(() => {
       //mensagem de sucesso.
       req.flash("success_msg", "Categoria criada com sucesso!")
       //redirecionando para a rota categorias
         res.redirect("/admin/categorias")
     }).catch((erro) => {
       //tratando o error
       req.flash("error_msg", "Houve um erro ao salvar a Categoria, tente novamente!")
       res.redirect("/admin")
     })

   }

})

//rotas para listar
router.get('/posts', (req, res) => {
  res.send('Página de posts')
})

module.exports = router
