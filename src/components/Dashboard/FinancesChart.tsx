import React, {useState} from 'react';
import {Chart} from 'primereact/chart';
import {Panel} from "primereact/panel";
import {Dropdown} from "primereact/dropdown";
import ExpensesChart from "./ExpensesChart";
import {Card} from "primereact/card";

const chartOptions = [
	{name: 'Monthly', code: 'month'},
	{name: 'Yearly', code: 'year'},
];

const FinancesChart = () => {
	const [selectedChartOption, setSelectedChartOption] = useState<any>(null);
	const [basicData] = useState({
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'income',
				backgroundColor: '#42A5F5',
				data: [65, 59, 80, 81, 56, 55, 40]
			},
			{
				label: 'outcome',
				backgroundColor: '#FFA726',
				data: [28, 48, 40, 19, 86, 27, 90]
			}
		]
	});

	const getLightTheme = () => {
		let basicOptions = {
			maintainAspectRatio: false,
			aspectRatio: .6,
			plugins: {
				legend: {
					labels: {
						color: '#495057'
					}
				}
			},
			scales: {
				x: {
					ticks: {
						color: '#495057'
					},
					grid: {
						color: '#ebedef'
					}
				},
				y: {
					ticks: {
						color: '#495057'
					},
					grid: {
						color: '#ebedef'
					}
				}
			}
		};

		let multiAxisOptions = {
			stacked: false,
			maintainAspectRatio: false,
			aspectRatio: .6,
			plugins: {
				legend: {
					labels: {
						color: '#495057'
					}
				}
			},
			scales: {
				x: {
					ticks: {
						color: '#495057'
					},
					grid: {
						color: '#ebedef'
					}
				},
				y: {
					type: 'linear',
					display: true,
					position: 'left',
					ticks: {
						color: '#495057'
					},
					grid: {
						color: '#ebedef'
					}
				},
				y1: {
					type: 'linear',
					display: true,
					position: 'right',
					ticks: {
						color: '#495057'
					},
					grid: {
						drawOnChartArea: false,
						color: '#ebedef'
					}
				}
			}
		};

		return {
			basicOptions,
			multiAxisOptions
		}
	}

	const {basicOptions} = getLightTheme();

	const onOptionChange = (e: { value: any }) => {
		setSelectedChartOption(e.value);
	}

	return (
		<div className="mt-3">
			{/*@ts-ignore*/}
			<Card title="Finances">
				<div className="text-right">
					<Dropdown value={selectedChartOption} options={chartOptions} onChange={onOptionChange} optionLabel="name"
					          placeholder="Select period" className="top-0 right-0"/>
				</div>
				<Chart type="bar" data={basicData} options={basicOptions} />
			</Card>
		</div>
	)
}

export default FinancesChart
