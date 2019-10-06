const express = require('express')
const router = express.Router()

//definindo Rotas
/*OBS: se utiliza router passa definir uma rota não más app.
 OBS: optei por usar arrows functions do que function normais.
 por questão de otimização.
*/

router.get('/', (req, res) => {
   res.send('Página principal do painel ADM')
})

//rota de cadastro de categorias
router.get('/categorias', (req,res) => {
   res.send('Página de categorias')
})



//rotas para listar
router.get('/posts', (req, res) => {
  res.send('Página de posts')
})

module.exports = router
