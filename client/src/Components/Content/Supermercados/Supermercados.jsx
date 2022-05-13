import React from 'react'
import { Autocomplete } from '@mantine/core';
import { Badge } from '@mantine/core';
import { LetterX } from 'tabler-icons-react';
import './Supermercados.css'

import carnes from '../../../assets/supermercados/carnes.png'
import frutas from '../../../assets/supermercados/Frutas.png'
import panaderia from '../../../assets/supermercados/Panaderia.png'
import huevos from '../../../assets/supermercados/Huevos.png'
import mariscos from '../../../assets/supermercados/Mariscos.png'
import aceite from '../../../assets/supermercados/Aceite.png'
import pastas from '../../../assets/supermercados/Pastas.png'
import enlatados from '../../../assets/supermercados/Enlatados.png'
import granos from '../../../assets/supermercados/Granos.png'
import harinas from '../../../assets/supermercados/Harinas.png'
import snacks from '../../../assets/supermercados/Snacks.png'
import bebidas from '../../../assets/supermercados/Bebidas.png'

const imagenes = [
	{ id: 'Carnes y embutidos', src: carnes },
	{ id: 'Frutas y verduras', src: frutas },
	{ id: 'Panderia y dulces', src: panaderia },
	{ id: 'Lacteos y huevos', src: huevos },
	{ id: 'Mariscos', src: mariscos },
	{ id: 'Aceites y mantequilla', src: aceite },
	{ id: 'Pastas', src: pastas },
	{ id: 'Enlatados', src: enlatados },
	{ id: 'Granos', src: granos },
	{ id: 'Harinas Preparadas', src: harinas },
	{ id: 'Snacks', src: snacks },
	{ id: 'Bebidas', src: bebidas },
]

const Supermercados = ({ supermercado, setSupermercado, setCategoria, categoria }) => {

	const categoriaUnica = []

	categoria.map(categoria => {
		if (categoriaUnica.indexOf(categoria) === -1) {
			categoriaUnica.push(categoria);
		}
	})
	console.log(categoria)

	console.log(categoriaUnica)

	return (
		<div className="SupermercadoContainer">
			<Autocomplete
				value={supermercado} onChange={setSupermercado}
				label="Seleccione el supermercado de su eleccion."
				placeholder="Supermercados"
				data={['La Torre', 'Paiz', 'Walmart', 'PriceSmart', 'Maxi Despensa']}
				className="AutoSupermercado"
			/>
			{
				categoriaUnica.map(badge => {
					return (
							<Badge className="badge">
								{badge}
								<LetterX
									size={15}
									strokeWidth={2}
									color={'black'}
									className="letterX"
									onClick={console.log("click2")}
								/>
							</Badge>
					);
				})
			}
			<div className="supermercado">
            <div className="inferior">
                <div className="gridImagenes">
                    {imagenes.map(imagen => {
                        return (
                            <div key={imagen.id}>
                                <img alt={imagen.id} onClick={() =>setCategoria(setCategoria=>[...setCategoria, imagen.id])} className="imagen" src={imagen.src}></img>
                                <h3 id="tituloImg">{imagen.id}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
		</div>
	)
}

export default Supermercados