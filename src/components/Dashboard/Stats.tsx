import React from 'react';
import {Card} from "primereact/card";

const Stats = () => {
	return (
				<div className="grid">
					<div className="col-12 md:col-6 lg:col-3">
						{/*@ts-ignore*/}
						<Card>
							<div className="flex justify-content-between mb-1">
								<div>
									<span className="block text-500 font-medium mb-3">balance</span>
									<div className="text-900 font-medium text-lg">kes 34,290.33</div>
								</div>
								<div className="flex align-items-center justify-content-center bg-blue-100 border-round"
								     style={{width: '2.5rem', height: '2.5rem'}}>
									<i className="pi pi-wallet text-blue-500 text-xl"/>
								</div>
							</div>
						</Card>
					</div>
					<div className="col-12 md:col-6 lg:col-3">
						{/*@ts-ignore*/}
						<Card>
							<div className="flex justify-content-between mb-1">
								<div>
									<span className="block text-500 font-medium mb-3">income</span>
									<div className="text-900 font-medium text-lg">kes 21,450</div>
								</div>
								<div className="flex align-items-center justify-content-center bg-orange-100 border-round"
								     style={{width: '2.5rem', height: '2.5rem'}}>
									<i className="pi pi-map-marker text-orange-500 text-xl"/>
								</div>
							</div>
						</Card>
					</div>
					<div className="col-12 md`:col-6 lg:col-3">
						{/*@ts-ignore*/}
						<Card>
							<div className="flex justify-content-between mb-1">
								<div>
									<span className="block text-500 font-medium mb-3">savings</span>
									<div className="text-900 font-medium text-lg">kes 18,441.21</div>
								</div>
								<div className="flex align-items-center justify-content-center bg-cyan-100 border-round"
								     style={{width: '2.5rem', height: '2.5rem'}}>
									<i className="pi pi-inbox text-cyan-500 text-xl"/>
								</div>
							</div>
						</Card>
					</div>
					<div className="col-12 md:col-6 lg:col-3">
						{/*@ts-ignore*/}
						<Card>
							<div className="flex justify-content-between mb-1">
								<div>
									<span className="block text-500 font-medium mb-3">expenses</span>
									<div className="text-900 font-medium text-lg">kes 11,234.12</div>
								</div>
								<div className="flex align-items-center justify-content-center bg-purple-100 border-round"
								     style={{width: '2.5rem', height: '2.5rem'}}>
									<i className="pi pi-comment text-purple-500 text-xl"/>
								</div>
							</div>
						</Card>
					</div>
				</div>
	);
};

export default Stats;
