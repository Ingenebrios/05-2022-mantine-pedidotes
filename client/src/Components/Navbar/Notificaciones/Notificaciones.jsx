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
					<Paper shadow="lg" radius="md" p="md" className='paper__notificacion__individual' key={notificacion.id}>
						<div className="notificacion__individual">
							<div className="area__notificacion">
								{
									(notificacion.categoria === 'setting')
										?
										<div className="area__especifica__superior__notificacion" >
											<Settings className='icono__notificacion'
												size={20}
												strokeWidth={2}
												color={'#194b4d'}
											/>
											<Text>Settings</Text>
										</div>
										:
										<div className="area__especifica__superior__notificacion" >
											<ShoppingCart className='icono__notificacion'
												size={20}
												strokeWidth={2}
												color={'#194b4d'}
											/>
											<Text>Compras</Text>
										</div>
								}
								<Divider my="sm" variant="dashed" />
								{
									notificacion.estado
										?
										<div className="area__especifica__superior__notificacion" >
											<Check className='icono__notificacion'
												size={20}
												strokeWidth={2}
												color={'#5abf40'}
											/>
											<Text>Completado</Text>
										</div>
										:
										<div className="area__especifica__superior__notificacion" >
											<X className='icono__notificacion'
												size={20}
												strokeWidth={2}
												color={'#bf4041'}
											/>
											<Text>Error</Text>
										</div>
								}
								<Divider my="sm" variant="dashed" />
								<Text>{notificacion.informacion}</Text>
								<Divider my="sm" variant="dashed" />

								<motion.div className="contenedor__codigo__fecha" whileHover={{ scale: 1.3 }}>
									<Code>{
										// console.log(new Date(notificaciones[i].fecha.seconds * 1000).toLocaleString())
										new Date(notificacion.fecha.seconds * 1000).toLocaleString()}
									</Code>
								</motion.div>
							</div>
						</div>
					</Paper>
				)
			})}
		</div>
	)
}

export default Notificaciones