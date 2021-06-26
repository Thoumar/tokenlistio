import React from "react";

import { TokenCard } from "../token-card/token-card.component";

import "./token-list.styles.css";

export const TokenList = (props) => {
	return (
		<div className="token-list">
			{props.tokens.map((token, index) => (
				<TokenCard key={index} data={token} />
			))}
		</div>
	);
};
