import React, {useState} from 'react';
import {Chart} from 'primereact/chart';
import {Panel} from "primereact/panel";
import {Dropdown} from "primereact/dropdown";

const chartOptions = [
	{name: 'Weekly', code: 'week'},
	{name: 'Monthly', code: 'month'},
	{name: 'Yearly', code: 'year'},
];

const ExpensesChart = () => {
	const [selectedChartOption, setSelectedChartOption] = useState<any>(null);
	const [chartData] = useState({
		labels: ['Shopping', 'Bills & utilities', 'Food'],
		datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56"
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56"
				]
			}]
	});

	const [lightOptions] = useState({
		plugins: {
			legend: {
				labels: {
					color: '#495057'
				}
			}
		}
	});

	const onOptionChange = (e: { value: any }) => {
		setSelectedChartOption(e.value);
	}

	return (
		<div className="mt-3">
			{/*@ts-ignore*/}
			<Panel header="All expenses">
				<div className="text-right">
					<Dropdown value={selectedChartOption} options={chartOptions} onChange={onOptionChange} optionLabel="name"
					          placeholder="Select period" className="top-0 right-0"/>
				</div>
				<div className="flex align-items-center">
					<Chart type="doughnut" data={chartData} options={lightOptions} style={{position: 'relative', width: '20%'}}/>
					<div className="flex flex-column">
						<div>
							<p>weekly</p>
							<p>kes 2,312.22</p>
						</div>
						<div>
							<p>monthly</p>
							<p>kes 12,392.01</p>
						</div>
						<div>
							<p>yearly</p>
							<p>kes 283,831.34</p>
						</div>
					</div>
				</div>
			</Panel>
		</div>
	)
}

export default ExpensesChart
