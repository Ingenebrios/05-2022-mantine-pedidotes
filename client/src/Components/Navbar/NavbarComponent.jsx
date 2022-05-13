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
} from '@mantine/core';

import Notificaciones from './Notificaciones/Notificaciones'
import Historial from './Historial/Historial'
import Mensajes from './Mensajes/Mensajes'

import { BiBell } from 'react-icons/bi';
import { FaHistory } from 'react-icons/fa'
import { RiMessage3Line } from 'react-icons/ri'

import './navbarcomponent.css'

import imagen_uno from './navbarAssets/imagen1.png'

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

					<div style={{ width: 340, margin: 'auto', marginTop: '10px' }}>
						<Card shadow="sm" p="lg">
							<Card.Section>
								<Image src={imagen_uno} height={160} alt="Norway" />
							</Card.Section>

							<Group position="apart" style={{ marginBottom: 5 }}>
								<Text weight={500}>Norway Fjord Adventures</Text>
								<Badge color="pink" variant="light">
									On Sale
								</Badge>
							</Group>

							<Text size="sm">
								La Torre Free Delivery
							</Text>

							<Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
								Book classic tour now
							</Button>
						</Card>
					</div>

				</div>
			</ScrollArea>
		</Navbar>
	)
}

export default NavbarComponent