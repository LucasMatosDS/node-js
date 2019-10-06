/*carregando modulo js e adicionando em uma variável
tambem utilizado para carregar lib externas
*/
var somaFuncao = require("./funcoes/soma");
var subFuncao = require("./funcoes/sub");
var multFuncao = require("./funcoes/multi");
var divFuncao = require("./funcoes/div");

//imprimindo resultado no console.
console.log("adição:" + somaFuncao(2,2));
console.log("subtração:" + subFuncao(3,1));
console.log("multiplicação:" + multFuncao(3,3));
console.log("divisão:" + divFuncao(5,5));
