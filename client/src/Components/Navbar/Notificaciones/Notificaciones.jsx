import React from 'react'

import { motion } from "framer-motion"

import { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'

import './notificaciones.css'

import {
	Text,
	Paper,
	Divider,
	Code,
	ScrollArea,
	Notification,
} from '@mantine/core';

import { db } from '../../../config/firebase-config'

import { Check } from 'tabler-icons-react';
import { X } from 'tabler-icons-react';

import { ShoppingCart } from 'tabler-icons-react';
import { Settings } from 'tabler-icons-react';

const Notificaciones = ({ id }) => {

	const [notificaciones, setNotificaciones] = useState([]);

	const [notificacionesEspecificas, setNotificacionesEspecificas] = useState([]);

	useEffect(() => {

		const referenciaNotificaciones = collection(db, 'notificaciones')

		const reatrerNotificaciones = async () => {
			const datos = await getDocs(referenciaNotificaciones)
			setNotificaciones(datos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}
		reatrerNotificaciones()

	}, [id]);

	useEffect(() => {

		const notificacionesTemps = []

		for (let i = 0; i < notificaciones.length; i++) {
			if (notificaciones[i].id_usuario === id) {
				// console.log(notificaciones[i].fecha.seconds)
				// console.log(new Date(notificaciones[i].fecha.seconds * 1000).toLocaleString())
				notificacionesTemps.push(notificaciones[i])
			}
		}

		setNotificacionesEspecificas(notificacionesTemps)

	}, [notificaciones]);

	// useEffect(() => {
	// 	console.log(notificacionesEspecificas);
	// }, [notificacionesEspecificas]);

	return (
		<div>
			{(notificacionesEspecificas.length > 0) && notificacionesEspecificas.map(notificacion => {
				return (
					// <Paper shadow="lg" radius="md" p="md" className='paper__notificacion__individual' key={notificacion.id}
					// 	style={{ backgroundColor: notificacion.estado ? 'rgb(186, 254, 177)' : 'rgb(254, 177, 177)' }}>
					// 	<div className="notificacion__individual">
					// 		<div className="area__notificacion">
					// 			{

					// 			}
					// 			<Divider my="sm" variant="dashed" />
					// 			{

					// 			}


					<Notification
						color={notificacion.estado ? 'green' : 'red'}
						title={notificacion.estado ? 'Completado' : 'Error'}
						disallowClose
						key={notificacion.id}
						className="mensaje__individual">
						{notificacion.informacion}
						<Divider my="sm" variant="dashed" />
						{(notificacion.categoria === 'setting')
							?
							<div  >
								<Settings className='icono__notificacion'
									size={20}
									strokeWidth={2}
									color={'#194b4d'}
								/>
							</div>
							:
							<div >
								<ShoppingCart className='icono__notificacion'
									size={20}
									strokeWidth={2}
									color={'#194b4d'}
								/>
							</div>}
						<Code>{
							new Date(notificacion.fecha.seconds * 1000).toLocaleString()}
						</Code>
					</Notification>
				)
			})}
		</div>
	)
}

export default Notificaciones