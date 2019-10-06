//usando o modulo express para abrir uma conexão com o servidor

const express = require("express");

//cria uma instancia(uma copia) para ser usada.
//pode transformar em uma constante.
const abrircon = express();

//responsável por criar uma rota.
abrircon.get("/", function(req, res){
  //imprimindo uma resposta e enviando para o servidor
  res.send("seja bem vindo ao meu site!");
});

abrircon.get("/home", function(req, res){
  res.send("seja bem vindo a minha pagina home");
});

abrircon.get("/contato", function(req, res){
  res.send("minha pagina de contato");
});



/*abrindo servidor com express
essa função é obrigatorio que está no final do codígo
não pode conter nada em baixo da mesma.*/

//exibir mensagem para o servidor rodando.
abrircon.listen(8086,function(){
  console.log("servidor rodando! na URL http://localhost:8086");
});
