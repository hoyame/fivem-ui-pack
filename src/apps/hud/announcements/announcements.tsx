import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./announcements.scss";

interface INotification {
	id: number;
	title: string;
	message: string;
	timeout: number;
	advanced?: boolean;
	url?: string;
	dark?: boolean;
}

interface INotif {
	inUI?: boolean;
}

const Announcements = (props: INotif) => {
	const [state, setState] = useState<INotification[]>([
		{
			id: 1,
			title: "Sheesh",
			message: "Wsh eiiube 1",
			timeout: 1000000,
		},
		{
			id: 2,
			title: "Sheesh",
			message: "Wsh eiiube 2",
			timeout: 1000000,
		},
	]);

	const onMessage = (event: any) => {
		if (event.data.type == "announcement") {
			if (event.data?.data?.hide == true) {
				setState(state => state.filter(n => n.id != event.data.data.id));
				return;
			}

			const announcement = event.data.data as INotification;
			if (!!announcement) {
				setState(state => [...state, announcement]);
				setTimeout(() => setState(state => state.filter(n => n.id !== announcement.id)), announcement.timeout - 600);
			}
		}
	};

	React.useEffect(() => {
		window.addEventListener("message", onMessage);
		return () => window.removeEventListener("message", onMessage);
	});

	const parseText = (text: string) => {
		const escaped = text
			.replace(/\\/g, "\\\\") // first replace the escape character
			.replace(/[*#[\]_|`]/g, x => "\\" + x) // then escape any special characters
			.replace(/---/g, "\\-\\-\\-") // hyphens only if it's 3 or more
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;");

		return escaped
			.replaceAll("~n~", "")
			.replaceAll("~r~", '</span><span class="color-red">')
			.replaceAll("~g~", '</span><span class="color-green">')
			.replaceAll("~b~", "")
			.replaceAll("~y~", "")
			.replaceAll("~s~", "")
			.replaceAll("VelocityRP", "")
			.replaceAll("~w~", '</span><span class="color-white">')
			.replace("</span>", "");
	};

	const parseTitle = (text: string) => {
		const escaped = text
			.replace(/\\/g, "\\\\") // first replace the escape character
			.replace(/[*#[\]_|`]/g, x => "\\" + x) // then escape any special characters
			.replace(/---/g, "\\-\\-\\-") // hyphens only if it's 3 or more
			.replace(/&/g, "")
			.replace(/</g, "")
			.replace(/>/g, "");

		return escaped
			.replaceAll("~n~", "")
			.replaceAll("~r~", "")
			.replaceAll("VelocityRP", "")
			.replaceAll("~s~", "")
			.replaceAll("~g~", "")
			.replaceAll("~b~", "")
			.replaceAll("~y~", "")
			.replaceAll("~w~", "")
			.replace("</span>", "");
	};

	return (
		<div className={"announcements-container"}>
			<TransitionGroup>
				{state.map(announcement => (
					<CSSTransition key={announcement.id} classNames="announcement" timeout={300}>
						<div className={announcement.dark ? "announcement dark" : "announcement light"}>
							{announcement.advanced && !props.inUI && (
								<>
									<div className="announcement-header">
										<img
											className="banner"
											src={
												announcement.url
													? announcement.url
													: "https://cdn.discordapp.com/attachments/857379508747239425/969621675698180164/unknown.png"
											}
										/>
									</div>
								</>
							)}

							<div className={!!announcement.advanced ? "content advanced-announcement" : "content"}>
								<div className="icon">
									<svg
										className="svg"
										width="17.5"
										height="17.5"
										viewBox="0 0 16 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.95605 18.5928C8.11426 18.5928 8.34277 18.5312 8.57129 18.417C13.6074 15.8242 15.2773 14.4619 15.2773 11.3066V4.77637C15.2773 3.73926 14.873 3.36133 14.0029 3.00098C13.0361 2.59668 9.81934 1.46289 8.87891 1.14648C8.58887 1.05859 8.26367 0.99707 7.95605 0.99707C7.65723 0.99707 7.33203 1.05859 7.04199 1.14648C6.09277 1.44531 2.87598 2.60547 1.91797 3.00098C1.04785 3.35254 0.643555 3.73926 0.643555 4.77637V11.3066C0.643555 14.4619 2.38379 15.7012 7.34961 18.417C7.57812 18.54 7.80664 18.5928 7.95605 18.5928ZM6.98047 13.7412C6.64648 13.7412 6.37402 13.6006 6.12793 13.2842L3.97461 10.6738C3.81641 10.4717 3.7373 10.2607 3.7373 10.041C3.7373 9.58398 4.09766 9.21484 4.5459 9.21484C4.82715 9.21484 5.03809 9.32031 5.2666 9.60156L6.9541 11.7373L10.5752 5.94531C10.7686 5.6377 11.0146 5.47949 11.2959 5.47949C11.7354 5.47949 12.1484 5.78711 12.1484 6.25293C12.1484 6.45508 12.043 6.6748 11.9199 6.87695L7.79785 13.2754C7.5957 13.583 7.31445 13.7412 6.98047 13.7412Z"
											fill="#43ef01"
										/>
									</svg>
								</div>

								<div>
									<p className="title">Annonce</p>

									<p className="msg" dangerouslySetInnerHTML={{ __html: parseText(announcement.message) }}></p>
								</div>
							</div>
							{/* <div className="time-bar" style={{ animationDuration: announcement.timeout + "ms" }}></div> */}
						</div>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default Announcements;
