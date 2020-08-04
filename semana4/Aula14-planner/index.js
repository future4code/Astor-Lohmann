function addTarefa(){
    const pegarTarefa = document.getElementById("tarefa")
    let tarefa = pegarTarefa.value
   
    const semana = document.getElementById("dias-semana")
    let diaSemana = semana.value.toLowerCase()

    const addString = document.getElementById(`${diaSemana}`)
    addString.innerHTML += `<p>${tarefa}</p>`
    pegarTarefa.value = ""
}

