//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

//EXERCÍCIO 1:

// 1. O código fornecido no exercício faz o teste de números pares e impares, se o número
// escolhido pelo usuário for par, o código acusa "Passou no teste." se for ímpar,
// acusa "Não passou no teste."

//EXERCÍCIO 2:

// 2a. O código serve para informar o usuário sobre o preço das frutas que está comprando.

// 2b. Será impresso "O preço da fruta Maçã é R$2.25"

// 2c. Neste caso não haveria diferença na execução do código.

//EXERCÍCIO 3:

// 3a. Invoca um caixa de texto, indicando ao usuário que o primeiro número deve ser digitado.

// 3b. se o usuário digitar 10 aparece a mensagem: "Esse número passou no teste", porém se
// o usuário digitar -10 não aparece nenhuma mensagem no terminal.

// 3c. não haverá erro, pois a variável mensagem não tem escopo global, somente no bloco da função.

//EXERCÍCIOS DE ESCRITA DE CÓDIGO:

//EXERCÍCIO 4:

// const idadeUsuario = Number(prompt("Digite a sua idade"))
//     if (idadeUsuario >= 18){
//         console.log("Você pode dirigir")
//     } else {
//         console.log("Você não pode dirigir")
//     }

//EXERCÍCIO 5:

// const turno = prompt("Digite o turno que você estuda. M V N")
//     if (turno === "M"){
//         console.log("Bom dia")
//     } else if (turno === "V"){
//         console.log("Boa tarde")
//     } else if (turno === "N"){
//         console.log("Boa noite")
//     } else {
//         console.log("digite o turno corretamente")
//     }

//EXERCÍCIO 6:

// const turno = prompt("Digite o turno que você estuda. M V N")

// switch (turno){
//     case "M":
//         console.log("Bom dia")
//         break
//     case "V":
//         console.log("Boa Tarde")
//         break
//     case "N":
//         console.log("Boa Noite")
//         break
//     default:
//         console.log("clima não identificado")
// }

//EXERCÍCIO 7:

// const genero = prompt("Digite o genero do filme que você quer assistir:")
// const preço = Number(prompt("Qual o preço do ingresso?"))

//     if (genero === "fantasia" && preço < 15){
//         console.log("Bom filme")
//     } else {
//         console.log("escolha outro filme")
//     }

//DESAFIO 1:

// const genero = prompt("Digite o genero do filme que você quer assistir:")
// const preço = Number(prompt("Qual o preço do ingresso?"))

//     if (genero === "fantasia" && preço < 15){
//         let snack = prompt("Qual o seu snack?")
//         console.log("Bom filme com " + snack)
//     } else {
//         console.log("escolha outro filme")
//     }