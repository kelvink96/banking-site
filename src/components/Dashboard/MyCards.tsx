import React from 'react';
import {Card} from "primereact/card";
import {Image} from 'primereact/image';
import CreditCardImg from '../../assets/credit-card.png'
import {Divider} from "primereact/divider";
import {Button} from "primereact/button";
import {Panel} from "primereact/panel";

const MyCards = () => {
	return (
		<div>
			{/*@ts-ignore*/}
			<Card title="My cards" className="mb-3">
				<div className="text-center mb-3">
					<Image src={CreditCardImg} preview={true} alt="my credit card image" width="250"/>
				</div>
				{/*@ts-ignore*/}
				<Card title="Your balance" className="shadow-1">
					<div className="flex justify-content-between align-items-center">
						<h3 className="my-0">kes 34,290.33</h3>
						<div className="text-green-500">
							<i className="pi pi-arrow-up mr-1"/>
							<span>9.14%</span>
						</div>
						<div className="text-pink-500">
							<i className="pi pi-arrow-down mr-1"/>
							<span>8.39%</span>
						</div>
					</div>
					<Divider/>
					<div className="flex justify-content-between align-items-center">
						<div>
							<p className="mt-0">Currency</p>
							<p className="font-bold mb-0">USD/US dollar</p>
						</div>
						<div>
							<p className="mt-0">Status</p>
							<p className="font-bold mb-0">Active</p>
						</div>
					</div>
				</Card>
				<Button icon="pi pi-plus" label="add new card" style={{width: "100%"}} className="mt-3"/>
			</Card>
		</div>
	);
};

export default MyCards;
