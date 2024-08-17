import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Hud from "./apps/hud";
import Main from "./main/main";

import "./app.scss";
import CarDealer from "./apps/cardealer";
import Context from "./apps/context";
import Menu from "./apps/menu";
import Separator from "./apps/separator";
import InteractionMenu from "./apps/interaction";
import Inventory from "./apps/inventory";
import Selector from "./apps/selector";
import Ped from "./apps/ped";
import Character from "./apps/character";
import Competences from "./apps/competences";
import Daily from "./apps/daily";
import Realisations from "./apps/realisation";
import Jobs from "./apps/jobs";
import Gasolina from "./apps/gasolina";
import Items from "./apps/items";
import Store from "./apps/store";

const App: React.FC = () => {
	const history = useHistory();
	
	return (
		<React.Fragment>
			<div style={{ position: "absolute", height: "100%", width: "100%", zIndex: 99 }}>
				<Switch>
					<Route path="/main" component={Main} />
					<Route path="/cardealer" component={CarDealer} />
					<Route path="/context" component={Context} />
					<Route path="/store" component={Store} />
					<Route path="/menu" component={Menu} />
					<Route path="/separator" component={Separator} />
					<Route path="/interaction" component={InteractionMenu} />
					<Route path="/inventory" component={Inventory} />
					<Route path="/ped" component={Ped} />
					<Route path="/selector" component={Selector} />
					<Route path="/character" component={Character} />
					<Route path="/competences" component={Competences} />
					<Route path="/daily" component={Daily} />
					<Route path="/realisations" component={Realisations} />
					<Route path="/jobs" component={Jobs} />
					<Route path="/gasolina" component={Gasolina} />
					<Route path="/items" component={Items} />
				</Switch>
			</div>

			<Hud />
		</React.Fragment>
	);
};

export default App;
