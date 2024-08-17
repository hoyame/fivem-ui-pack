import React, { useState } from "react";

import "./style.scss";

import cashs from "../../assets/apps/menu/cash-small.png"
import cashm from "../../assets/apps/menu/cash-medium.png"
import cashl from "../../assets/apps/menu/cash-large.png"
import cashxl from "../../assets/apps/menu/cash-extralarge.png"

interface ISelector {
	name?: string;
	icon?: string;
	content?: any;
}

const Selector = () => {
	const [data, setData] = useState<ISelector[]>([
		{
			name: "Cash Small",
			icon: cashs,
			content: { name: "fe", title: "Cash S", subtitle: "Un peu de billets", icon: cashs, badges: ["gueiezg", "igubze"] }
		},
		{
			name: "Cash Medium",
			icon: cashm,
			content: { name: "fe", title: "Cash M", subtitle: "Un peu de billets", icon: cashm, badges: ["gueiezg", "igubze"] }
		},
		{
			name: "Cash Large",
			icon: cashl,
			content: { name: "fe", title: "Cash L", subtitle: "Un peu de billets", icon: cashl, badges: ["gueiezg", "igubze"] }
		},
	])
	const [cache, setCache] = useState<ISelector>({
		name: "Cash Small",
		icon: cashs,
		content: { name: "fe", title: "Cash S", subtitle: "Un peu de billets", icon: cashs, badges: ["gueiezg", "igubze"] }
	})

	const push = (data: any) => {
		
	};

	const Element = (props: ISelector) => {
		return (
			<div className={cache.name == props.name ? "selected element" : "element"} onClick={() => setCache(props)}>
				<p style={{ marginTop: 15, marginLeft: 15, fontSize: 17 }}>{props.name}</p>

				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<img
						style={{ width: 150, marginBottom: 10, marginRight: 10 }}
						src={props.icon}
					/>
				</div>
			</div>
		);
	};

	return (
		<div id="selector">
			<div style={{ display: "flex", width: "75%", marginLeft: "15%" }}>
				<div className="list">
					{data.map((v, k) => {
						return <Element key={k} {...v} />
					})}
				</div>

				<div className="content">
					<div className="header">
						<svg
							style={{ marginRight: 25 }}
							width="2"
							height="58"
							viewBox="0 0 2 58"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="2" height="58" fill="#D9D9D9" fill-opacity="0.23" />
						</svg>

						<div>
							<p style={{ fontSize: 12, marginBottom: -7.5, opacity: 0.42 }}>{cache.content ? cache.content.title : ''}</p>
							<p style={{ fontSize: 30 }}>{cache.content ? cache.content.subtitle : ''}</p>
						</div>
					</div>

					<p
						style={{
							margin: "30px 0",
							color: "#fff",
							fontSize: 80,
							fontWeight: 400,
							marginBottom: 10,
						}}
					>
						{cache ? cache.name : ''}
					</p>

					<div className="flex-row">
						{ cache.content.badges ? cache.content.badges.map((v, k) => {
							return (
								<div className="mini-button">{v}</div>
							)
						}) : ''}
					</div>

					<div onClick={() => setCache(cache)} className="button">ACHETER</div>

					<div className="flex-row" style={{ justifyContent: "flex-end" }}>
						<div className="logo">
							<img
								style={{ width: 250, marginBottom: 10, marginRight: 10 }}
								src={cache.icon}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Selector;
