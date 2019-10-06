//usando o modulo express para abrir uma conexão com o servidor

const express = require("express");

//cria uma instancia(uma copia) para ser usada.
//pode transformar em uma constante.
const abrircon = express();

//responsável por criar uma rota.
abrircon.get("/", function(req, res){
  //imprimindo uma resposta e enviando para o servidor
  res.send("isso é uma rota");
});

abrircon.get("/home", function(req, res){
  res.send("seja bem vindo a minha pagina home");
});

abrircon.get("/contato", function(req, res){
  res.send("minha pagina de contato");
});

/*criando rota com parametro
 para criar um parametro basta adicionar uma (barra) no final do nome da rota
 passada seguida de (dois pontos e o nome do parametro)
 OBS: não se esqueça de reiniciar o servidor.*/
abrircon.get("/ola/:nome/:idade", function(req,res){
  //send só pode ser enviado uma unica vez.
  res.send("<h2>olá "+req.params.nome+"</h2>"+"<h2>"+req.params.idade+"</h2>");//mostrando a mensagem junto com o parametro
  //res.send(req.params);//mostra todos os parametros em uma tabela adicionados
});



/*abrindo servidor com express
essa função é obrigatorio tem que estar no final do codígo
não pode conter nada em baixo da mesma.*/

//exibir mensagem para o servidor rodando.
abrircon.listen(8086,function(){
  console.log("servidor rodando! na URL http://localhost:8086");
});
