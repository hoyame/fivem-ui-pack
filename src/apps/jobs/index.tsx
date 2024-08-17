import React, { useEffect, useState } from "react";
import bidon from "./icons/bidon.png";
import bus from "./icons/bus.png";
import camion from "./icons/camion.png";
import carre from "./icons/carre.png";
import carteb from "./icons/carteb.png";
import cookie from "./icons/cookie.png";
import peche from "./icons/peche.png";
import priseimg from "./icons/prise-img.png";
import prise from "./icons/prise.png";
import sapin from "./icons/sapin.png";
import taxi from "./icons/taxi.png";
import taxi2 from "./icons/taxi2.png";

import "./style.scss";

interface IJob {
    icon?: string;
    name?: string;
	description?: string;
    salaire?: number;
}

const Jobs = () => {
    const [jobList, setJobList] = useState<IJob[]>([
		{
		  name: 'Electricien',
		  description: "En tant qu'électricien, vous serez responsable de l'installation, de la maintenance et de la réparation des systèmes électriques dans divers bâtiments et infrastructures. Vous devrez travailler en équipe avec d'autres professionnels et respecter les normes de sécurité et de code.",
		  icon: prise,
		  salaire: 2
		},
		{
		  name: 'Chauffeur de bus',
		  description: "En tant que chauffeur de bus, vous serez responsable du transport des passagers en toute sécurité et dans les délais. Vous devrez conduire un bus de taille importante et gérer les horaires et les itinéraires. Vous devrez également veiller à la propreté et à l'entretien du véhicule.",
		  icon: bus,
		  salaire: 2
		},
		{
		  name: 'Chauffeur de camion',
		  description: "En tant que chauffeur de camion, vous serez responsable du transport de marchandises en toute sécurité et dans les délais. Vous devrez conduire un camion de grande taille et gérer les charges et les itinéraires. Vous devrez également veiller à la propreté et à l'entretien du véhicule.",
		  icon: camion,
		  salaire: 3
		},
		{
		  name: 'Cuisinier',
		  description: "En tant que cuisinier, vous serez responsable de la préparation et de la cuisson de plats délicieux et savoureux. Vous devrez travailler en équipe avec d'autres cuisiniers et respecter les recettes et les normes de qualité. Vous devrez également veiller à la propreté et à l'hygiène de la cuisine.",
		  icon: cookie,
		  salaire: 2
		},
		{
		  name: 'Pêcheur',
		  description: "En tant que pêcheur, vous serez responsable de la pêche de poissons et de crustacés dans des eaux naturelles ou artificielles. Vous devrez travailler en équipe avec d'autres pêcheurs et respecter les quotas et les réglementations. Vous devrez également veiller à la sécurité sur le bateau.",
		  icon: peche,
		  salaire: 1
		},
		{
		  name: 'Décorateur',
		  description: "En tant que décorateur, vous serez responsable de la conception et de la mise en œuvre de décors intérieurs et extérieurs pour des clients résidentiels et commerciaux. Vous devrez travailler en équipe avec d'autres professionnels et respecter les budgets et les échéances. Vous devrez également veiller à la qualité et à l'esthétique des décors.",
		  icon: sapin,
		  salaire: 2
		},
		{
		  name: 'Chauffeur de taxi',
		  description: "En tant que chauffeur de taxi, vous serez responsable du transport des passagers en toute sécurité et dans les délais. Vous devrez conduire un véhicule de taille moyenne et gérer les horaires et les itinéraires. Vous devrez également veiller à la propreté et à l'entretien du véhicule.",
		  icon: taxi,
		  salaire: 2
		},
	]);

    const [selected, setSelected] = useState<IJob>({
		name: 'Electricien',
		description: "En tant qu'électricien, vous serez responsable de l'installation, de la maintenance et de la réparation des systèmes électriques dans divers bâtiments et infrastructures. Vous devrez travailler en équipe avec d'autres professionnels et respecter les normes de sécurité et de code.",
		icon: prise,
		salaire: 2
	});

	const itineraire = (data: any) => {
	
	};

    const JobItem = (props: IJob) => {
        return (
            <div className={props.name == selected.name ? "item active" : "item"} onClick={() => setSelected(props)}>
                <div className="icon">
                    <img src={props.icon} alt="" />
                </div>
                <div className="infos">
                    <p className="titreInfo">{props.name}</p>
                    <p className="subInfo">
                        Salaire : 
                        { props.salaire == 1 && <span style={{marginLeft: 4}} className="f">faible</span> }
                        { props.salaire == 2 && <span style={{marginLeft: 4}} className="m">moyen</span> }
                        { props.salaire == 3 && <span style={{marginLeft: 4}} className="h">haut</span> }
                    </p>
                </div>
            </div>
        )
    }

	return (
		<div id="jobs">
			<div id="menuToggle"></div>
			<div className="left">
				<div className="menu" id="menuScroll">
					{
                        jobList.map((v, k) => {
                            return (
								<JobItem key={k} {...v} />
							)
                        })
                    }
				</div>
			</div>
			<div className="right">
				<div className="display">
					<div className="tabInfo">
						<h1 className="jobName">{selected.name}</h1>
						<p className="jobDesc">
							{selected.description}
						</p>
						<hr />
						<div className="bottom">
							<p>Trouver un emploi</p>
							<div onClick={() => itineraire(selected)} className="btnJob">Itinéraire vers le travail</div>
						</div>
					</div>
					<div className="pub">
						<div className="flex-row" style={{
							marginBottom: 7.5,
							alignItems: "center"
						}}>
							<img style={{height: 25, marginRight: 12.5}} src={carteb} alt="" />
							<h2 style={{fontWeight: 300}}>Vous voulez gagner plus</h2>
						</div>
						<p className="descPub">
							Essayer des alternatives:
							<br />
							Organisations, évènements, activités et plus encore
						</p>
					</div>
				</div>
				<img className="image-prisa" src={priseimg} alt="" />
			</div>
		</div>
	);
};

export default Jobs;
