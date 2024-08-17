import React, { useState } from "react";

import "./style.scss";

interface IPed {
	title?: string;
	message?: string;
	buttons: any[];
}

const Ped = () => {
	const [state, setState] = useState({
		title: "iub",
		message: "Tu veux manger ma glace ?",
		buttons: ["Oui", "Non"],
	});

	const close = () => {
		fetch(`/leaveped`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify(true),
		});
	};

	const push = (idButton: number) => {
		fetch(`/pushped`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify(idButton),
		});
	};

	const onMessage = (event: any) => {
		if (event.data.type == "ped") {
			setState(event.data.content);
		}
	};

	React.useEffect(() => {
		window.addEventListener("message", onMessage);
		return () => window.removeEventListener("message", onMessage);
	});

	document.addEventListener("keydown", function (event) {
		if (event.keyCode == 27) close();
	});

	return (
		<div id="ped">
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


			<div className="intitle">
				{/* <p className="title">{state.title}</p> */}
			</div>

			<div className="content">
				<div className="container">
					{state.message && (
						<svg
							style={{ marginBottom: 30 }}
							width="436"
							height="97"
							viewBox="0 0 436 97"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M14.5 7C14.5 3.13401 17.634 0 21.5 0H428.5C432.366 0 435.5 3.13401 435.5 7V89.4917C435.5 93.3609 432.361 96.4963 428.492 96.4917L14.5 96L0 96.5L12.3622 84.5641C13.7284 83.245 14.5 81.4274 14.5 79.5283V7Z"
								fill="rgba(0, 0, 0, 0.5)"
							/>

							<foreignObject height={97} width={436}>
								<div className="flex-column flex-align" style={{ width: "80%", height: 97, alignItems: "flex-start" }}>
									<p style={{ marginLeft: 45, color: "#fff" }}>{state.message}</p>
								</div>
							</foreignObject>
						</svg>
					)}

					<div className="flex-row" style={{ marginBottom: 15, justifyContent: "space-between", width: 590 }}>
						{state.buttons[0] && (
							<div onClick={() => push(1)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[0]}</p>
							</div>
						)}

						{state.buttons[1] && (
							<div onClick={() => push(2)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[1]}</p>
							</div>
						)}
					</div>

					<div className="flex-row" style={{ marginBottom: 15, justifyContent: "space-between", width: 590 }}>
						{state.buttons[2] && (
							<div onClick={() => push(3)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[2]}</p>
							</div>
						)}

						{state.buttons[3] && (
							<div onClick={() => push(4)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[3]}</p>
							</div>
						)}
					</div>

					<div className="flex-row" style={{ marginBottom: 15, justifyContent: "space-between", width: 590 }}>
						{state.buttons[4] && (
							<div onClick={() => push(5)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[4]}</p>
							</div>
						)}

						{state.buttons[5] && (
							<div onClick={() => push(6)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[5]}</p>
							</div>
						)}
					</div>
					
					<div className="flex-row" style={{ marginBottom: 15, justifyContent: "space-between", width: 590 }}>
						{state.buttons[6] && (
							<div onClick={() => push(7)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[4]}</p>
							</div>
						)}

						{state.buttons[7] && (
							<div onClick={() => push(8)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[5]}</p>
							</div>
						)}
					</div>

					<div className="flex-row" style={{ marginBottom: 15, justifyContent: "space-between", width: 590 }}>
						{state.buttons[8] && (
							<div onClick={() => push(9)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[4]}</p>
							</div>
						)}

						{state.buttons[9] && (
							<div onClick={() => push(10)} className="button">
								<p style={{ marginLeft: 25 }}>{state.buttons[5]}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ped;
