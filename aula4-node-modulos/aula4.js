/*OBS: toda e qualquer alteração no codígo nesse caso será necessário reiniciar
o servidor.*/
//acessando modulo http padrão do node.
var http = require("http");

/*necessário um servidor http,
iremos criar um servidor local passando a porta de acesso ao mesmo.
a porta por padrão é 80. pode ser que estejá sendo utilizada na sua maquina,
caso imprima algo a mais na sua maquina do que a mensagem. altere a porta
para outra de sua preferencia.*/
http.createServer(function(req,res){
  //imprime uma mensagem de resposta.
  res.end("olá mundo");
}).listen(8086);

//mensagem para informar que o servidor foi inciado.
console.log("servidor iniciado!");
