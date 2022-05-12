import React from 'react'

import { useState } from 'react'

import {
	Text,
	Tabs,
} from '@mantine/core';

import { Photo, MessageCircle, Settings } from 'tabler-icons-react'

import Supermercados from './Supermercados/Supermercados.jsx'

import Productos from './Productos/Productos.jsx'

function ContentComponent() {

	const [supermercado, setSupermercado] = useState('');

	return (
		<div className="content__container">
			<Tabs grow position="apart" variant="outline">
				<Tabs.Tab label="Supermercados" >
					<Supermercados supermercado={supermercado} setSupermercado={setSupermercado} />
				</Tabs.Tab>
				<Tabs.Tab label="Productos" >
					<Productos producto={supermercado} />
				</Tabs.Tab>
				<Tabs.Tab label="Settings" >Settings tab content</Tabs.Tab>
			</Tabs>
		</div>
	)
}

export default ContentComponent