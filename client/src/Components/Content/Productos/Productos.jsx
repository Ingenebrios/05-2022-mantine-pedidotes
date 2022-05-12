import React from 'react'

import { useEffect } from 'react';

const carnes = [
	{ value: 'Carnes', label: 'Carnes' },
	{ value: 'Frutas', label: 'Frutas' },
	{ value: 'Panaderia', label: 'Panaderia' },
	{ value: 'Lacteos', label: 'Lacteos' },
	{ value: 'Mariscos', label: 'Mariscos' },
	{ value: 'Granos', label: 'Granos' },
	{ value: 'Bebidas', label: 'Bebidas' },
	{ value: 'Limpieza', label: 'Limpieza' },
];

const Productos = ({ producto, categoria }) => {

	useEffect(() => {
		console.log(categoria)
	}, [categoria]);

	return (
		<div>
			{
				categoria === 'carnes'
					?
					carnes.map(c => {
						return (
							<h1 key={c.label}>{c.value}</h1>
						)
					})
					:
					null
			}
		</div>
	)
}

export default Productos