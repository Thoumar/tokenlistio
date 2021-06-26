import React, { Component } from "react";
import { TokenList } from "./components/token-list/token-list.component";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			tokens: [],
		};
	}

	componentDidMount() {
		fetch(
			"https://api.nomics.com/v1/currencies?key=e0e5ade77feffe8318fc6dc6c542760bb1e020d1&ids=BTC,ETH,ADA,XRP,USDC,USDT,BNB,CHSB,CHZ,UNI,EOS,ENJ,AVAX,XLM,HBAR,ZEC,KNCL,UTK,OXT,STMX,RSR,COIN,API3,OMI&attributes=id,name,logo_url"
		)
			.then((response) => response.json())
			.then((tokens) => this.setState({ tokens }));
	}

	render() {
		return (
			<div className="App">
				<TokenList tokens={this.state.tokens} />
			</div>
		);
	}
}

export default App;
