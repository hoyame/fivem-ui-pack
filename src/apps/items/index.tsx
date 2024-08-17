import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './style.scss'

const Items = () => {
    const history = useHistory();
	const [selected, setSelected] = useState("");
    const [items, setItems] = useState([])
	const [coins, setCoins] = useState(0)
	
	const onMessage = (event: any) => {
		if (event.data.type == "items") {
			setItems(event.data.items)
			setCoins(event.data.subdata.coins)
		}
	};
	
	React.useEffect(() => {
		window.addEventListener("message", onMessage);
		return () => window.removeEventListener("message", onMessage);
	});

	const back = () => {
		fetch(`/backitems`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify(true),
		});
	};
    
	const onClick = (name: string) => {
		console.log(name)
		fetch(`/onClickitems`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify(name),
		});
	};

    const Item = props => {
		const [draggable, setDraggable] = useState(false);

		return (
			<>
				{props.lat ? (
					<div className="item">
						<svg width="89" height="89" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M102.5 0.5V102.5H0.5V0.5H9.83708H102.5Z" />

							<foreignObject height={100} width={103}>
								<div className="content flex-column flex-align" style={{ height: 103 }}>
									{props.icon}

									<p
										style={{
											textTransform: "uppercase",
											marginTop: 4,
											fontWeight: 300,
											fontSize: 15,
											color: "#fff",
											opacity: 0.31,
										}}
									>
										{props.title}
									</p>
								</div>
							</foreignObject>
						</svg>
					</div>
				) : (
					<>
						{props.locked ? (
							<>
								<div className="item">
									<svg width="89" height="89" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M102.5 0.5V102.5H0.5V0.5H9.83708H102.5Z" />

										<foreignObject height={100} width={103}>
											<div className="content flex-column flex-align" style={{ height: 103 }}>
												<svg
													width="17"
													height="17"
													viewBox="0 0 17 17"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M13.8385 7.08854H12.8259V5.06326C12.8259 3.98898 12.3991 2.95871 11.6395 2.19908C10.8799 1.43945 9.84958 1.0127 8.77531 1.0127C7.70103 1.0127 6.67075 1.43945 5.91113 2.19908C5.1515 2.95871 4.72474 3.98898 4.72474 5.06326V7.08854H3.7121L2.69946 8.10118V14.177L3.7121 15.1897H13.8385L14.8511 14.177V8.10118L13.8385 7.08854ZM5.73738 5.06326C5.73738 4.25755 6.05745 3.48484 6.62717 2.91512C7.19689 2.3454 7.9696 2.02534 8.77531 2.02534C9.58101 2.02534 10.3537 2.3454 10.9234 2.91512C11.4932 3.48484 11.8132 4.25755 11.8132 5.06326V7.08854H5.73738V5.06326ZM13.8385 14.177H3.7121V8.10118H13.8385V14.177Z"
														fill="white"
														fill-opacity="0.35"
													/>
												</svg>
											</div>
										</foreignObject>
									</svg>
								</div>
							</>
						) : (
							<>
								{props.holder ? (
									<>
										<div className="item">
											<svg
												width="149"
												height="149"
												viewBox="0 0 103 103"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M102.5 0.5V102.5H0.5V0.5H9.83708H102.5Z" />
											</svg>
										</div>
									</>
								) : (
									<div className="flex-row">
										<div className="item" onClick={() => setSelected(props.name)}>
											<svg
												width="149"
												height="149"
												viewBox="0 0 103 103"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M102.5 0.5V102.5H0.5V0.5H9.83708H102.5Z" />

												<foreignObject height={100} width={103}>
													<div className="content flex-column" style={{ height: 103 }}>
														<p
															style={{
																position: "relative",
																marginTop: 5,
																marginLeft: 7.5,
																marginBottom: 5,
																fontSize: 10,
																color: "rgba(255, 255, 255, 0.6)",
															}}
														>
															{props.count}
														</p>

														<img style={{ margin: "0 auto", marginBottom: 5 }} width={70} src={props.img} />

                                                        <p style={{fontSize: 12, fontWeight: 300, margin: '0 auto'}}>{props.name}</p>
													</div>
												</foreignObject>
											</svg>
										</div>

										{selected == props.name && (
											<div className="options-box">
												<div style={{ justifyContent: "space-between", height: "100%" }} className="flex-column">
													<div style={{ padding: 20 }}>
														<div className="flex-row" style={{ justifyContent: "space-between" }}>
															<p style={{ fontSize: 10 }}>{props.item.weight} KG</p>

															<svg
																onClick={() => setSelected("")}
																className="cross"
																style={{ height: 16, width: 16 }}
																viewBox="0 0 1024 1024"
															>
																<path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
															</svg>
														</div>
														<p style={{ textTransform: "uppercase", fontSize: 20, marginBottom: 5 }}>
															{props.count} - {props.name}
														</p>

														<svg
															width="32"
															height="3"
															viewBox="0 0 32 3"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path d="M0 1.5H31.5" stroke="white" stroke-width="2" />
														</svg>

														<p style={{ textTransform: "uppercase", fontSize: 12, marginTop: 5, opacity: 0.8 }}>
															Un item avec une particularité tres cocasse, avec une utilité
														</p>
													</div>

													<div className="flex-row" style={{ height: 100, width: "100%" }}>
														<div className="button" onClick={() => onClick(props.name)}>
															<img
																style={{
																	height: 25,
																	width: 25,
																	marginBottom: 7.5,
																}}
																src="https://cdn.discordapp.com/attachments/749017234743099423/1022513133622923376/click-1263.png"
															/>
															Acheter
														</div>										
													</div>
												</div>
											</div>
										)}
									</div>
								)}
							</>
						)}
					</>
				)}
			</>
		);
	};

    return (
        <div id="items">
            <img className="background-items" src="https://cdn.discordapp.com/attachments/749017234743099423/1013871696563937374/unknown.png" />
            <header>
                <div style={{ alignItems: "center", justifyContent: "space-between", width: "100%" }} className="flex-row header">
                    <div className="flex-row">
                        <svg onClick={() => back()} style={{marginTop: 2.5}} className="backButton" width="200" height="50" viewBox="0 0 200 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="198" height="60" rx="30" stroke="white" stroke-opacity="0.16" stroke-width="2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.125 31C68.125 31.2486 68.0262 31.4871 67.8504 31.6629C67.6746 31.8387 67.4361 31.9375 67.1875 31.9375L45.0756 31.9375L50.9762 37.8362C51.1523 38.0122 51.2512 38.251 51.2512 38.5C51.2512 38.7489 51.1523 38.9877 50.9762 39.1637C50.8002 39.3397 50.5615 39.4386 50.3125 39.4386C50.0635 39.4386 49.8248 39.3397 49.6487 39.1637L42.1487 31.6637C42.0614 31.5766 41.9922 31.4732 41.9449 31.3593C41.8977 31.2454 41.8733 31.1233 41.8733 31C41.8733 30.8766 41.8977 30.7545 41.9449 30.6406C41.9922 30.5268 42.0614 30.4233 42.1487 30.3362L49.6488 22.8362C49.8248 22.6602 50.0635 22.5613 50.3125 22.5613C50.5615 22.5613 50.8002 22.6602 50.9762 22.8362C51.1523 23.0123 51.2512 23.251 51.2512 23.5C51.2512 23.7489 51.1523 23.9877 50.9762 24.1637L45.0756 30.0625L67.1875 30.0625C67.4361 30.0625 67.6746 30.1612 67.8504 30.3371C68.0262 30.5129 68.125 30.7513 68.125 31Z" fill="white"/>
                            <path d="M89.26 40V23.8H92.52C93.6 23.8 94.4933 23.9467 95.2 24.24C95.9067 24.52 96.4267 24.98 96.76 25.62C97.1067 26.2467 97.28 27.0733 97.28 28.1C97.28 28.7267 97.2133 29.3 97.08 29.82C96.9467 30.3267 96.7333 30.76 96.44 31.12C96.1467 31.4667 95.76 31.72 95.28 31.88L97.58 40H95.4L93.28 32.4H91.52V40H89.26ZM91.52 30.78H92.38C93.02 30.78 93.54 30.7 93.94 30.54C94.34 30.38 94.6333 30.1067 94.82 29.72C95.0067 29.3333 95.1 28.7933 95.1 28.1C95.1 27.1533 94.9267 26.4733 94.58 26.06C94.2333 25.6333 93.5467 25.42 92.52 25.42H91.52V30.78ZM99.6311 40V23.8H105.911V25.48H101.891V30.84H105.151V32.44H101.891V38.38H105.951V40H99.6311ZM109.556 40V25.48H106.816V23.8H114.476V25.48H111.816V40H109.556ZM120.177 40.18C119.084 40.18 118.211 39.9667 117.557 39.54C116.904 39.1133 116.437 38.5067 116.157 37.72C115.877 36.92 115.737 35.9867 115.737 34.92V28.78C115.737 27.7133 115.877 26.8 116.157 26.04C116.451 25.2667 116.917 24.68 117.557 24.28C118.211 23.8667 119.084 23.66 120.177 23.66C121.271 23.66 122.137 23.8667 122.777 24.28C123.417 24.6933 123.877 25.28 124.157 26.04C124.451 26.8 124.597 27.7133 124.597 28.78V34.94C124.597 35.9933 124.451 36.9133 124.157 37.7C123.877 38.4867 123.417 39.1 122.777 39.54C122.137 39.9667 121.271 40.18 120.177 40.18ZM120.177 38.4C120.777 38.4 121.231 38.28 121.537 38.04C121.844 37.7867 122.051 37.44 122.157 37C122.264 36.5467 122.317 36.02 122.317 35.42V28.32C122.317 27.72 122.264 27.2067 122.157 26.78C122.051 26.34 121.844 26.0067 121.537 25.78C121.231 25.54 120.777 25.42 120.177 25.42C119.577 25.42 119.117 25.54 118.797 25.78C118.491 26.0067 118.284 26.34 118.177 26.78C118.071 27.2067 118.017 27.72 118.017 28.32V35.42C118.017 36.02 118.071 36.5467 118.177 37C118.284 37.44 118.491 37.7867 118.797 38.04C119.117 38.28 119.577 38.4 120.177 38.4ZM130.999 40.18C129.825 40.18 128.925 39.9467 128.299 39.48C127.672 39.0133 127.245 38.36 127.019 37.52C126.792 36.6667 126.679 35.6733 126.679 34.54V23.8H128.839V34.64C128.839 35.3333 128.885 35.9667 128.979 36.54C129.072 37.1133 129.272 37.5667 129.579 37.9C129.899 38.2333 130.372 38.4 130.999 38.4C131.639 38.4 132.112 38.2333 132.419 37.9C132.725 37.5667 132.925 37.1133 133.019 36.54C133.112 35.9667 133.159 35.3333 133.159 34.64V23.8H135.299V34.54C135.299 35.6733 135.185 36.6667 134.959 37.52C134.732 38.36 134.305 39.0133 133.679 39.48C133.065 39.9467 132.172 40.18 130.999 40.18ZM137.678 40V23.8H140.938C142.018 23.8 142.911 23.9467 143.618 24.24C144.325 24.52 144.845 24.98 145.178 25.62C145.525 26.2467 145.698 27.0733 145.698 28.1C145.698 28.7267 145.631 29.3 145.498 29.82C145.365 30.3267 145.151 30.76 144.858 31.12C144.565 31.4667 144.178 31.72 143.698 31.88L145.998 40H143.818L141.698 32.4H139.938V40H137.678ZM139.938 30.78H140.798C141.438 30.78 141.958 30.7 142.358 30.54C142.758 30.38 143.051 30.1067 143.238 29.72C143.425 29.3333 143.518 28.7933 143.518 28.1C143.518 27.1533 143.345 26.4733 142.998 26.06C142.651 25.6333 141.965 25.42 140.938 25.42H139.938V30.78Z" fill="white"/>
                        </svg>

                        <svg style={{marginTop: -5}} width="107" height="60" viewBox="0 0 107 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.73 50V15.98H8.862V50H2.73ZM17.5304 50V20.558H12.1124V15.98H29.0804V20.558H23.7464V50H17.5304ZM32.1753 50V15.98H46.4553V20.348H38.3913V30.134H44.7333V34.46H38.3913V45.716H46.5393V50H32.1753ZM50.0561 50L50.6441 15.98H57.0701L61.9001 39.542L66.9401 15.98H73.1561L73.7861 50H69.1661L68.6621 26.354L63.8321 50H60.0941L55.1801 26.27L54.7181 50H50.0561ZM87.132 50.462C85.088 50.462 83.38 50.07 82.008 49.286C80.636 48.474 79.6 47.298 78.9 45.758C78.2 44.218 77.808 42.328 77.724 40.088L83.058 39.038C83.114 40.354 83.268 41.516 83.52 42.524C83.8 43.532 84.206 44.316 84.738 44.876C85.298 45.408 86.026 45.674 86.922 45.674C87.93 45.674 88.644 45.38 89.064 44.792C89.484 44.176 89.694 43.406 89.694 42.482C89.694 40.998 89.358 39.78 88.686 38.828C88.014 37.876 87.118 36.924 85.998 35.972L81.714 32.192C80.51 31.156 79.544 30.008 78.816 28.748C78.116 27.46 77.766 25.878 77.766 24.002C77.766 21.314 78.55 19.242 80.118 17.786C81.686 16.33 83.828 15.602 86.544 15.602C88.14 15.602 89.47 15.854 90.534 16.358C91.598 16.834 92.438 17.506 93.054 18.374C93.698 19.242 94.174 20.236 94.482 21.356C94.79 22.448 94.986 23.61 95.07 24.842L89.778 25.766C89.722 24.702 89.596 23.75 89.4 22.91C89.232 22.07 88.91 21.412 88.434 20.936C87.986 20.46 87.314 20.222 86.418 20.222C85.494 20.222 84.78 20.53 84.276 21.146C83.8 21.734 83.562 22.476 83.562 23.372C83.562 24.52 83.8 25.472 84.276 26.228C84.752 26.956 85.438 27.712 86.334 28.496L90.576 32.234C91.976 33.41 93.166 34.796 94.146 36.392C95.154 37.96 95.658 39.864 95.658 42.104C95.658 43.728 95.294 45.17 94.566 46.43C93.866 47.69 92.872 48.684 91.584 49.412C90.324 50.112 88.84 50.462 87.132 50.462Z" fill="white"/>
                            <path d="M0.945 74V61.85H3.96C4.69 61.85 5.27 61.985 5.7 62.255C6.14 62.515 6.46 62.895 6.66 63.395C6.86 63.895 6.96 64.5 6.96 65.21C6.96 65.85 6.845 66.405 6.615 66.875C6.395 67.345 6.065 67.71 5.625 67.97C5.185 68.22 4.635 68.345 3.975 68.345H2.64V74H0.945ZM2.64 67.13H3.42C3.91 67.13 4.295 67.075 4.575 66.965C4.855 66.855 5.055 66.665 5.175 66.395C5.295 66.115 5.355 65.725 5.355 65.225C5.355 64.645 5.31 64.2 5.22 63.89C5.14 63.58 4.965 63.365 4.695 63.245C4.425 63.125 4.005 63.065 3.435 63.065H2.64V67.13ZM11.257 74.135C10.437 74.135 9.78203 73.975 9.29203 73.655C8.80203 73.335 8.45203 72.88 8.24203 72.29C8.03203 71.69 7.92703 70.99 7.92703 70.19V65.585C7.92703 64.785 8.03203 64.1 8.24203 63.53C8.46203 62.95 8.81203 62.51 9.29203 62.21C9.78203 61.9 10.437 61.745 11.257 61.745C12.077 61.745 12.727 61.9 13.207 62.21C13.687 62.52 14.032 62.96 14.242 63.53C14.462 64.1 14.572 64.785 14.572 65.585V70.205C14.572 70.995 14.462 71.685 14.242 72.275C14.032 72.865 13.687 73.325 13.207 73.655C12.727 73.975 12.077 74.135 11.257 74.135ZM11.257 72.8C11.707 72.8 12.047 72.71 12.277 72.53C12.507 72.34 12.662 72.08 12.742 71.75C12.822 71.41 12.862 71.015 12.862 70.565V65.24C12.862 64.79 12.822 64.405 12.742 64.085C12.662 63.755 12.507 63.505 12.277 63.335C12.047 63.155 11.707 63.065 11.257 63.065C10.807 63.065 10.462 63.155 10.222 63.335C9.99203 63.505 9.83703 63.755 9.75703 64.085C9.67703 64.405 9.63703 64.79 9.63703 65.24V70.565C9.63703 71.015 9.67703 71.41 9.75703 71.75C9.83703 72.08 9.99203 72.34 10.222 72.53C10.462 72.71 10.807 72.8 11.257 72.8ZM19.103 74.135C18.403 74.135 17.818 73.985 17.348 73.685C16.888 73.385 16.538 72.97 16.298 72.44C16.058 71.91 15.918 71.295 15.878 70.595L17.378 70.19C17.408 70.62 17.473 71.035 17.573 71.435C17.683 71.835 17.858 72.165 18.098 72.425C18.338 72.675 18.673 72.8 19.103 72.8C19.543 72.8 19.873 72.68 20.093 72.44C20.323 72.19 20.438 71.835 20.438 71.375C20.438 70.825 20.313 70.385 20.063 70.055C19.813 69.715 19.498 69.375 19.118 69.035L17.078 67.235C16.678 66.885 16.383 66.505 16.193 66.095C16.003 65.675 15.908 65.16 15.908 64.55C15.908 63.66 16.163 62.97 16.673 62.48C17.183 61.99 17.878 61.745 18.758 61.745C19.238 61.745 19.658 61.81 20.018 61.94C20.388 62.06 20.693 62.25 20.933 62.51C21.183 62.77 21.378 63.1 21.518 63.5C21.668 63.89 21.768 64.35 21.818 64.88L20.378 65.27C20.348 64.87 20.288 64.505 20.198 64.175C20.108 63.835 19.948 63.565 19.718 63.365C19.498 63.155 19.178 63.05 18.758 63.05C18.338 63.05 18.008 63.165 17.768 63.395C17.538 63.615 17.423 63.945 17.423 64.385C17.423 64.755 17.483 65.06 17.603 65.3C17.733 65.54 17.938 65.785 18.218 66.035L20.273 67.835C20.733 68.235 21.138 68.715 21.488 69.275C21.838 69.825 22.013 70.48 22.013 71.24C22.013 71.84 21.888 72.36 21.638 72.8C21.388 73.23 21.043 73.56 20.603 73.79C20.173 74.02 19.673 74.135 19.103 74.135ZM26.1928 74.135C25.4928 74.135 24.9078 73.985 24.4378 73.685C23.9778 73.385 23.6278 72.97 23.3878 72.44C23.1478 71.91 23.0078 71.295 22.9678 70.595L24.4678 70.19C24.4978 70.62 24.5628 71.035 24.6628 71.435C24.7728 71.835 24.9478 72.165 25.1878 72.425C25.4278 72.675 25.7628 72.8 26.1928 72.8C26.6328 72.8 26.9628 72.68 27.1828 72.44C27.4128 72.19 27.5278 71.835 27.5278 71.375C27.5278 70.825 27.4028 70.385 27.1528 70.055C26.9028 69.715 26.5878 69.375 26.2078 69.035L24.1678 67.235C23.7678 66.885 23.4728 66.505 23.2828 66.095C23.0928 65.675 22.9978 65.16 22.9978 64.55C22.9978 63.66 23.2528 62.97 23.7628 62.48C24.2728 61.99 24.9678 61.745 25.8478 61.745C26.3278 61.745 26.7478 61.81 27.1078 61.94C27.4778 62.06 27.7828 62.25 28.0228 62.51C28.2728 62.77 28.4678 63.1 28.6078 63.5C28.7578 63.89 28.8578 64.35 28.9078 64.88L27.4678 65.27C27.4378 64.87 27.3778 64.505 27.2878 64.175C27.1978 63.835 27.0378 63.565 26.8078 63.365C26.5878 63.155 26.2678 63.05 25.8478 63.05C25.4278 63.05 25.0978 63.165 24.8578 63.395C24.6278 63.615 24.5128 63.945 24.5128 64.385C24.5128 64.755 24.5728 65.06 24.6928 65.3C24.8228 65.54 25.0278 65.785 25.3078 66.035L27.3628 67.835C27.8228 68.235 28.2278 68.715 28.5778 69.275C28.9278 69.825 29.1028 70.48 29.1028 71.24C29.1028 71.84 28.9778 72.36 28.7278 72.8C28.4778 73.23 28.1328 73.56 27.6928 73.79C27.2628 74.02 26.7628 74.135 26.1928 74.135ZM30.4177 74V61.85H35.1277V63.11H32.1127V67.13H34.5577V68.33H32.1127V72.785H35.1577V74H30.4177ZM30.7177 60.995L32.0077 58.37H33.6427L34.9477 60.995H33.7327L32.8177 59.18L31.9177 60.995H30.7177ZM36.5261 74V61.85H39.1661C40.0661 61.85 40.7761 61.99 41.2961 62.27C41.8261 62.54 42.2011 62.95 42.4211 63.5C42.6511 64.05 42.7661 64.735 42.7661 65.555V70.025C42.7661 70.885 42.6511 71.61 42.4211 72.2C42.2011 72.79 41.8361 73.24 41.3261 73.55C40.8261 73.85 40.1511 74 39.3011 74H36.5261ZM38.2211 72.785H39.1811C39.8011 72.785 40.2411 72.665 40.5011 72.425C40.7611 72.185 40.9161 71.835 40.9661 71.375C41.0261 70.915 41.0561 70.36 41.0561 69.71V65.765C41.0561 65.135 41.0161 64.625 40.9361 64.235C40.8561 63.845 40.6811 63.56 40.4111 63.38C40.1411 63.2 39.7161 63.11 39.1361 63.11H38.2211V72.785ZM44.4362 74V61.85H49.1462V63.11H46.1312V67.13H48.5762V68.33H46.1312V72.785H49.1762V74H44.4362ZM50.5446 74V61.85H52.9896C53.7996 61.85 54.4696 61.96 54.9996 62.18C55.5296 62.39 55.9196 62.735 56.1696 63.215C56.4296 63.685 56.5596 64.305 56.5596 65.075C56.5596 65.545 56.5096 65.975 56.4096 66.365C56.3096 66.745 56.1496 67.07 55.9296 67.34C55.7096 67.6 55.4196 67.79 55.0596 67.91L56.7846 74H55.1496L53.5596 68.3H52.2396V74H50.5446ZM52.2396 67.085H52.8846C53.3646 67.085 53.7546 67.025 54.0546 66.905C54.3546 66.785 54.5746 66.58 54.7146 66.29C54.8546 66 54.9246 65.595 54.9246 65.075C54.9246 64.365 54.7946 63.855 54.5346 63.545C54.2746 63.225 53.7596 63.065 52.9896 63.065H52.2396V67.085ZM64.8857 74.135C64.0057 74.135 63.3307 73.96 62.8607 73.61C62.3907 73.26 62.0707 72.77 61.9007 72.14C61.7307 71.5 61.6457 70.755 61.6457 69.905V61.85H63.2657V69.98C63.2657 70.5 63.3007 70.975 63.3707 71.405C63.4407 71.835 63.5907 72.175 63.8207 72.425C64.0607 72.675 64.4157 72.8 64.8857 72.8C65.3657 72.8 65.7207 72.675 65.9507 72.425C66.1807 72.175 66.3307 71.835 66.4007 71.405C66.4707 70.975 66.5057 70.5 66.5057 69.98V61.85H68.1107V69.905C68.1107 70.755 68.0257 71.5 67.8557 72.14C67.6857 72.77 67.3657 73.26 66.8957 73.61C66.4357 73.96 65.7657 74.135 64.8857 74.135ZM69.8952 74V61.85H71.0502L74.5002 69.92V61.85H75.9102V74H74.8302L71.3352 65.705V74H69.8952ZM81.3377 74V61.85H83.0027V74H81.3377ZM86.3034 74V63.11H84.2484V61.85H89.9934V63.11H87.9984V74H86.3034ZM91.1647 74V61.85H95.8747V63.11H92.8597V67.13H95.3047V68.33H92.8597V72.785H95.9047V74H91.1647ZM97.2431 74L97.4681 61.85H99.1331L101.278 71.705L103.438 61.85H105.088L105.313 74H103.948L103.813 65.18L101.758 74H100.798L98.7581 65.18L98.6231 74H97.2431Z" fill="white" fill-opacity="0.36"/>
                        </svg>

                        <svg style={{ margin: "0 30px 0 15px" }} width="2" height="58" viewBox="0 0 2 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="2" height="58" fill="white" fill-opacity="0.4"/>
                        </svg>

                        <div className="solde">
                            <span>SOLDE</span>
                            <p>{coins} COINS</p>
                        </div>
            
                        <svg style={{ margin: "0 10px" }} width="2" height="58" viewBox="0 0 2 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="2" height="58" fill="white" fill-opacity="0.4"/>
                        </svg>

                        <svg width="300" height="55" viewBox="0 0 300 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.54" x="1" y="1" width="298" height="63" rx="4" stroke="white" stroke-opacity="0.35" stroke-width="2"/>
                            <path d="M25.458 25.117C24.7127 25.117 24.132 24.961 23.716 24.649C23.3087 24.337 23.0227 23.9167 22.858 23.388C22.702 22.8593 22.624 22.27 22.624 21.62V17.902C22.624 17.1913 22.702 16.5717 22.858 16.043C23.0227 15.5143 23.3087 15.107 23.716 14.821C24.132 14.5263 24.7127 14.379 25.458 14.379C26.1167 14.379 26.6367 14.5003 27.018 14.743C27.408 14.9857 27.6853 15.3323 27.85 15.783C28.0233 16.2337 28.11 16.7753 28.11 17.408V18.24H26.719V17.499C26.719 17.109 26.6973 16.7667 26.654 16.472C26.6193 16.1687 26.5153 15.9347 26.342 15.77C26.1687 15.6053 25.8783 15.523 25.471 15.523C25.055 15.523 24.7517 15.614 24.561 15.796C24.3703 15.9693 24.2447 16.2207 24.184 16.55C24.132 16.8707 24.106 17.2477 24.106 17.681V21.854C24.106 22.3827 24.1493 22.803 24.236 23.115C24.3227 23.4183 24.4657 23.635 24.665 23.765C24.8643 23.895 25.133 23.96 25.471 23.96C25.8697 23.96 26.1557 23.8733 26.329 23.7C26.5023 23.518 26.6107 23.271 26.654 22.959C26.6973 22.647 26.719 22.283 26.719 21.867V21.087H28.11V21.867C28.11 22.5083 28.032 23.076 27.876 23.57C27.72 24.0553 27.4513 24.4367 27.07 24.714C26.6887 24.9827 26.1513 25.117 25.458 25.117ZM28.9374 25L31.1734 14.47H32.5904L34.8394 25H33.4484L32.9674 22.348H30.8224L30.3154 25H28.9374ZM31.0174 21.295H32.7724L31.8884 16.55L31.0174 21.295ZM36.6459 25V15.562H34.8649V14.47H39.8439V15.562H38.1149V25H36.6459ZM40.859 25V14.47H44.941V15.562H42.328V19.046H44.447V20.086H42.328V23.947H44.967V25H40.859ZM41.119 13.729L42.237 11.454H43.654L44.785 13.729H43.732L42.939 12.156L42.159 13.729H41.119ZM48.662 25.13C48.0033 25.13 47.4747 24.9913 47.076 24.714C46.686 24.428 46.4 24.0163 46.218 23.479C46.0447 22.9417 45.958 22.296 45.958 21.542V18.019C45.958 17.2477 46.036 16.5933 46.192 16.056C46.3567 15.51 46.6427 15.094 47.05 14.808C47.466 14.522 48.0423 14.379 48.779 14.379C49.4377 14.379 49.9663 14.4917 50.365 14.717C50.7723 14.9337 51.067 15.2717 51.249 15.731C51.431 16.1817 51.522 16.7537 51.522 17.447V17.837H50.144V17.512C50.144 17.0527 50.1137 16.68 50.053 16.394C49.9923 16.0993 49.8667 15.8827 49.676 15.744C49.494 15.5967 49.2037 15.523 48.805 15.523C48.3717 15.523 48.0553 15.6227 47.856 15.822C47.6653 16.0213 47.544 16.2943 47.492 16.641C47.4487 16.979 47.427 17.3647 47.427 17.798V21.698C47.427 22.2007 47.4617 22.621 47.531 22.959C47.609 23.297 47.752 23.5483 47.96 23.713C48.168 23.8777 48.4627 23.96 48.844 23.96C49.2253 23.96 49.52 23.869 49.728 23.687C49.936 23.505 50.079 23.2363 50.157 22.881C50.235 22.5257 50.274 22.0837 50.274 21.555V20.827H48.935V19.787H51.6V25H50.677L50.534 23.791C50.3953 24.181 50.1787 24.5017 49.884 24.753C49.5893 25.0043 49.182 25.13 48.662 25.13ZM55.801 25.117C55.0903 25.117 54.5227 24.9783 54.098 24.701C53.6733 24.4237 53.37 24.0293 53.188 23.518C53.006 22.998 52.915 22.3913 52.915 21.698V17.707C52.915 17.0137 53.006 16.42 53.188 15.926C53.3787 15.4233 53.682 15.042 54.098 14.782C54.5227 14.5133 55.0903 14.379 55.801 14.379C56.5117 14.379 57.075 14.5133 57.491 14.782C57.907 15.0507 58.206 15.432 58.388 15.926C58.5787 16.42 58.674 17.0137 58.674 17.707V21.711C58.674 22.3957 58.5787 22.9937 58.388 23.505C58.206 24.0163 57.907 24.415 57.491 24.701C57.075 24.9783 56.5117 25.117 55.801 25.117ZM55.801 23.96C56.191 23.96 56.4857 23.882 56.685 23.726C56.8843 23.5613 57.0187 23.336 57.088 23.05C57.1573 22.7553 57.192 22.413 57.192 22.023V17.408C57.192 17.018 57.1573 16.6843 57.088 16.407C57.0187 16.121 56.8843 15.9043 56.685 15.757C56.4857 15.601 56.191 15.523 55.801 15.523C55.411 15.523 55.112 15.601 54.904 15.757C54.7047 15.9043 54.5703 16.121 54.501 16.407C54.4317 16.6843 54.397 17.018 54.397 17.408V22.023C54.397 22.413 54.4317 22.7553 54.501 23.05C54.5703 23.336 54.7047 23.5613 54.904 23.726C55.112 23.882 55.411 23.96 55.801 23.96ZM60.1178 25V14.47H62.2368C62.9388 14.47 63.5195 14.5653 63.9788 14.756C64.4382 14.938 64.7762 15.237 64.9928 15.653C65.2182 16.0603 65.3308 16.5977 65.3308 17.265C65.3308 17.6723 65.2875 18.045 65.2008 18.383C65.1142 18.7123 64.9755 18.994 64.7848 19.228C64.5942 19.4533 64.3428 19.618 64.0308 19.722L65.5258 25H64.1088L62.7308 20.06H61.5868V25H60.1178ZM61.5868 19.007H62.1458C62.5618 19.007 62.8998 18.955 63.1598 18.851C63.4198 18.747 63.6105 18.5693 63.7318 18.318C63.8532 18.0667 63.9138 17.7157 63.9138 17.265C63.9138 16.6497 63.8012 16.2077 63.5758 15.939C63.3505 15.6617 62.9042 15.523 62.2368 15.523H61.5868V19.007ZM66.937 25V14.47H68.38V25H66.937ZM70.0836 25V14.47H74.1656V15.562H71.5526V19.046H73.6716V20.086H71.5526V23.947H74.1916V25H70.0836Z" fill="white" fill-opacity="0.4"/>
                            <path d="M25.04 49V34.48H22.3V32.8H29.96V34.48H27.3V49H25.04ZM35.6617 49.18C34.5684 49.18 33.6951 48.9667 33.0417 48.54C32.3884 48.1133 31.9217 47.5067 31.6417 46.72C31.3617 45.92 31.2217 44.9867 31.2217 43.92V37.78C31.2217 36.7133 31.3617 35.8 31.6417 35.04C31.9351 34.2667 32.4017 33.68 33.0417 33.28C33.6951 32.8667 34.5684 32.66 35.6617 32.66C36.7551 32.66 37.6217 32.8667 38.2617 33.28C38.9017 33.6933 39.3617 34.28 39.6417 35.04C39.9351 35.8 40.0817 36.7133 40.0817 37.78V43.94C40.0817 44.9933 39.9351 45.9133 39.6417 46.7C39.3617 47.4867 38.9017 48.1 38.2617 48.54C37.6217 48.9667 36.7551 49.18 35.6617 49.18ZM35.6617 47.4C36.2617 47.4 36.7151 47.28 37.0217 47.04C37.3284 46.7867 37.5351 46.44 37.6417 46C37.7484 45.5467 37.8017 45.02 37.8017 44.42V37.32C37.8017 36.72 37.7484 36.2067 37.6417 35.78C37.5351 35.34 37.3284 35.0067 37.0217 34.78C36.7151 34.54 36.2617 34.42 35.6617 34.42C35.0617 34.42 34.6017 34.54 34.2817 34.78C33.9751 35.0067 33.7684 35.34 33.6617 35.78C33.5551 36.2067 33.5017 36.72 33.5017 37.32V44.42C33.5017 45.02 33.5551 45.5467 33.6617 46C33.7684 46.44 33.9751 46.7867 34.2817 47.04C34.6017 47.28 35.0617 47.4 35.6617 47.4ZM46.483 49.18C45.3096 49.18 44.4096 48.9467 43.783 48.48C43.1563 48.0133 42.7296 47.36 42.503 46.52C42.2763 45.6667 42.163 44.6733 42.163 43.54V32.8H44.323V43.64C44.323 44.3333 44.3696 44.9667 44.463 45.54C44.5563 46.1133 44.7563 46.5667 45.063 46.9C45.383 47.2333 45.8563 47.4 46.483 47.4C47.123 47.4 47.5963 47.2333 47.903 46.9C48.2096 46.5667 48.4096 46.1133 48.503 45.54C48.5963 44.9667 48.643 44.3333 48.643 43.64V32.8H50.783V43.54C50.783 44.6733 50.6696 45.6667 50.443 46.52C50.2163 47.36 49.7896 48.0133 49.163 48.48C48.5496 48.9467 47.6563 49.18 46.483 49.18ZM56.9823 49.18C56.049 49.18 55.269 48.98 54.6423 48.58C54.029 48.18 53.5623 47.6267 53.2423 46.92C52.9223 46.2133 52.7357 45.3933 52.6823 44.46L54.6823 43.92C54.7223 44.4933 54.809 45.0467 54.9423 45.58C55.089 46.1133 55.3223 46.5533 55.6423 46.9C55.9623 47.2333 56.409 47.4 56.9823 47.4C57.569 47.4 58.009 47.24 58.3023 46.92C58.609 46.5867 58.7623 46.1133 58.7623 45.5C58.7623 44.7667 58.5957 44.18 58.2623 43.74C57.929 43.2867 57.509 42.8333 57.0023 42.38L54.2823 39.98C53.749 39.5133 53.3557 39.0067 53.1023 38.46C52.849 37.9 52.7223 37.2133 52.7223 36.4C52.7223 35.2133 53.0623 34.2933 53.7423 33.64C54.4223 32.9867 55.349 32.66 56.5223 32.66C57.1623 32.66 57.7223 32.7467 58.2023 32.92C58.6957 33.08 59.1023 33.3333 59.4223 33.68C59.7557 34.0267 60.0157 34.4667 60.2023 35C60.4023 35.52 60.5357 36.1333 60.6023 36.84L58.6823 37.36C58.6423 36.8267 58.5623 36.34 58.4423 35.9C58.3223 35.4467 58.109 35.0867 57.8023 34.82C57.509 34.54 57.0823 34.4 56.5223 34.4C55.9623 34.4 55.5223 34.5533 55.2023 34.86C54.8957 35.1533 54.7423 35.5933 54.7423 36.18C54.7423 36.6733 54.8223 37.08 54.9823 37.4C55.1557 37.72 55.429 38.0467 55.8023 38.38L58.5423 40.78C59.1557 41.3133 59.6957 41.9533 60.1623 42.7C60.629 43.4333 60.8623 44.3067 60.8623 45.32C60.8623 46.12 60.6957 46.8133 60.3623 47.4C60.029 47.9733 59.569 48.4133 58.9823 48.72C58.409 49.0267 57.7423 49.18 56.9823 49.18Z" fill="white"/>
                            <path d="M279.5 27L272 34.5L264.5 27L261.5 28.5L272 39L282.5 28.5L279.5 27Z" fill="white" fill-opacity="0.3"/>
                        </svg>
                    </div>
                </div>
            </header>

            <div style={{padding: 17.5, paddingBottom: 0, paddingTop: 5, display: "flex", flexDirection: "row"}}>
				{
					items && items[0] && (
						<Item count={items[0].count} img={items[0].img} name={items[0].name} item={{
							name: items[0].name,
							count: items[0].count,
							img: items[0].img
						}} />   
					)
				}

				{
					items && items[1] && (
						<Item count={items[1].count} img={items[1].img} name={items[1].name} item={{
							name: items[1].name,
							count: items[1].count,
							img: items[1].img
						}} />   
					)
				}

				{
					items && items[2] && (
						<Item count={items[2].count} img={items[2].img} name={items[2].name} item={{
							name: items[2].name,
							count: items[2].count,
							img: items[2].img
						}} />   
					)
				}

				{
					items && items[3] && (
						<Item count={items[3].count} img={items[3].img} name={items[3].name} item={{
							name: items[3].name,
							count: items[3].count,
							img: items[3].img
						}} />   
					)
				}

				{
					items && items[4] && (
						<Item count={items[4].count} img={items[4].img} name={items[4].name} item={{
							name: items[4].name,
							count: items[4].count,
							img: items[4].img
						}} />   
					)
				}

				{
					items && items[5] && (
						<Item count={items[5].count} img={items[5].img} name={items[5].name} item={{
							name: items[5].name,
							count: items[5].count,
							img: items[5].img
						}} />   
					)
				}
            </div>

			<div style={{padding: 17.5, paddingBottom: 0, paddingTop: 5, display: "flex", flexDirection: "row"}}>
			

				{
					items && items[6] && (
						<Item count={items[6].count} img={items[6].img} name={items[6].name} item={{
							name: items[6].name,
							count: items[6].count,
							img: items[6].img
						}} />   
					)
				}

				{
					items && items[7] && (
						<Item count={items[7].count} img={items[7].img} name={items[7].name} item={{
							name: items[7].name,
							count: items[7].count,
							img: items[7].img
						}} />   
					)
				}

				{
					items && items[8] && (
						<Item count={items[8].count} img={items[8].img} name={items[8].name} item={{
							name: items[8].name,
							count: items[8].count,
							img: items[8].img
						}} />   
					)
				}

				{
					items && items[9] && (
						<Item count={items[9].count} img={items[9].img} name={items[9].name} item={{
							name: items[9].name,
							count: items[9].count,
							img: items[9].img
						}} />   
					)
				}

				{
					items && items[5 + 5] && (
						<Item count={items[5 + 5].count} img={items[5 + 5].img} name={items[5 + 5].name} item={{
							name: items[5 + 5].name,
							count: items[5 + 5].count,
							img: items[5 + 5].img
						}} />   
					)
				}

				{
					items && items[6 + 5] && (
						<Item count={items[5 + 5].count} img={items[5 + 5].img} name={items[5 + 5].name} item={{
							name: items[5 + 5].name,
							count: items[5 + 5].count,
							img: items[5 + 5].img
						}} />   
					)
				}
            </div>

			<div style={{padding: 17.5, paddingBottom: 0, paddingTop: 5, display: "flex", flexDirection: "row"}}>

				{
					items && items[6+ 11] && (
						<Item count={items[6+ 11].count} img={items[6+ 11].img} name={items[6+ 11].name} item={{
							name: items[6+ 11].name,
							count: items[6+ 11].count,
							img: items[6+ 11].img
						}} />   
					)
				}
				
				{
					items && items[7+ 11] && (
						<Item count={items[7+ 11].count} img={items[7+ 11].img} name={items[7+ 11].name} item={{
							name: items[7+ 11].name,
							count: items[7+ 11].count,
							img: items[7+ 11].img
						}} />   
					)
				}
				
				{
					items && items[8+ 11] && (
						<Item count={items[8+ 11].count} img={items[8+ 11].img} name={items[8+ 11].name} item={{
							name: items[8+ 11].name,
							count: items[8+ 11].count,
							img: items[8+ 11].img
						}} />   
					)
				}
				
				{
					items && items[9+ 11] && (
						<Item count={items[9+ 11].count} img={items[9+ 11].img} name={items[9+ 11].name} item={{
							name: items[9+ 11].name,
							count: items[9+ 11].count,
							img: items[9+ 11].img
						}} />   
					)
				}
				
				{
					items && items[10+ 11] && (
						<Item count={items[10+ 11].count} img={items[10+ 11].img} name={items[10+ 11].name} item={{
							name: items[10+ 11].name,
							count: items[10+ 11].count,
							img: items[10+ 11].img
						}} />   
					)
				}
				
				{
					items && items[11+ 11] && (
						<Item count={items[11+ 11].count} img={items[11+ 11].img} name={items[11+ 11].name} item={{
							name: items[11+ 11].name,
							count: items[11+ 11].count,
							img: items[11+ 11].img
						}} />   
					)
				}
			</div>

			<div style={{padding: 17.5, paddingBottom: 0, paddingTop: 5, display: "flex", flexDirection: "row"}}>

				{
					items && items[6+ 22] && (
						<Item count={items[6+ 22].count} img={items[6+ 22].img} name={items[6+ 22].name} item={{
							name: items[6+ 22].name,
							count: items[6+ 22].count,
							img: items[6+ 22].img
						}} />   
					)
				}
				
				{
					items && items[7+ 22] && (
						<Item count={items[7+ 22].count} img={items[7+ 22].img} name={items[7+ 22].name} item={{
							name: items[7+ 22].name,
							count: items[7+ 22].count,
							img: items[7+ 22].img
						}} />   
					)
				}
				
				{
					items && items[8+ 22] && (
						<Item count={items[8+ 22].count} img={items[8+ 22].img} name={items[8+ 22].name} item={{
							name: items[8+ 22].name,
							count: items[8+ 22].count,
							img: items[8+ 22].img
						}} />   
					)
				}
				
				{
					items && items[9+ 22] && (
						<Item count={items[9+ 22].count} img={items[9+ 22].img} name={items[9+ 22].name} item={{
							name: items[9+ 22].name,
							count: items[9+ 22].count,
							img: items[9+ 22].img
						}} />   
					)
				}
				
				{
					items && items[10+ 22] && (
						<Item count={items[10+ 22].count} img={items[10+ 22].img} name={items[10+ 22].name} item={{
							name: items[10+ 22].name,
							count: items[10+ 22].count,
							img: items[10+ 22].img
						}} />   
					)
				}
				
				{
					items && items[11+ 22] && (
						<Item count={items[11+ 22].count} img={items[11+ 22].img} name={items[11+ 22].name} item={{
							name: items[11+ 22].name,
							count: items[11+ 22].count,
							img: items[11+ 22].img
						}} />   
					)
				}
			</div>
        </div>
    )
}

export default Items;