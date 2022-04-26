import React, {useState} from 'react';
import {Button} from "primereact/button";
import {Dropdown} from 'primereact/dropdown';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import {Card} from 'primereact/card';
import {cardsService} from "../../mocks/cards-service";
import {Badge} from 'primereact/badge';
import {Toolbar} from "primereact/toolbar";
import CardDetails from "./CardDetails";

const ListCards = () => {
	const [cards, setCards] = useState(cardsService);
	const [layout, setLayout] = useState('list');
	const [sortKey, setSortKey] = useState(null);
	const [sortOrder, setSortOrder] = useState<number | undefined | null>(null);
	const [sortField, setSortField] = useState(null);
	const sortOptions = [
		{label: 'active', value: '!price'},
		{label: 'inactive', value: 'price'},
	];
	const [showDetails, setShowDetails] = useState<boolean>(false);

	const onSortChange = (event: any) => {
		const value = event.value;

		if (value.indexOf('!') === 0) {
			setSortOrder(-1);
			setSortField(value.substring(1, value.length));
			setSortKey(value);
		} else {
			setSortOrder(1);
			setSortField(value);
			setSortKey(value);
		}
	}

	const renderListItem = (data: any) => {
		return (
			<div className="col-12">
				{/*@ts-ignore*/}
				<Card className="product-list-item shadow-none">
					<div className="flex align-items-center justify-content-between">
						<div className="flex align-items-center">
							<div className="mr-3">
								<p className="font-bold text-lg capitalize">{data.name}</p>
								<p className="uppercase text-sm font-semibold">
									<i className="pi pi-circle-fill mr-2" style={{fontSize: ".5rem"}}/>
									{data.active ? "active" : "inactive"}</p>
								<p>issued access - <Badge value={data.issuedAccess.length}/></p>
							</div>
							<img
								src={data.cardImage}
								onError={(e: any) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
								alt={data.name}
								height={100}
							/>
						</div>
						<div>
							<Button icon="pi pi-angle-right" label="view details" className="p-button-text"
							        onClick={() => setShowDetails(true)}/>
						</div>
					</div>
				</Card>
			</div>
		);
	}

	const renderGridItem = (data: any) => {
		const leftContents = (
			<Badge
				className="uppercase text-sm font-semibold"
				value={data.active ? "active" : "inactive"}/>
		);

		const rightContents = (
			<>
				<Button icon="pi pi-ellipsis-h" className="p-button-text p-button-sm"/>
			</>
		)

		return (
			<div className="col-12 md:col-3">
				{/*@ts-ignore*/}
				<Card className="product-grid-item">
					<div className="header">
						<Toolbar className="bg-transparent border-none p-0" left={leftContents} right={rightContents}/>
					</div>
					<div className="body text-center my-3">
						<p className="font-bold text-lg capitalize">{data.name}</p>
						<p>issued access - <Badge value={data.issuedAccess.length}/></p>
						<img
							src={data.cardImage}
							onError={(e: any) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
							alt={data.name}
							height={120}
						/>
					</div>
					<div className="footer text-center">
						<Button
							icon="pi pi-angle-right" label="view details" className="p-button-text"
							onClick={() => setShowDetails(true)}/>
					</div>
				</Card>
			</div>
		);
	}

	const itemTemplate = (product: any, layout: any) => {
		if (!product) {
			return;
		}

		if (layout === 'list')
			return renderListItem(product);
		else if (layout === 'grid')
			return renderGridItem(product);
	}

	const renderHeader = () => {
		return (
			<div className="grid grid-nogutter">
				<div className="col-6" style={{textAlign: 'left'}}>
					<Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort by status"
					          onChange={onSortChange}/>
				</div>
				<div className="col-6" style={{textAlign: 'right'}}>
					<DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)}/>
				</div>
			</div>
		);
	}

	const header = renderHeader();

	return (
		<div>
			{/*@ts-ignore*/}
			<Card>
				{/*@ts-ignore*/}
				<DataView value={cards} layout={layout} header={header}
				          itemTemplate={itemTemplate} paginator rows={9}
				          sortOrder={sortOrder} sortField={sortField}/>
				<CardDetails isOpen={showDetails} handleCancel={() => setShowDetails(false)} card={cards[0]}/>
			</Card>
		</div>
	);
}

export default ListCards;
