  
  function addPost() {
//--------------------CAPTURA DOS CAMPOS INPUT------------------
    const tituloPost = document.getElementById("titulo-post")
    let tituloUser = tituloPost.value
    
    const autorPost = document.getElementById("autor-post")
    let user = autorPost.value
    
    const conteudoPost = document.getElementById("conteudo-post")
    let conteudoUser = autorPost.value
    
//-----------------OBJETO------------
    const postUser = {
      titulo: tituloUser,
      autor: user,
      conteudo: conteudoUser
    } 

//----------ARRAY-----------
    const arrayMain = []
    arrayMain.push(postUser)
  
//-------------ADICIONANDO O POST------------
    const postDiv = document.getElementById("container-de-posts")
    postDiv.innerHTML +=      `<div><h1>${tituloUser}</h1>
                             <h2>${user}</h2>
                             <p>${conteudoUser}</p></div>`
//-----------LIMPEZA------   
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""
}
//----------APERTOU O BOTÃO---------   
    function apertouBotao(evento){
    console.log(evento)
    addPost()

  }
