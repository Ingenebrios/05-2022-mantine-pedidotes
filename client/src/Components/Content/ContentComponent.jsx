import React from 'react'

import { useState } from 'react'

import {
	Text,
	Tabs,
} from '@mantine/core';

import { Photo, MessageCircle, Settings } from 'tabler-icons-react'

import Supermercados from './Supermercados/Supermercados.jsx'

import Productos from './Productos/Productos.jsx'

import Democarta from './Productos/carnes.jsx';

function ContentComponent() {

	const [supermercado, setSupermercado] = useState();
	const [categoria, setcategoria] = useState([]);

	return (
		<div className="content__container">
			<Tabs grow position="apart" variant="outline">
				<Tabs.Tab label="Supermercados" >


					<Supermercados supermercado={supermercado} setSupermercado={setSupermercado} setCategoria={setcategoria} categoria={categoria} />


				</Tabs.Tab>
				<Tabs.Tab label="Productos" >


					<Productos producto={supermercado} categoria={categoria} />
					<Democarta/>



				</Tabs.Tab>
				<Tabs.Tab label="Settings" >Settings tab content</Tabs.Tab>
			</Tabs>
		</div>
	)
}

export default ContentComponent