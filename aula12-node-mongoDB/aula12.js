const mongoose = require("mongoose")

//configurando o mongoose
//utilizando arrow functions
mongoose.Promise = global.Promise;
//poderá informar qualquer nome do banco de dados, sem precisar criar um e referenciar se quiser.
//informando o nome mongo para o banco.
mongoose.connect("mongodb://localhost/mongo",{
  //useMongoClient: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log('conectando ao MongoDB...')
}).catch((erro) => {
  console.log('Houve um erro ao se conectar com o MongoDB!' + erro)
})

//Model - usuários
//usando o padrão schema
//definindo um Model
const UserSchema = mongoose.Schema({
    //criando campos do banco

    nome: {
      //informando o tipo de dado do campo
      //se quiser que um campo seje obrigatório adicione require: true
       type: String,
       require: true
    },

    sobrenome: {
      type: String,
      require: true
    },

    email: {
      type: String,
      require: true
   },

   idade: {
     type: Number
   }

})

//informando a collection (equivalente a criar a tabela no banco relacional)
 mongoose.model('usuarios', UserSchema)

//necessário criar uma variável ou constante para depois ser feita a instancia.
const NovoUsuario = mongoose.model('usuarios')

//criando um novo usuario, passando o nome da constante e informando os campos
// .save() -> salva os dados
new NovoUsuario({
    nome: "Lucas",
    sobrenome: "Matos da Silva",
    email: "lucasmatoss2000@gmail.com",
    idade: 19
}).save().then(() => {
   console.log('usuário criado com sucesso!')
}).catch((erro) => {
   console.log('erro ao criar usuário' + erro)
})

//comandos mongodb
//id é criado automaticamente no mongodb
//create database + nome_banco;
//use nome_banco;
//show collections; -> parecido com o show tables;
//db.usuarios.find() -> parecido com o comando select
