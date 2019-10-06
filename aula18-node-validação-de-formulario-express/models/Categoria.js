const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Categoria = new Schema({

    nome: {
       type: String,
       required: true,
       default: "nome não inserido"
    },

    //slug não pode ter letras maiusculas ou caracteres especiais.
    slug: {
      type: String,
      required: true,
      default: "slug não insirido"
    },

    date: {
      type: Date,
      default: Date.now()
    }
})

//chamando o model categorias
mongoose.model("categorias", Categoria)
