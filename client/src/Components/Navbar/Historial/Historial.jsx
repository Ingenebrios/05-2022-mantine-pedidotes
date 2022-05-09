import { motion } from "framer-motion"

import { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'

import './historial.css'

import {
	Text,
	Paper,
	Divider,
	Code,
	ScrollArea,
	Badge,
	Modal,
	Button,
	Group
} from '@mantine/core';

import { db } from '../../../config/firebase-config'

import React from 'react'

const Historial = ({ id }) => {

	const [opened, setOpened] = useState(false);

	const [historial, setHistorial] = useState([]);

	const [historialEspecifico, sethistorialEspecifico] = useState([]);

	useEffect(() => {

		const referenciaHistorial = collection(db, 'historial')

		const reatrerHistorial = async () => {
			const datos = await getDocs(referenciaHistorial)
			setHistorial(datos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}
		reatrerHistorial()

	}, [id]);

	useEffect(() => {

		const historialTemp = []

		for (let i = 0; i < historial.length; i++) {
			if (historial[i].id_usuario === id) {
				// console.log(notificaciones[i].fecha.seconds)
				// console.log(new Date(notificaciones[i].fecha.seconds * 1000).toLocaleString())
				historialTemp.push(historial[i])
			}
		}

		sethistorialEspecifico(historialTemp)

	}, [historial]);


	// useEffect(() => {
	// 	console.log(historialEspecifico);
	// }, [historialEspecifico]);

	return (
		<div>
			{
				(historialEspecifico.length > 0) &&
				historialEspecifico.map(record => {
					return (
						<Paper shadow="lg" radius="md" p="md" className='paper__record__individual' key={record.id}>
							<div className="paper__parte__superior__historial">
								<Text>{record.supermercado}</Text>
								<Badge color="teal">{record.costo + "$"}</Badge>
							</div>
							<Modal
								withCloseButton={false}
								opened={opened}
								onClose={() => setOpened(false)}
								title="Productos adquiridos en esta compra:"
							>
								{record.informacion.split(',').map(producto => {
									return (
										<Text>{producto}</Text>
									)
								})}
							</Modal>
							<Divider my="sm" variant="dashed" />
							<Group position="center">
								<Button variant="subtle" color="cyan" onClick={() => setOpened(true)}>Informacion de la compra</Button>
							</Group>

						</Paper>
					)
				})
			}
		</div>
	)
}

export default Historial