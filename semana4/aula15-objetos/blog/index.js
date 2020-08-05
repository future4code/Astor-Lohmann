  function addPost() {
    const tituloPost = document.getElementById("titulo-post")
    let tituloUser = tituloPost.value
    

    const autorPost = document.getElementById("autor-post")
    let user = autorPost.value
    

    const conteudoPost = document.getElementById("conteudo-post")
    let conteudoUser = autorPost.value
    
    const postUser = {
      titulo: tituloUser,
      autor: user,
      conteudo: conteudoUser
  } 
  const arrayMain = []
  arrayMain.push(postUser)


  // Limpeza dos campos--------
  tituloPost.value = ""
  autorPost.value = ""
  conteudoPost.value = ""
  }
  