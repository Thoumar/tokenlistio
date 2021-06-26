import React from "react";
import "./token-card.styles.css";

export const TokenCard = ({ data }) => {
	const { name, logo_url } = data;
	return (
		<div className="token-card">
			<img src={logo_url} alt={`${name} logo`} width="50" />
			<h1>{name}</h1>
		</div>
	);
};
