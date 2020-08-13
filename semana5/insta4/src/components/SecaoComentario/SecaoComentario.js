import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends React.Component {
	state = {
		valorInput: "",
	};

	onChangeComentario = (event) => {
		
		this.setState({
		valorInput:event.target.value,
		});
		console.log(this.state.valorInput)
	};

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.setState.valorInput}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
