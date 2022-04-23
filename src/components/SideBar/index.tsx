import React from 'react';
import {Menu} from "primereact/menu";
import { Image } from 'primereact/image';
import "./styles.scss"

const SideBar = () => {
	const items = [
		{
			label: 'home',
			icon: 'pi pi-refresh',
		},
		{
			label: 'card',
			icon: 'pi pi-times',
		},
		{
			label: 'stocks',
			icon: 'pi pi-times',
		},
		{
			label: 'invoice',
			icon: 'pi pi-times',
		},
		{
			label: 'settings',
			icon: 'pi pi-times',
		}
	]

	return (
		<div className="sidebar">
			<div className="sidebar-brand">
				<Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="40"/>
				<h3>netabank</h3>
			</div>
			<Menu model={items} className="sidebar-menu"/>
		</div>
	);
}

export default SideBar;
