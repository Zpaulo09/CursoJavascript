/*trabalhando com métodos console 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual é seu nome?',  (nome) => {
    console.log(`Olá, ${nome}`)

    rl.close()
})
*/
/*usando o let -> respeita o escopo do bloco
if (true) {
    let nome = "Paulo"
    console.log(nome)

}
console.log(nome)
*/

/*const { ifError } = require("assert");

usando var-> não respeita o escopo do bloco

if (true){
    var nome = "Javascript"
    console.log(nome)
}
console.log(nome)

/*exemplo 3 -> dentro de um for
for (let i = 0; i < 3; i++){
    console.log ("dentro do for: ", i)
}
console.log("fora do for:", i)
*/

/*IF ELSE */

/*let idade =15
if (idade < 12) {
    console.log("Criança")
} else if (idade < 18){
    console.log("Adolescente")
} else {
    console.log("Adulto")
}*/
/* 
const readline = require("readline")

//*configuraro módulo pra capturar entradas 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//*Perguntando pro usuário as 4 notas 

rl.question("digite a nota P1: ", function (P1) {
    rl.question("digite a nota P2: ", function (P2) {
        rl.question("digite a nota P3:", function (P3) {
            rl.question("digite a nota P4:", function (P4) {
                rl.question("Digite a carga horaria (em horas):", function (chTotal) {
                    rl.question("Digite a quantidade de faltas: ", function (chFaltas) {
                        

                    

                


                P1 = Number(P1)
                P2 = Number(P2)
                P3 = Number(P3)
                P4 = Number(P4)
                chTotal = Number(chTotal)
                chFaltas = Number(chFaltas)

                /*calculo média 
                let média = (P1 + P2 + P3 + P4) / 4

                /*calculo faltas 
                let faltas = (chFaltas / chTotal) * 100

                /*verificação da situação do aluno
                if (faltas >= 75) {
                    console.log("Reprovado por falta")
                } else if(média >= 6) {
                    console.log("Aprovado", média)
                } else {
                    console.log("Reprovado", média)
                }
                     rl.close()
                     })
                })
            })
        })
    })
})
/*

/*exercicio 3

/*definindo informações do sistema 
let id = "admin"
let senha = "admin123"

/* verificação do login
if (id == idUsuario && senha == senhaUsuario){
    console.log("Usuário logado com sucesso")
}else {
    console.log("Usuário ou senha incorreto.")
}
*/

/*Switch case 
let codigo = 332

switch (codigo) {
    case 980: console.log("Kindle")
        break;
    case 332: console.log("BYD Dolphin Mini")
        break;
    case 105: console.log("Aspirador robô") 
        break;   
    default:console.log ("item não encontrado.:(")
        break;
}

let numero1 = 10
let numero2 = 5
let soma = "+"
let subtracao = "-"
let divisao = "/"
let multiplicacao = "*"

switch (divisao) {
    case "+":console.log(numero1 + numero2)
        break;
    case "-":console.log(numero1 - numero2)
        break;
    case "/":console.log(numero1 / numero2)
        break;
    case "*":console.log(numero1 * numero2)
        break;
    default:console.log("operação não encontrada")
        break;
}*/

/*FOR repetição EXERCÍCIO PAR
for(let i = 2; i <= 20; i+= 2) {
    console.log("contador: ", i)
}*/ /*EXERCICIO IMPAR 
for(let i = 1; i <= 20; i+= 2){
    console.log("contador:", i)
}*/ /*EXERCICIO CONTAGEM REGRESSIVA
for(let i = 40; i >= 0; i--) {
    console.log("contador:", i)
}

*/ /*


let numero = 8

while (numero < 10) {
    console.log("numero maior que 10.")
}
*/

/*import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numero
while (numero < 10) {
rl.question("digite um numero: ", function(numero){
    console.log("numero invalido. tente de novo")
})
}*/

//cria uma função que onta o tempo em milisegundos
function delay(ms) {
    //cria uma rotina que fica "resolvendo" algo, nesse caso,
    //fica esperando milisegundos definidos e 
    //exibe o conteudo no console
    return new Promise(resolve => setTimeout(resolve,ms))
}

let i = 1

while (i <= 480){
    console.log(i) //escrever o numero na tela
    i++ //incrementar o numero
    await delay(1000)
}
