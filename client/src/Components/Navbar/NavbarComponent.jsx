import React from 'react'

import {
	Navbar,
	Text,
	Accordion,
	Group,
	ScrollArea,
	Card,
	Image,
	Badge,
	Button,
	Divider,
} from '@mantine/core';

import Notificaciones from './Notificaciones/Notificaciones'
import Historial from './Historial/Historial'
import Mensajes from './Mensajes/Mensajes'

import { BiBell } from 'react-icons/bi';
import { FaHistory } from 'react-icons/fa'
import { RiMessage3Line } from 'react-icons/ri'

import './navbarcomponent.css'

import imagen_uno from './navbarAssets/imagen1.png'

import imagen_dos from './navbarAssets/imagen2.png'

import imagen_tres from './navbarAssets/imagen3.png'

const NavbarComponent = ({ opened, userID }) => {
	return (
		<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 400 }}>
			<ScrollArea style={{ height: 1000 }} scrollbarSize={0}>
				<div className='navbar__area__acordion'>
					<Accordion iconPosition="right" iconSize={26} multiple>



						<Accordion.Item label={
							<Group noWrap>
								<BiBell />
								<div>
									<Text>Notificaciones</Text>
								</div>
							</Group>
						}>
							<ScrollArea style={{ height: 450 }} scrollbarSize={0}>
								<Notificaciones id={userID} />
							</ScrollArea>

						</Accordion.Item>






						<Accordion.Item label={
							<Group noWrap>
								<FaHistory />
								<div>
									<Text>Historial</Text>
								</div>
							</Group>
						}>
							<ScrollArea style={{ height: 270 }} scrollbarSize={0}>
								<Historial id={userID} />
							</ScrollArea>
						</Accordion.Item>


						<Accordion.Item label={
							<Group noWrap>
								<RiMessage3Line />
								<div>
									<Text>Mensajes</Text>
								</div>
							</Group>
						}>
							<ScrollArea style={{ height: 170 }} scrollbarSize={0}>
								<Mensajes id={userID} />
							</ScrollArea>
						</Accordion.Item>



					</Accordion>

					<Text
						className='ofertas__activas__texto'
						weight={700}
						align="center"
						variant="gradient"
						gradient={{ from: 'orange', to: 'yellow', deg: 45 }}
					>Ofertas activas en Pedidotes</Text>


					<Divider my="sm" variant="dotted" />


					<div style={{ width: 340, margin: 'auto', marginTop: '10px' }}>
						<Card shadow="sm" p="lg">
							<Card.Section>
								<Image src={imagen_uno} height={160} alt="Norway" />
							</Card.Section>

							<Group position="apart" className='infor__recomendacion__individual' style={{ marginBottom: 5 }}>
								<Text weight={500}>La Torre Free Delivery</Text>
								<Badge color="pink" variant="light">
									13 Mayo
								</Badge>
							</Group>

							<Text size="sm">
								Ordena con La Torre hoy 13 de mayo en ordenes mayores a 50Q y recibe un 100% de descuento en tu envio.
							</Text>

							<Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
								Ordenar!
							</Button>
						</Card>
					</div>

					<div style={{ width: 340, margin: 'auto', marginTop: '10px' }}>
						<Card shadow="sm" p="lg">
							<Card.Section>
								<Image src={imagen_dos} height={160} alt="Norway" className='imagen_prueba' />
							</Card.Section>

							<Group position="apart" className='infor__recomendacion__individual' style={{ marginBottom: 5 }}>
								<Text weight={500}>Walmart Ropa</Text>
								<Badge color="pink" variant="light">
									10 a 15 de MAYO
								</Badge>
							</Group>

							<Text size="sm">
								Toda la ropa tiene un descuento empezando desde el 30% para arriba durante esta semana!
							</Text>

							<Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
								Ver ropa!
							</Button>
						</Card>
					</div>

					<div style={{ width: 340, margin: 'auto', marginTop: '10px' }}>
						<Card shadow="sm" p="lg">
							<Card.Section>
								<Image src={imagen_tres} height={160} alt="Norway" className='imagen_prueba' />
							</Card.Section>

							<Group position="apart" className='infor__recomendacion__individual' style={{ marginBottom: 5 }}>
								<Text weight={500}>Pedidotes Coupons</Text>
							</Group>

							<Text size="sm">
								Recibe un 5% de reembolso en todas tus compras en linea que hagas con nosotros arriba de un rango de 200Q! Estos cupones pueden ser utilizados en tus siguientes compras.
							</Text>

							<Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
								Mas info.
							</Button>
						</Card>
					</div>

				</div>
			</ScrollArea>
		</Navbar>
	)
}

export default NavbarComponent