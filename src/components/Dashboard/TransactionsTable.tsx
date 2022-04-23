import React, {useRef, useState} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {productsService} from "../../mocks/products-service";
import {Card} from 'primereact/card';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

const columns = [
	{field: 'code', header: 'Code', sortable: true},
	{field: 'name', header: 'Name', sortable: true},
	{field: 'category', header: 'Category'},
	{field: 'quantity', header: 'Quantity'}
];

const TransactionsTable = () => {
	const dynamicColumns = columns.map((col, i) => {
		return <Column key={col.field} field={col.field} header={col.header} sortable={col.sortable}/>;
	});

	const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text"/>;
	const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text"/>;

	const renderHeader1 = () => {
		return (
			<div className="flex justify-content-end">
				<span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText placeholder="Keyword Search" />
                </span>
			</div>
		)
	}

	const header = renderHeader1();

	return (
		<div className="mt-3">
			{/*@ts-ignore*/}
			<Card title="Transaction history">
				<DataTable
					value={productsService}
					paginator
					responsiveLayout="stack"
					paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
					currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
					rows={10}
					rowsPerPageOptions={[10, 20, 50]}
					paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
					selectionMode="single"
					dataKey="id"
					header={header}
				>
					{dynamicColumns}
				</DataTable>
			</Card>
		</div>
	);
}

export default TransactionsTable
