import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
	render() {
		// let pokemonId = this.props.id;
		// pokemonId = pokemonId.toString()
		// if(pokemonId[0]!==0 )
		// for(int i=0; i<=2; i++){

		// }

		let imgSrc = `${POKE_API}${this.props.id}.png`;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{this.props.name}</h1>
				<img src={imgSrc} alt={this.props.name} srcset="" />
				<div className="Pokecard-data">Type: {this.props.type}</div>
				<div className="Pokecard-data">EXP: {this.props.exp}</div>
			</div>
		);
	}
}
export default Pokecard;
