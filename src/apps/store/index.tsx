import React, { useState } from "react";

import Cars from "../../assets/apps/store/image.png";
import Cloths from "../../assets/apps/store/cloths.png";
import Contener from "../../assets/apps/store/contener.png";
import Gold from "../../assets/apps/store/gold.png";
import King from "../../assets/apps/store/king.png";
import Bags from "../../assets/apps/store/bags.png";
import Cash from "../../assets/apps/store/cash.png";

import "./style.scss";
import { useHistory } from "react-router-dom";

const Store = () => {
	const [coins, setCoins] = useState(1);
	const [code, setCode] = useState(15);
	const [routePrimary, setRoutePrimary] = useState("case");
	const history = useHistory();
	

	const close = () => {
		
	};

	const interact = (action: string) => {
		
	};

	const back = () => {
	};

	return (
		<div id="store">
			<div style={{ alignItems: "center", justifyContent: "space-between", width: "100%" }} className="flex-row header">
				<div className="flex-row">
					<svg
						style={{ marginRight: 10 }}
						width="50"
						height="50"
						viewBox="0 0 81 80"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M70.4406 23.3333C69.8646 22.3354 69.0398 21.5038 68.0467 20.9196C67.0536 20.3354 65.926 20.0186 64.7739 20H22.1072L20.1739 12.4667C19.9786 11.7395 19.5428 11.0998 18.9375 10.6519C18.3322 10.204 17.5931 9.97422 16.8406 10H10.1739C9.28985 10 8.44201 10.3512 7.81689 10.9763C7.19177 11.6014 6.84058 12.4493 6.84058 13.3333C6.84058 14.2174 7.19177 15.0652 7.81689 15.6904C8.44201 16.3155 9.28985 16.6667 10.1739 16.6667H14.3072L23.5072 50.8667C23.7026 51.5939 24.1384 52.2335 24.7437 52.6814C25.3489 53.1293 26.088 53.3591 26.8406 53.3333H56.8406C57.4561 53.3315 58.0592 53.1592 58.5828 52.8356C59.1064 52.512 59.5302 52.0497 59.8072 51.5L70.7406 29.6333C71.2145 28.6401 71.4351 27.5449 71.3827 26.4456C71.3304 25.3463 71.0067 24.2771 70.4406 23.3333ZM54.7739 46.6667H29.3739L23.9406 26.6667H64.7739L54.7739 46.6667Z"
							fill="#769D59"
						/>
						<path
							d="M25.1739 70C27.9353 70 30.1739 67.7614 30.1739 65C30.1739 62.2386 27.9353 60 25.1739 60C22.4125 60 20.1739 62.2386 20.1739 65C20.1739 67.7614 22.4125 70 25.1739 70Z"
							fill="#769D59"
						/>
						<path
							d="M58.5072 70C61.2686 70 63.5072 67.7614 63.5072 65C63.5072 62.2386 61.2686 60 58.5072 60C55.7458 60 53.5072 62.2386 53.5072 65C53.5072 67.7614 55.7458 70 58.5072 70Z"
							fill="#769D59"
						/>
					</svg>

					<p>BOUTIQUE</p>

					<svg
						style={{ margin: "0 40px" }}
						width="4"
						height="58"
						viewBox="0 0 4 58"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="0.173889" width="3" height="58" fill="#D9D9D9" fill-opacity="0.38" />
					</svg>

					<div className="solde">
						<span>SOLDE</span>
						<p>{coins} COINS</p>
					</div>
				</div>

				<div className="flex-row">
					<div className="button">AJOUTER DES FONDS</div>

					<div className="button">VÈRIFIER L'APPROVISIONNEMENT</div>

					<div className="button">ENTREZ UN CODE PROMO</div>

					<div className="button">SUPPRIMER UN AVERTISSEMENT</div>
				</div>
			</div>

			<div className="content">
				<div className="groupe-1">
					<div className="flex-row">
						<div className="vehicles" onClick={() => history.push('/cardealer')}>
							<div className="flex-row" style={{ width: "100%", justifyContent: "space-between" }}>
								<div>
									<p>VOITURE</p>
									<p style={{ fontWeight: 300 }}>IMPORT</p>
								</div>

								<p style={{ fontSize: 15, width: 100, textAlign: "center", color: "rgba(255, 255, 255, 0.75)" }}>
									Possêder une voiture unique
								</p>
							</div>

							<img
								style={{ width: 720, marginLeft: -50, marginTop: -50 }}
								src={Cars}
							/>
						</div>

						<div>
							<div className="container">
								<div className="box-text" style={{ marginRight: 20 }}>
									<p>CONTAINER</p>
									<p style={{ fontWeight: 300 }}>AVEC DES PRIX</p>
								</div>

								<img
									style={{ marginTop: -25, marginRight: -55, height: 160 }}
									src={Contener}
								/>
							</div>

							<div className="objets" style={{ paddingRight: 0 }} onClick={() => interact('items')}>
								<div className="box-text" style={{ marginRight: 65 }}>
									<p style={{ fontWeight: 300 }}>BOUTIQUE</p>
									<p style={{ fontWeight: 0 }}>AVEC DES PRIX</p>
								</div>

								<img
									style={{ marginTop: -44, height: 170 }}
									src={Cloths}
								/>
							</div>
						</div>
					</div>

					<div className="flex-row">
						<div className="starterpack" onClick={() => interact("starterpack")}>
							<div className="box-text">
								<p style={{ fontWeight: 300 }}>PAQUET DU</p>
								<p style={{ marginBottom: 5 }}>DÈBUTANT</p>

								<div className="flex-row">
									<svg width="24" height="24" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M13.1739 23.8333C19.157 23.8333 24.0072 18.983 24.0072 13C24.0072 7.01687 19.157 2.16663 13.1739 2.16663C7.19082 2.16663 2.34058 7.01687 2.34058 13C2.34058 18.983 7.19082 23.8333 13.1739 23.8333Z"
											stroke="#80B852"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M16.4239 17.3333L13.8087 14.7182C13.4024 14.3119 13.174 13.7609 13.1739 13.1863V6.5"
											stroke="#80B852"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>

									<p style={{ fontSize: 15, fontWeight: 300, marginLeft: 5 }}>INDISPONIBLE</p>
								</div>

								<div style={{ marginTop: 10 }} className="flex-row">
									<div className="mini-button">PREMIUM</div>

									<div className="mini-button">$ 15 000</div>
								</div>

								<div style={{ marginTop: 10 }} className="flex-row">
									<div className="mini-button">ITEMS</div>
								</div>
							</div>

							<img
								className="anim-loop"
								style={{ height: 340, marginTop: -80, marginLeft: -20 }}
								src={Cash}
							/>
						</div>

						<div className="bagpack" onClick={() => interact("backpack")}>
							<div>
								<p style={{ marginBottom: 20 }}>SAC Â DOS</p>

								<div style={{ marginBottom: 25 }} className="flex-row">
									<div style={{ marginRight: 35 }}>
										<p style={{ fontSize: 25, marginBottom: -5 }}>100 KG</p>
										<p style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.66)" }}>LVL 2</p>
									</div>

									<div>
										<p style={{ fontSize: 25, marginBottom: -5 }}>50 KG</p>
										<p style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.66)" }}>LVL 1</p>
									</div>
								</div>

								<p style={{ fontSize: 15, fontWeight: 300, width: "90%" }}>
									LES OBJEST NE TOMBENT PAS SU SAC LORS DU MEURTRE
								</p>
							</div>

							<img
								style={{ height: 200, marginRight: -25 }}
								src={Bags}
							/>
						</div>

						<div className="cash" onClick={() => interact("cash")}>
							<div className="box-text flex-column" style={{ width: "100%", alignItems: "center" }}>
								<p style={{ fontSize: 25, fontWeight: 300 }}>ACHAT</p>
								<p style={{ fontSize: 25, fontWeight: 0 }}>D'ARGENT</p>
								<p style={{ fontSize: 25, fontWeight: 0 }}>VIRTUELLES</p>
							</div>

							<img
								style={{ height: 165 }}
								src={Gold}
							/>
						</div>
					</div>
				</div>

				<div className="vip" onClick={() => interact("vip")}>
					<p style={{ marginBottom: 10 }}>VIP PLATINUM</p>

					<svg
						style={{ marginBottom: 30 }}
						width="107"
						height="35"
						viewBox="0 0 107 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="1.17383" y="1" width="104" height="33" rx="16.5" stroke="white" stroke-opacity="0.17" stroke-width="2" />
						<path
							d="M27.9818 25.144C27.2778 25.144 26.6912 25.0107 26.2218 24.744C25.7525 24.4773 25.4005 24.0933 25.1658 23.592C24.9312 23.0907 24.8138 22.4987 24.8138 21.816V21.384H26.5098C26.5098 21.4267 26.5098 21.4747 26.5098 21.528C26.5098 21.5707 26.5098 21.6187 26.5098 21.672C26.5205 22.056 26.5632 22.4027 26.6378 22.712C26.7232 23.0213 26.8672 23.2667 27.0698 23.448C27.2832 23.6293 27.5872 23.72 27.9818 23.72C28.3978 23.72 28.7125 23.624 28.9258 23.432C29.1392 23.2293 29.2832 22.9467 29.3578 22.584C29.4325 22.2213 29.4698 21.8053 29.4698 21.336C29.4698 20.6533 29.3418 20.0987 29.0858 19.672C28.8405 19.2347 28.4032 18.9947 27.7738 18.952C27.7418 18.9413 27.6992 18.936 27.6458 18.936C27.6032 18.936 27.5658 18.936 27.5338 18.936V17.224C27.5658 17.224 27.6032 17.224 27.6458 17.224C27.6885 17.224 27.7258 17.224 27.7578 17.224C28.3658 17.2027 28.8032 17.0427 29.0698 16.744C29.3365 16.4453 29.4698 15.9493 29.4698 15.256C29.4698 14.6693 29.3685 14.2 29.1658 13.848C28.9738 13.496 28.5845 13.32 27.9978 13.32C27.4112 13.32 27.0218 13.5173 26.8298 13.912C26.6378 14.296 26.5312 14.792 26.5098 15.4C26.5098 15.4427 26.5098 15.4907 26.5098 15.544C26.5098 15.5867 26.5098 15.6293 26.5098 15.672H24.8138V15.24C24.8138 14.5467 24.9312 13.9547 25.1658 13.464C25.4005 12.9733 25.7525 12.5947 26.2218 12.328C26.7018 12.0613 27.2938 11.928 27.9978 11.928C28.7125 11.928 29.3045 12.0613 29.7738 12.328C30.2432 12.5947 30.5952 12.9787 30.8298 13.48C31.0645 13.9707 31.1818 14.5627 31.1818 15.256C31.1818 16.0347 31.0112 16.6587 30.6698 17.128C30.3392 17.5973 29.8912 17.9173 29.3258 18.088C29.7205 18.2053 30.0512 18.408 30.3178 18.696C30.5952 18.984 30.8085 19.352 30.9578 19.8C31.1072 20.2373 31.1818 20.7493 31.1818 21.336C31.1818 22.104 31.0752 22.776 30.8618 23.352C30.6485 23.9173 30.3072 24.36 29.8378 24.68C29.3685 24.9893 28.7498 25.144 27.9818 25.144ZM35.9428 25.144C35.2068 25.144 34.5988 24.9787 34.1188 24.648C33.6495 24.3173 33.2975 23.864 33.0628 23.288C32.8388 22.712 32.7268 22.056 32.7268 21.32V15.736C32.7268 14.9787 32.8388 14.3173 33.0628 13.752C33.2868 13.176 33.6335 12.728 34.1028 12.408C34.5828 12.088 35.1962 11.928 35.9428 11.928C36.6895 11.928 37.2975 12.088 37.7668 12.408C38.2362 12.728 38.5828 13.176 38.8068 13.752C39.0308 14.3173 39.1428 14.9787 39.1428 15.736V21.32C39.1428 22.0667 39.0255 22.728 38.7908 23.304C38.5668 23.88 38.2202 24.3333 37.7508 24.664C37.2815 24.984 36.6788 25.144 35.9428 25.144ZM35.9428 23.736C36.3482 23.736 36.6522 23.6187 36.8548 23.384C37.0682 23.1493 37.2122 22.8507 37.2868 22.488C37.3722 22.1147 37.4148 21.7307 37.4148 21.336V15.72C37.4148 15.304 37.3775 14.9147 37.3028 14.552C37.2282 14.1787 37.0842 13.88 36.8708 13.656C36.6682 13.432 36.3588 13.32 35.9428 13.32C35.5268 13.32 35.2122 13.432 34.9988 13.656C34.7855 13.88 34.6415 14.1787 34.5668 14.552C34.4922 14.9147 34.4548 15.304 34.4548 15.72V21.336C34.4548 21.7307 34.4922 22.1147 34.5668 22.488C34.6522 22.8507 34.8015 23.1493 35.0148 23.384C35.2388 23.6187 35.5482 23.736 35.9428 23.736ZM43.8327 25.304V24.008C44.2274 24.008 44.5474 23.9813 44.7927 23.928C45.038 23.8747 45.2247 23.7787 45.3527 23.64C45.4914 23.5013 45.5874 23.304 45.6407 23.048C45.694 22.7813 45.7207 22.4453 45.7207 22.04V12.04H47.5127V22.072C47.5127 22.8187 47.4327 23.432 47.2727 23.912C47.1127 24.3813 46.83 24.7333 46.4247 24.968C46.0194 25.192 45.4434 25.304 44.6967 25.304H43.8327ZM52.8532 25.144C51.9785 25.144 51.2799 24.9733 50.7572 24.632C50.2345 24.2907 49.8612 23.8053 49.6372 23.176C49.4132 22.536 49.3012 21.7893 49.3012 20.936V16.024C49.3012 15.1707 49.4132 14.44 49.6372 13.832C49.8719 13.2133 50.2452 12.744 50.7572 12.424C51.2799 12.0933 51.9785 11.928 52.8532 11.928C53.7279 11.928 54.4212 12.0933 54.9332 12.424C55.4452 12.7547 55.8132 13.224 56.0372 13.832C56.2719 14.44 56.3892 15.1707 56.3892 16.024V20.952C56.3892 21.7947 56.2719 22.5307 56.0372 23.16C55.8132 23.7893 55.4452 24.28 54.9332 24.632C54.4212 24.9733 53.7279 25.144 52.8532 25.144ZM52.8532 23.72C53.3332 23.72 53.6959 23.624 53.9412 23.432C54.1865 23.2293 54.3519 22.952 54.4372 22.6C54.5225 22.2373 54.5652 21.816 54.5652 21.336V15.656C54.5652 15.176 54.5225 14.7653 54.4372 14.424C54.3519 14.072 54.1865 13.8053 53.9412 13.624C53.6959 13.432 53.3332 13.336 52.8532 13.336C52.3732 13.336 52.0052 13.432 51.7492 13.624C51.5039 13.8053 51.3385 14.072 51.2532 14.424C51.1679 14.7653 51.1252 15.176 51.1252 15.656V21.336C51.1252 21.816 51.1679 22.2373 51.2532 22.6C51.3385 22.952 51.5039 23.2293 51.7492 23.432C52.0052 23.624 52.3732 23.72 52.8532 23.72ZM61.5102 25.144C60.5715 25.144 59.8515 24.9573 59.3502 24.584C58.8489 24.2107 58.5075 23.688 58.3262 23.016C58.1449 22.3333 58.0542 21.5387 58.0542 20.632V12.04H59.7822V20.712C59.7822 21.2667 59.8195 21.7733 59.8942 22.232C59.9689 22.6907 60.1289 23.0533 60.3742 23.32C60.6302 23.5867 61.0089 23.72 61.5102 23.72C62.0222 23.72 62.4009 23.5867 62.6462 23.32C62.8915 23.0533 63.0515 22.6907 63.1262 22.232C63.2009 21.7733 63.2382 21.2667 63.2382 20.712V12.04H64.9502V20.632C64.9502 21.5387 64.8595 22.3333 64.6782 23.016C64.4969 23.688 64.1555 24.2107 63.6542 24.584C63.1635 24.9573 62.4489 25.144 61.5102 25.144ZM66.8537 25V12.04H69.4617C70.3257 12.04 71.0404 12.1573 71.6057 12.392C72.171 12.616 72.587 12.984 72.8537 13.496C73.131 13.9973 73.2697 14.6587 73.2697 15.48C73.2697 15.9813 73.2164 16.44 73.1097 16.856C73.003 17.2613 72.8324 17.608 72.5977 17.896C72.363 18.1733 72.0537 18.376 71.6697 18.504L73.5097 25H71.7657L70.0697 18.92H68.6617V25H66.8537ZM68.6617 17.624H69.3497C69.8617 17.624 70.2777 17.56 70.5977 17.432C70.9177 17.304 71.1524 17.0853 71.3017 16.776C71.451 16.4667 71.5257 16.0347 71.5257 15.48C71.5257 14.7227 71.387 14.1787 71.1097 13.848C70.8324 13.5067 70.283 13.336 69.4617 13.336H68.6617V17.624ZM78.2066 25.144C77.4599 25.144 76.8359 24.984 76.3346 24.664C75.8439 24.344 75.4706 23.9013 75.2146 23.336C74.9586 22.7707 74.8092 22.1147 74.7666 21.368L76.3666 20.936C76.3986 21.3947 76.4679 21.8373 76.5746 22.264C76.6919 22.6907 76.8786 23.0427 77.1346 23.32C77.3906 23.5867 77.7479 23.72 78.2066 23.72C78.6759 23.72 79.0279 23.592 79.2626 23.336C79.5079 23.0693 79.6306 22.6907 79.6306 22.2C79.6306 21.6133 79.4972 21.144 79.2306 20.792C78.9639 20.4293 78.6279 20.0667 78.2226 19.704L76.0466 17.784C75.6199 17.4107 75.3052 17.0053 75.1026 16.568C74.8999 16.12 74.7986 15.5707 74.7986 14.92C74.7986 13.9707 75.0706 13.2347 75.6146 12.712C76.1586 12.1893 76.8999 11.928 77.8386 11.928C78.3506 11.928 78.7986 11.9973 79.1826 12.136C79.5772 12.264 79.9026 12.4667 80.1586 12.744C80.4252 13.0213 80.6332 13.3733 80.7826 13.8C80.9426 14.216 81.0492 14.7067 81.1026 15.272L79.5666 15.688C79.5346 15.2613 79.4706 14.872 79.3746 14.52C79.2786 14.1573 79.1079 13.8693 78.8626 13.656C78.6279 13.432 78.2866 13.32 77.8386 13.32C77.3906 13.32 77.0386 13.4427 76.7826 13.688C76.5372 13.9227 76.4146 14.2747 76.4146 14.744C76.4146 15.1387 76.4786 15.464 76.6066 15.72C76.7452 15.976 76.9639 16.2373 77.2626 16.504L79.4546 18.424C79.9452 18.8507 80.3772 19.3627 80.7506 19.96C81.1239 20.5467 81.3106 21.2453 81.3106 22.056C81.3106 22.696 81.1772 23.2507 80.9106 23.72C80.6439 24.1787 80.2759 24.5307 79.8066 24.776C79.3479 25.0213 78.8146 25.144 78.2066 25.144Z"
							fill="white"
						/>
					</svg>

					<div className="content">
						<div className="elem">
							<svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.173889" width="23" height="5" rx="2.5" fill="#FED643" />
							</svg>

							<p style={{ marginLeft: 7.5, fontSize: 15 }}>15 tenues</p>
						</div>

						<div className="elem">
							<svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.173889" width="23" height="5" rx="2.5" fill="#FED643" />
							</svg>

							<p style={{ marginLeft: 7.5, fontSize: 15 }}>Limite de 50 véhicules</p>
						</div>

						<div className="elem">
							<svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.173889" width="23" height="5" rx="2.5" fill="#FED643" />
							</svg>

							<p style={{ marginLeft: 7.5, fontSize: 15 }}>6 maison/propriétés</p>
						</div>

						<div className="elem">
							<svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.173889" width="23" height="5" rx="2.5" fill="#FED643" />
							</svg>

							<p style={{ marginLeft: 7.5, fontSize: 15 }}>Sac a dos niveau 3</p>
						</div>

						<div className="elem">
							<svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.173889" width="23" height="5" rx="2.5" fill="#FED643" />
							</svg>

							<p style={{ marginLeft: 7.5, fontSize: 15 }}>Drift Mode</p>
						</div>

						<div className="elem">
							<svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.173889" width="23" height="5" rx="2.5" fill="#FED643" />
							</svg>

							<p style={{ marginLeft: 7.5, fontSize: 15 }}>Salaire x2</p>
						</div>

						<div className="elem">
							<svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.173889" width="23" height="5" rx="2.5" fill="#FED643" />
							</svg>

							<p style={{ marginLeft: 7.5, fontSize: 15 }}>Et d'autres avantages</p>
						</div>

						<img
							style={{ marginTop: -30, height: 270 }}
							src={King}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Store;
