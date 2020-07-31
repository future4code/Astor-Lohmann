// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO:

// 1. O codigo está adicionando o numero do indice a soma total, o indice aumenta em uma unidade a cada vez
// que soma o indice a soma total, o resultado final é 10.

// 2. Será impresso um lista de todos os elementos menores de 18 que estão no arrray.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 3a.
// const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of lista) {
  
// 		console.log(numero)
// 	}

// 3b.
// const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of lista) {
  
// 		console.log(numero/10)
// 	}

// 3c.
// const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const lista2 = []
// for (let numero of lista) {
//   if (numero%2 === 0) {
//     lista2.push(numero)
//   }
// }
// console.log(lista2)

//3d.
const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const lista2 = []
for (let i = 0; i < lista.length; i++) {
      lista2.push('O elemento do índex' + i + é' 'o  lista2[i]')
  }
  console.log(lista2)