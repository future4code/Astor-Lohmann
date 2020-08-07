const arrayDespesas = []

function addDespesa() {
    const valorInput = document.getElementById("valor")
    const tipoInput = document.getElementById("tipo")
    const descriçãoInput = document.getElementById("descrição")
    
    
    if(valorInput.value !== "" && tipoInput.value !== "" && descriçãoInput.value !== ""){
        const objetoDespesa = {
            valor: valorInput.value,
            tipo: tipoInput.value,
            descrição: descriçãoInput.value  
         }
    
    arrayDespesas.push(objetoDespesa)
    arrayDespesas.forEach(addDespesaHtml)

    valorInput.value = ""
    tipoInput.value = ""
    descriçãoInput.value = ""
              
    }else {
        alert("Todos os campos são obrigatórios")
    }

}
console.log(arrayDespesas)
const addDespesaLista = document.getElementById("lista-de-despesas")

const addDespesaHtml = (despesa, index, array) => {

    addDespesaLista.innerHTML = `<p>${despesa.valor}</p> <p>${despesa.tipo}</p> <p>${despesa.descrição}</p>` 
}





