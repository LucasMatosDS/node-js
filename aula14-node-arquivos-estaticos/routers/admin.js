const express = require('express')
const router = express.Router()

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

//rotas para listar
router.get('/posts', (req, res) => {
  res.send('Página de posts')
})

module.exports = router
