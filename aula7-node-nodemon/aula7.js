//utilizando nodemon como servidor autosave e express.
//usando o modulo express para abrir uma conexão com o servidor
const express = require("express");

//cria uma instancia(uma copia) para ser usada.
//pode transformar em uma constante.
const abrircon = express();

//mandando arquivo para o servidor
abrircon.get("/",function(req,res){
   res.sendFile(__dirname + "/html/index.html");
});

/*abrindo servidor com express
essa função é obrigatorio tem que estar no final do codígo
não pode conter nada em baixo da mesma.*/

//exibir mensagem para o servidor rodando.
abrircon.listen(8086,function(){
  console.log("servidor rodando! na URL http://localhost:8086");
});
