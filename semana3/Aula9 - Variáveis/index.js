/*
Respostas Exercícios de Interpretação:

1)  10
    10 5

2)  10 20 10
*/

/*
Respostas Exercícios de Escrita de código:
*/

//1)
let nome
let idade
console.log (typeof nome, idade)

/*
    d) Significa que as variáveis foram declaradas, porém nenhum valor foi atribuído a 
    elas, indicando uma ausência de variável, undefined no javascript é um tipo de variável.
*/

//
nome = prompt("Qual a seu nome?")
idade = prompt("Qual a sua idade?")
console.log (typeof nome, idade)

// A variável nome está definida como objeto e a idade com null, porém ambas as variáveis são null.

console.log("Ola " + nome + " você tem " + idade + " anos")

// 2)
let Pergunta1 = prompt("Qual a sua cor preferida?")
console.log("Resposta: " + Pergunta1)

let Pergunta2 = prompt("Você tem um animal de estimação?")
console.log("Resposta: " + Pergunta2)

let Pergunta3 = prompt("Qual a sua primeira lembraça de criança?")
console.log("Resposta: " + Pergunta3)

let Pergunta4 = prompt("Qual o primeiro emprego?")
console.log("Resposta: " + Pergunta4)

let Pergunta5 = prompt("Qual sua primeira viagem a turismo?")
console.log("Resposta: " + Pergunta5);

// 3)
let comidas = ['feijoada', 'pizza', 'hamburguer' , 'macarrao' , 'bife']
console.log("Essas são as minhas comidas preferidas: " + comidas)

comidas [1] = prompt("Qual a sua comida preferida?")
console.log(comidas)

//4)

let questions = ['Gosta de Gatos?', 'Gosta de Praia?', 'Está Empregado?']
let answers = ['True', 'False', 'True']

console.log(questions[0], answers[0])
console.log(questions[1], answers[1])
console.log(questions[2], answers[2])

