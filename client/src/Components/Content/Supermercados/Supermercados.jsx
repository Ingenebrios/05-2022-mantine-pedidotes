import React from 'react'
import { Autocomplete } from '@mantine/core';


const Supermercados = ({ supermercado, setSupermercado }) => {
	return (
		<Autocomplete
			value={supermercado} onChange={setSupermercado}
			label="Your favorite framework/library"
			placeholder="Pick one"
			data={['React', 'Angular', 'Svelte', 'Vue']}
		/>
	)
}

export default Supermercados