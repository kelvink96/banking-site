import React from 'react';
import {Sidebar} from "primereact/sidebar";
import {Button} from 'primereact/button';
import {Divider} from 'primereact/divider';
import {ProgressBar} from "primereact/progressbar";
import {Card} from "primereact/card";
import IssuedAccessTable from "./IssuedAccessTable";
import RecentTransactionsTable from "./RecentTransactionsTable";

interface IProps {
	isOpen: boolean
	handleCancel: () => void
	card: any
}

const CardDetails = ({isOpen, handleCancel, card}: IProps) => {
	return (
		<div>
			{/*@ts-ignore*/}
			<Sidebar
				visible={isOpen}
				position="right"
				modal={true}
				onHide={handleCancel}
				style={{width: 720}}
			>
				<div className="flex sidebar-header justify-content-between align-items-center mb-3">
					<h2 className="my-0 capitalize">
						<i className="pi pi-credit-card mr-2" style={{fontSize: "1.25rem"}}/>
						{card.name}
					</h2>
					<Button icon="pi pi-ellipsis-h" label="manage"/>
				</div>
				<div className="sidebar-body">
					<div className="flex align-items-center">
						<div>
							<p className="my-1">card number</p>
							<p className="my-1">{card.creditCardNo} <i className="pi pi-copy"/></p>
						</div>
						<Divider layout="vertical"/>
						<div>
							<p className="my-1">expiry date</p>
							<p className="my-1">{card.csvExpDate}</p>
						</div>
						<Divider layout="vertical"/>
						<div>
							<p className="my-1">csv</p>
							<p className="my-1">{card.csvCode} <i className="pi pi-eye"/></p>
						</div>
						<Divider layout="vertical"/>
						<div>
							<p className="my-1">status</p>
							<p className="my-1">{card.status}</p>
						</div>
					</div>
					<Divider/>
					<div className="grid">
						<div className="col-6">
							{/*@ts-ignore*/}
							<Card title="spending limit" className="shadow-none border-none">
								<p>daily transaction limit</p>
								<ProgressBar value={19} showValue={false} style={{height: ".75rem"}}/>
								<div className="flex justify-content-between mt-3">
									<p className="my-0 text-sm">KES 191 spent of KES 200,000.00</p>
									<p className="my-0 text-sm">19%</p>
								</div>
							</Card>
						</div>
						<div className="col-6">
							{/*@ts-ignore*/}
							<Card className="bg-gray-100 shadow-none">
								<p>estimate amount spent this month: </p>
								<h4>KES 321,000.00</h4>
							</Card>
						</div>
					</div>
					<Divider/>
					<IssuedAccessTable data={card.issuedAccess}/>
					<Divider/>
					<RecentTransactionsTable data={card.recentTransactions}/>
				</div>
			</Sidebar>
		</div>
	);
};

export default CardDetails;
