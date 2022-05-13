import React from 'react'

import { useEffect } from 'react';
import Democarta from './carnes';

const Productos = ({ producto, categoria }) => {
	return (
		<div>
			{
				categoria==='carnes'
				?
				<Democarta/>
				:
				null
			}

		</div>
	)
}

export default Productos