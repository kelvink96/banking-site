import React from 'react';
import {AvatarGroup} from "primereact/avatargroup";
import {Avatar} from "primereact/avatar";
import {Button} from 'primereact/button';
import {InputMask} from "primereact/inputmask";
import {Panel} from "primereact/panel";
import {Card} from "primereact/card";

const Transfers = () => {
	return (
		<div>
			{/*@ts-ignore*/}
			<Card title="Quick transfer">
				<div className="flex justify-content-between align-items-center mb-3">
					{/*@ts-ignore*/}
					<AvatarGroup>
						<Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
						        size="large" shape="circle"/>
						<Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
						        size="large" shape="circle"/>
						<Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
						        size="large" shape="circle"/>
						<Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
						        size="large" shape="circle"/>
						<Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
						        size="large" shape="circle"/>
						<Avatar label="+2" shape="circle" size="large" style={{backgroundColor: '#9c27b0', color: '#ffffff'}}/>
					</AvatarGroup>
					<Button icon="pi pi-angle-right" className="p-button-text"/>
				</div>
				<div className="field flex flex-column">
					<label htmlFor="cardNumber" className="mr-2 mb-3">card number</label>
					<InputMask id="cardNumber" mask="9999 9999 9999 9999" placeholder="1234 5678 9810 1234"/>
				</div>
				<div className="flex justify-content-between">
					<Button icon="pi pi-send" label="Send money" style={{width: "100%"}} className="mr-1"/>
					<Button icon="pi pi-pencil" label="Save as draft" style={{width: "100%"}} className="p-button-text ml-1"/>
				</div>
			</Card>
		</div>
	);
};

export default Transfers;
