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
	Group,
	Notification,
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
						<Notification color="indigo" title={record.supermercado} disallowClose key={record.id} className="mensaje__individual">
							{record.informacion}
							<Divider my="sm" variant="dashed" />
							<Badge color="teal">{record.costo + "$"}</Badge>
							<Badge color="lime">Reordenar</Badge>
						</Notification>
					)
				})
			}
		</div>
	)
}

export default Historial