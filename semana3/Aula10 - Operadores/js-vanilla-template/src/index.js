/*
Exercícios interpretação de código:

1)
a. false

b. false

c. true

e. undefined

2)
a. undefined

b. null

c. 11

d. [0]

e. erro

d. erro

*/

/*
Exercícios de escrita de código:
1)
 
const idadeUsuario = prompt ("Qual a sua idade?")
const idadeAmigx = prompt ("Qual a idade dx amigx?")

const resposta = Number(idadeUsuario) > Number(idadeAmigx)
const diferença = Number(idadeUsuario) - Number(idadeAmigx)

console.log("Sua idade é maior do que a do seu melhor amigo?" + resposta)
console.log(diferença)
*/

/*
2)

const numeroUsuario = prompt ("Insira um número par")

console.log(Number(numeroUsuario)%2)
 
c. Nos números pares o resto da divisão é zero

d. ìmpares o resto é sempre 1
*/

/*  
3)
let listaDeTarefas = []
const tarefa1 = prompt ("O que vc fez hoje de manhã?")
listaDeTarefas.push("tarefa1")
const tarefa2 = prompt ("O que vc fez para o almoço?")
listaDeTarefas.push("tarefa2")
const tarefa3 = prompt ("O que vc fez no trabalho hoje?")
listaDeTarefas.push("tarefa3")

console.log (listaDeTarefas)

const stringDoneJobs = prompt ("digite o índice de uma tarefa que você já realizou")
const numberDoneJobs = Number(stringDoneJobs)
listaDeTarefas.splice(numberDoneJobs, 1)
console.log (listaDeTarefas)
*/

/*
4)
const nomeDoUsuario = prompt ("Insira o seu nome")
const emailDoUsuario = prompt ("Insira o seu e-mail")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")
*/

 
//Desafios

/* 
1)
1.a
let farenheit = 77
const kelvin = (Number(farenheit) - 32)*(5/9) + 273.15

console.log(kelvin + "K")

1.b
let celsius = 80
const farenheit = (Number(celsius)*9/5) + 32

console.log(farenheit + "°F")

1.c
let celsius = 30
const farenheit = (Number(celsius)*9/5) + 32
const kelvin = (Number((Number(celsius)*9/5) + 32) - 32)*(5/9) + 273.15

console.log(farenheit + "°F")
console.log(kelvin + "K")

1.d
const celsius = prompt ("Insira a temperatura:")
const farenheit = (Number(celsius)*9/5) + 32
const kelvin = (Number((Number(celsius)*9/5) + 32) - 32)*(5/9) + 273.15 
*/

const energiaRes = prompt ("Insira o seu consumo Residencial:")
const wattHora = 0