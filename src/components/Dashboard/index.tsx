import React from 'react'
import SideBar from "../SideBar";
import Header from '../TopNav';
import '../global.scss'
import './styles.scss'
import Stats from "./Stats";
import MyCards from "./MyCards";
import Transfers from './Transfers';
import FinancesChart from "./FinancesChart";
import TransactionsTable from './TransactionsTable';
import PageHeader from "../PageHeader";

const DashboardWrapper = () => {
	return (
		<div className="dashboard main surface-ground">
			<SideBar/>
			<div className="content">
				<Header/>
				<PageHeader title="dashboard"/>
				<div className="grid m-3">
					<div className="col-8">
						<Stats/>
						<FinancesChart/>
						<TransactionsTable/>
					</div>
					<div className="col-4">
						<MyCards/>
						<Transfers/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardWrapper
