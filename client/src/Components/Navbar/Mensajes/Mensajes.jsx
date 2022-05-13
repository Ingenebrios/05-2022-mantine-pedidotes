import React from 'react'

import { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'

import { db } from '../../../config/firebase-config'

import {
	Notification,
} from '@mantine/core';

import './mensajes.css'

const Mensajes = ({ id }) => {

	const [mensajes, setMensajes] = useState([]);

	const [mensajesEspecificos, setMensajesEspecificos] = useState([]);

	useEffect(() => {

		const referenciaMensajes = collection(db, 'mensajes')

		const retraerMensajes = async () => {
			const datos = await getDocs(referenciaMensajes)
			setMensajes(datos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}
		retraerMensajes()

	}, [id]);

	useEffect(() => {

		const mensajesTemp = []

		for (let i = 0; i < mensajes.length; i++) {
			if (mensajes[i].id_usuario === id) {
				// console.log(notificaciones[i].fecha.seconds)
				// console.log(new Date(notificaciones[i].fecha.seconds * 1000).toLocaleString())
				mensajesTemp.push(mensajes[i])
			}
		}

		setMensajesEspecificos(mensajesTemp)

	}, [mensajes]);

	return (
		<div>
			{
				mensajesEspecificos.map(m => {
					return (
						<Notification color="orange" title={m.nombre} disallowClose key={m.nombre} className="mensaje__individual">
							{m.mensaje}
						</Notification>
					)
				})
			}
		</div>
	)
}

export default Mensajes