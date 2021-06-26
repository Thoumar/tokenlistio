import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			tokens: [
				{
					name: "Bitcoin",
				},
				{
					name: "Ethereum",
				},
				{
					name: "Litecoin",
				},
			],
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.tokens.map((token) => (
					<h1>{token.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
