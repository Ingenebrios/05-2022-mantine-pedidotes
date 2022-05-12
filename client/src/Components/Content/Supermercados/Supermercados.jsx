import React from 'react'
import { Autocomplete } from '@mantine/core';


const Supermercados = ({ supermercado, setSupermercado, setCategoria, categoria }) => {
	return (
		<Autocomplete
			value={supermercado} onChange={setSupermercado}
			label="Your favorite framework/library"
			placeholder="Pick one"
			data={['La Torre', 'Angular', 'carnes', 'Vue']}
		/>
	)
}

export default Supermercados