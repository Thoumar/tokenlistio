import React, { Component } from "react";
import { TokenList } from "./components/token-list/token-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			tokens: [],
			search: "",
		};
	}

	componentDidMount() {
		fetch(
			"https://api.nomics.com/v1/currencies?key=e0e5ade77feffe8318fc6dc6c542760bb1e020d1&ids=BTC,ETH,ADA,XRP,USDC,USDT,BNB,CHSB,CHZ,UNI,EOS,ENJ,AVAX,XLM,HBAR,ZEC,KNCL,UTK,OXT,STMX,RSR,COIN,API3,OMI,DOGE&attributes=id,name,logo_url"
		)
			.then((response) => response.json())
			.then((tokens) => {
				console.log(tokens);
				this.setState({ tokens });
			});
	}

	render() {
		const { tokens, search } = this.state;
		const filteredTokens = tokens.filter((token) => token.name.toLowerCase().includes(search.toLowerCase()));

		return (
			<div className="App">
				<SearchBox placeholder="Search for a token" handleChange={(e) => this.setState({ search: e.target.value })} />
				<TokenList tokens={filteredTokens} />
			</div>
		);
	}
}

export default App;
