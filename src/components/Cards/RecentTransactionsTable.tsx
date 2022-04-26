import React from 'react';
import {Badge} from "primereact/badge";
import {Button} from "primereact/button";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

interface IProps {
	data: any
}

const RecentTransactionsTable = ({data}: IProps) => {
	const namesBodyTemplate = (rowData: any) => {
		return <div className="flex align-items-center">
			<img
				src={rowData.logo}
				onError={(e: any) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
				alt={`${rowData.name} logo`}
				height={30}
				width={30}
				className="mr-2"
			/>
			<span className="font-semibold capitalize">{rowData.name}</span>
		</div>
	}

	const periodBodyTemplate = (rowData: any) => {
		return <>
			<span className="mr-2">{rowData.date}</span>
			<Badge value={rowData.period}/>
		</>;
	}

	const chargesBodyTemplate = (rowData: any) => {
		return <>
			<span className="font-bold">- KES {rowData.charges}</span>
		</>
	}

	const moreBodyTemplate = (rowData: any) => {
		return <>
			<Button className="p-button-text" icon="pi pi-chevron-right"/>
		</>
	}

	return (
		<div>
			{/*@ts-ignore*/}
			<Panel header="Recent transactions" toggleable>
				<DataTable value={data} responsiveLayout="stack" size="small">
					<Column header="Name" body={namesBodyTemplate}/>
					<Column header="Date" body={periodBodyTemplate}/>
					<Column header="Charges" body={chargesBodyTemplate}/>
					<Column header="" body={moreBodyTemplate}/>
				</DataTable>
			</Panel>
		</div>
	);
};

export default RecentTransactionsTable;
