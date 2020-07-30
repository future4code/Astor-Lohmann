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

// 3b. se o usuário digitar 10 aparecerá a mensagem: "Esse número passou no teste", porém se
// o usuário digitar -10 não aparecerá nenhuma mensagem no terminal.

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

//DESAFIO 2:


//------------------------------------PERGUNTAS AO USUÁRIO---------------
//  const userName = prompt("Nome Completo:")
//  const tipoJogo = prompt("Qual o tipo de jogo? IN DO")
//  const etapaJogo = prompt("Qual a etapa? SF DT FI")
//  const catejogo = prompt("Qual a categoria? 1 2 3 4")
//  const qntIngressos = Number(prompt("Digite o Número de ingressos"))



// //--------------------------------------VARIAVÉIS PREÇO-------------------
//  let precoSF1 = 1320
//  let precoSF2 = 880
//  let precoSF3 = 550
//  let precoSF4 = 220
//  let precoDT1 = 660
//  let precoDT2 = 440
//  let precoDT3 = 330
//  let precoDT4 = 170
//  let precoFI1 = 1980
//  let precoFI2 = 1320
//  let precoFI3 = 880
//  let precoFI4 = 330
//  let dolar = 4.10


 
//  //------------
//  console.log("---Dados da compra---" )
//  console.log("Nome do cliente: " + userName)
//  console.log("Tipo do jogo: " + tipoJogo)
//  console.log("Etapa do jogo: " + etapaJogo) 
//  console.log("Categoria: " + catejogo) 
//  console.log("Quantidade de Ingressos: " + qntIngressos + " ingressos") 
//  console.log("    ---Valores---")

// //-----------------------------------------------CÁLCULO PREÇO------------------

//  //-----------SEMI-FINAL------------

// if (etapaJogo === "SF") {
//         switch (catejogo) {
//                 case "1":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso: " + precoSF1)
//                         console.log("Valor total: " + precoSF1*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoSF1/dolar)
//                         console.log("Valor total:US$ " + (precoSF1*qntIngressos)/dolar)
//                     }
//                     break
//                 case "2":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoSF2)
//                         console.log("Valor total:R$ " + precoSF2*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoSF2/dolar)
//                         console.log("Valor total:US$ " + (precoSF2*qntIngressos)/dolar)        
//                     }
//                     break
//                 case "3":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoSF3)
//                         console.log("Valor total:R$ " + precoSF1*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoSF3/dolar)
//                         console.log("Valor total:US$ " + precoSF1*qntIngressos/dolar)        
//                     }
//                     break
//                 case "4":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoSF4)
//                         console.log("Valor total:R$ " + precoSF1*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoSF4/dolar)
//                         console.log("Valor total:US$ " + precoSF1*qntIngressos/dolar)        
//                     }
//                     break
//                 }
//             }


//  //-----------TERCEIRO-LUGAR------------

//  else if (etapaJogo === "DT") {
//         switch (catejogo) {
//                 case "1":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoSF1)
//                         console.log("Valor total:R$ " + precoSF1*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoSF1/dolar)
//                         console.log("Valor total:US$ " + precoSF1*qntIngressos/dolar)
//                     }
//                     break
//                 case "2":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoDT2/dolar)
//                         console.log("Valor total:R$ " + precoDT2*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoDT2)
//                         console.log("Valor total:US$ " + precoSF2*qntIngressos/dolar)        
//                     }
//                     break
//                 case "3":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoSF3)
//                         console.log("Valor total:R$ " + precoSF1*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoSF3/dolar)
//                         console.log("Valor total:US$ " + precoSF1*qntIngressos/dolar)        
//                     }
//                     break
//                 case "4":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoSF4/dolar)
//                         console.log("Valor total:R$ " + precoSF1*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoSF4/dolar)
//                         console.log("Valor total:US$ " + precoSF1*qntIngressos/dolar)        
//                     }
//                     break
//                 }
//         }

//  //------------FINAL------------

//  else if (etapaJogo === "FI") {
//         switch (catejogo) {
//                 case "1":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoFI1)
//                         console.log("Valor total:R$ " + precoFI1*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoFI1/dolar)
//                         console.log("Valor total:US$ " + precoFI1*qntIngressos/dolar)
//                     }
//                     break
//                 case "2":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoFI2/dolar)
//                         console.log("Valor total:R$ " + precoFI2*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoFI2)
//                         console.log("Valor total:US$ " + precoFI2*qntIngressos/dolar)        
//                     }
//                     break
//                 case "3":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoFI3)
//                         console.log("Valor total:R$ " + precoFI3*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoFI3/dolar)
//                         console.log("Valor total:US$ " + precoFI3*qntIngressos/dolar)        
//                     }
//                     break
//                 case "4":
//                     if (tipoJogo === "DO") {
//                         console.log("Valor do ingresso:R$ " + precoFI4/dolar)
//                         console.log("Valor total:R$ " + precoFI4*qntIngressos)
//                     } else if (tipoJogo === "IN") {
//                         console.log("Valor do ingresso:US$ " + precoFI4/dolar)
//                         console.log("Valor total:US$ " + precoFI4*qntIngressos/dolar)        
//                     }
//                     break
//                 }
//         }