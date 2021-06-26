import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			tokens: [],
		};
	}

	componentDidMount() {
		fetch("https://api.nomics.com/v1/currencies?key=e0e5ade77feffe8318fc6dc6c542760bb1e020d1&ids=BTC,ETH,XRP&attributes=id,name,logo_url")
			.then((response) => response.json())
			.then((tokens) => this.setState({ tokens }));
	}

	render() {
		return (
			<div className="App">
				{this.state.tokens.map((token) => (
					<div key={token.id}>
						<img src={token.logo_url} alt={`${token.name} logo`} width="50" />
						<h1>{token.name}</h1>
					</div>
				))}
			</div>
		);
	}
}

export default App;
