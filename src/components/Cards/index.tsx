import React from 'react';
import SideBar from "../SideBar";
import Header from "../TopNav";
import PageHeader from "../PageHeader";
import "./styles.scss"
import {cardsService} from "../../mocks/cards-service";
import ListCards from "./ListCards";
import "./styles.scss"

const CardsWrapper = () => {
	const data = cardsService[0];

	return (
		<div className="dashboard main surface-ground">
			<SideBar/>
			<div className="content">
				<Header/>
				<PageHeader title="cards list"/>
				<div className="p-3">
					<ListCards/>
				</div>
			</div>
		</div>
	);
};

export default CardsWrapper;
