import React from 'react';
import {Menubar} from 'primereact/menubar';
import "./styles.scss";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Badge} from "primereact/badge";

const TopNav = () => {
	const items = [
		{
			label: '',
			template: () => {
				return <div className="p-inputgroup">
			        <span className="p-inputgroup-addon">
			            <i className="pi pi-search"/>
			      </span>
					<InputText placeholder="search..."/>
				</div>
			}
		}
	];

	const end = <div className="flex align-items-center">
		<Button type="button" className="p-button-rounded p-button-link">
			<i className="pi pi-envelope p-text-secondary p-overlay-badge">
				<Badge severity="danger" value={1}/>
			</i>
		</Button>
		<Button type="button" className="p-button-rounded p-button-link">
			<i className="pi pi-bell p-text-secondary p-overlay-badge">
				<Badge severity="danger" value={2}/>
			</i>
		</Button>
		<Button type="button" className="p-button-rounded p-button-link mr-1">
			<i className="pi pi-cog p-text-secondary p-overlay-badge"/>
		</Button>
		<img alt="logo" src="showcase/images/logo.png"
		     onError={(e: any) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
		     height="40" className="mr-2"/>
		<p className="font-normal">john doe</p>
	</div>;

	return (
		<div>
			<div className="card">
				<Menubar model={items} end={end} className="menubar pr-3"/>
			</div>
		</div>
	);
}

export default TopNav;
