import React, { useState } from "react";

import "./style.scss";

const Help = () => {
	const [dark, setDark] = useState(false);

	return (
		<div className={dark ? "help dark" : "help light"}>
			<svg
				style={{ marginLeft: -14 }}
				className="scl"
				width="31"
				height="42"
				viewBox="0 0 31 62"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_d_103_25)">
					<rect x="14" y="14" width="3" height="34" fill="#43ef01" />
				</g>
				<defs>
					<filter
						id="filter0_d_103_25"
						x="0"
						y="0"
						width="31"
						height="62"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="7" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0.478431 0 0 0 0 0.976471 0 0 0 0 0.0117647 0 0 0 1 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_25" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_25" result="shape" />
					</filter>
				</defs>
			</svg>

			<div style={{ display: "flex", alignItems: "center" }}>
				<p>APPUYE SUR </p>
				<div
					style={{
						margin: "0 7.5px",
						height: 22,
						width: 30,
						backgroundColor: "#fff",
						color: "#000",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: 15,
						fontFamily: "Akrobat",
					}}
				>
					E
				</div>
				<p>POUR OUVRIR</p>
			</div>
		</div>
	);
};

export default Help;
