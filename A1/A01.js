/*como criar variaveis em javascript
-> variável é um espaço na memória
-> toda variável precida de: nome e tipo
-> sintaxe: let <nome-variavel>*/


/*let idade variavel idade criada, mas nenhum
valor ou tipo foi passado pra variável */
let numero= 15 /*variavel chamada numero com o valor 15 associado
-> tipo inteiro (ou int, interger*/
let preco = 9.99 /*variavel do tipo double (decimal)
chamada preco com valor 9.99*/
let nome = "javascript" /*variavel do tipo String (texto)
chamada nome com valor "javascript"*/

/*Escrevendo textos no console*/
console.log("Hello world! :D")

/*Escreva no console, seunome, idade e localização
utilizando variáveis*/

let nome2 = "Paulo"
let idade2 = 16
let localizacao = "Santo André"

console.log ("nome:" + nome2)
console.log ("idade:" + idade2)
console.log ("localizacao:" + localizacao)






/*If-else
    -> Estrutura condicional: tomar decisões*/

let idade = 19

if (idade >= 18) {
    console.log ("É maior de idade.")    
} else {
    console.log("É menor de idade")
}

/*Exercício: desenvolva um código que compare uma nota armazenada
na variável chamada "nota", se for maior ou igual que 5, o aluno está aprovado
se for menor que 5, está reprovado*/

/*Modo perfumaria ativado
Vamos permitir que a entrada do usuário seja capturada*/

/*importando um módulo que permite ler a entrada do usuário*/
const readline = require("readline")

/*cinfiguração para ler os dados do teclado*/
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

/*perguntando a nota*/
rl.question("Digite a nota do aluno: ", function(nota){

    /*convertendo entrada para número*/
    nota = Number(nota);

if (nota >= 5) {
    console.log ("aprovado")
} else {
    console.log ("reprovado") 
}

rl.close()

} )
