import React, { useState } from "react";
import { IContextComponent } from "../../data/context";
import ImgLink from "./img";

import bus from "../jobs/icons/bus.png"

import "./style.scss";

/*
id: number;
	icon?: string;
	text?: string;
	condition?: any;
	onClick?: () => void;
*/


const Context = () => {
	const [state, setState] = useState<IContextComponent[]>([
		{
			id: 1,
			icon: bus,
			text: "Menu",
			condition: true,
			onClick: () => {}
		},
		{
			id: 2,
			icon: bus,
			text: "Menu",
			condition: true,
			onClick: () => {}
		},
		{
			id: 2,
			icon: bus,
			text: "Menu",
			condition: true,
			onClick: () => {}
		},
		{
			id: 2,
			icon: bus,
			text: "Menu",
			condition: true,
			onClick: () => {}
		},
		{
			id: 2,
			icon: bus,
			text: "Menu",
			condition: true,
			onClick: () => {}
		},
	]);
	const [dark, setDark] = useState(true);
	let i = 0;

	const onMessage = (event: any) => {
		
	};

	const close = () => {
		
	};

	const onClick = (id: number) => {
		
	};

	const Component = (props: IContextComponent) => {
		return (
			<div onClick={() => onClick(props.id)} className="elem">
				<svg className="svg" width="128" height="165" viewBox="0 0 108 121" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						opacity="0.3"
						d="M0 36.2703C0 30.7753 3.00465 25.7201 7.83158 23.094L46.7884 1.89992C51.258 -0.53174 56.6556 -0.531742 61.1253 1.89992L100.082 23.094C104.909 25.7201 107.914 30.7753 107.914 36.2703V84.7297C107.914 90.2247 104.909 95.2799 100.082 97.906L61.1253 119.1C56.6556 121.532 51.258 121.532 46.7884 119.1L7.83158 97.906C3.00466 95.2799 0 90.2247 0 84.7297V36.2703Z"
					/>

					<foreignObject height={128} width={108}>
						<div className="content flex-column flex-align" style={{ height: 121 }}>
							<img style={{ height: 53, width: 53 }} src={ImgLink[props.icon] || props.icon} />

							<p style={{ marginTop: 2.5, color: "#fff" }}>{props.text}</p>
						</div>
					</foreignObject>
				</svg>
			</div>
		);
	};

	const returnComponent = () => {
		for (i = 0; i < state.length; i++) {
			if (i == 1 || (i % 2 == 0 && i + 2 <= state.length)) {
				console.log("sheee 1");
				return (
					<div className="line">
						<Component {...state[i]} />
						<Component {...state[i + 1]} />
					</div>
				);
			}

			if (i % 2 != 0 && i + 3 <= state.length) {
				console.log("sheee 2");

				return (
					<div className="line">
						<Component {...state[i]} />
						<Component {...state[i + 1]} />
						<Component {...state[i + 2]} />
					</div>
				);
			}
		}
	};

	return (
		<div id="context">
			{state.length !== 0 && (
				<div
					style={{ position: "absolute", right: 7.5, top: 10, display: "flex", flexDirection: "column", alignItems: "flex-end" }}
				>
					<div style={{ height: 60, width: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
						<div
							style={{
								borderRadius: 7.5,
								height: 40,
								width: 60,
								backgroundColor: "#fff",
								color: "#000",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 20,
								marginRight: 15,
							}}
						>
							ESC
						</div>

						<p style={{ color: "#fff", fontSize: 20 }}>Pour quitter</p>
					</div>
				</div>
			)}

			{state.length >= 2 && (
				<div className="line">
					<Component {...state[0]} />
					<Component {...state[1]} />
				</div>
			)}

			{state.length >= 5 && (
				<div className="line">
					<Component {...state[2]} />
					<Component {...state[3]} />
					<Component {...state[4]} />
				</div>
			)}

			{state.length >= 7 && (
				<div className="line">
					<Component {...state[5]} />
					<Component {...state[6]} />
				</div>
			)}

			{state.length >= 10 && (
				<div className="line">
					<Component {...state[7]} />
					<Component {...state[8]} />
					<Component {...state[9]} />
				</div>
			)}
		</div>
	);
};

export default Context;
