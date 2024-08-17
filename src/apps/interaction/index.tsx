import React, { useState } from "react";

import "./style.scss";

interface IInteractionMenu {
	title: string;
	description: string;
	buttons?: any;
}

const Menu = (props?: IInteractionMenu) => {
	const [input, setInput] = useState("");

	const close = () => {
		
	};

	const push = () => {
		
	};

	return (
		<>
			<img
				style={{
					position: "absolute",
					top: 15,
					left: 15,
					width: 55,
					opacity: 1,
				}}
				src="https://cdn.discordapp.com/attachments/749017234743099423/1014504170100887552/256X256_d1.png"
			/>

			<p className="title">{props.title}</p>

			<p className="description">{props.description || "Entrez la valeur"}</p>

			<div className="input">
				<textarea value={input} onChange={e => setInput(e.target.value)}></textarea>
			</div>

			<div className="buttons">
				<div
					className="interact"
					onClick={() => {
						push();
					}}
				>
					Accepter
				</div>

				<div
					className="quit"
					onClick={() => {
						close();
					}}
				>
					Quitter
				</div>
			</div>
		</>
	);
};

const MenuList = (props?: IInteractionMenu) => {
	const [input, setInput] = useState("");

	const close = () => {
		fetch(`/leaveinteraction`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify(true),
		});
	};

	const push = () => {
		fetch(`/pushinteraction`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify(input),
		});
	};

	return (
		<>
			<p className="title">{props.title}</p>

			{<p className="description">{props.description || 'Entrez la valeur'}</p>}

			<div className="list">
				{props.buttons.map((v, k) => {
					return (
						<div onClick={() => setInput(k)} className="element">
							{v}
						</div>
					);
				})}
			</div>

			<div className="buttons">
				<div
					className="interact"
					onClick={() => {
						push();
					}}
				>
					Accepter
				</div>

				<div
					className="quit"
					onClick={() => {
						close();
					}}
				>
					Quitter
				</div>
			</div>
		</>
	);
};

const InteractionMenu = () => {
	const [data, setState] = useState<any>({
		title: 'hopital',
	 	description: 'kj jr hjk hjkehjkh ',
		buttons: ['Sortie']
	});

	const onMessage = (event: any) => {
		if (event.data.type == "interaction") {
			setState(event.data.content);
		}
	};

	React.useEffect(() => {
		window.addEventListener("message", onMessage);
		return () => window.removeEventListener("message", onMessage);
	});

	return (
		<div id="interaction">
			{data.buttons ? (
				<>{data.title && <MenuList title={data.title} description={data.description} buttons={data.buttons} />}</>
			) : (
				<>{data.title && <Menu title={data.title} description={data.description} buttons={data.buttons} />}</>
			)}
		</div>
	);
};

export default InteractionMenu;
