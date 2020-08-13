import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeMarcBranco from '../../img/bookmarkwhite.svg'
import iconeMarcPreto from '../../img/bookmarkblack.svg'
import iconeCompartilhar from '../../img/share.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    marcado: false,
    comentando: false,
    compartilhar: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })
    
    if(!this.state.curtido){
      console.log('Curtiu!')
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
      })
    } else {
      console.log('Descurtiu!')
    } 
    
  }

  onClickMarcar = () => {
    this.setState({
      marcado: !this.state.marcado,
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
  
  onClicCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar,
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcacao

    if(this.state.marcado) {
      iconeMarcacao = iconeMarcPreto
    } else {
      iconeMarcacao = iconeMarcBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcar}
        />
        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post