import React from 'react';
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import "./styles.scss";

interface IProps {
	title: string
}

const PageHeader = ({title}: IProps) => {
	return (
		<div>
			{/*@ts-ignore*/}
			<Card className="shadow-none border-noround">
				<div className="flex align-items-center justify-content-between">
					<h2 className="my-0">{title}</h2>
					<div>
						<Button icon="pi pi-search" className="p-button-text"/>
						<Button icon="pi pi-info-circle" className="p-button-text mx-2"/>
						<Button icon="pi pi-ellipsis-h" className="p-button-text"/>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default PageHeader;
