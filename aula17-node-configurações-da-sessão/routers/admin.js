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
    const novaCategoria = {
      nome: req.body.nome,
      slug: req.body.slug
    }

    //passando novo obj

    new Categoria(novaCategoria).save().then(() => {
        console.log('Categoria salva com sucesso!')
    }).catch((erro) => {
       console.log('erro ao salvar nova Categoria!' + erro)
    })

})

//rotas para listar
router.get('/posts', (req, res) => {
  res.send('Página de posts')
})

module.exports = router
