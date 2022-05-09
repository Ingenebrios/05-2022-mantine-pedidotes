import React from 'react'

import {
	Navbar,
	Text,
	Accordion,
	Group,
	ScrollArea,
} from '@mantine/core';

import Notificaciones from './Notificaciones/Notificaciones'
import Historial from './Historial/Historial'

import { BiBell } from 'react-icons/bi';
import { FaHistory } from 'react-icons/fa'
import { RiMessage3Line } from 'react-icons/ri'
import { MdOutlineLocalOffer } from 'react-icons/md'

import './navbarcomponent.css'

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
							<ScrollArea style={{ height: 580 }} scrollbarSize={0}>
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
							With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
						</Accordion.Item>




						<Accordion.Item label={
							<Group noWrap>
								<MdOutlineLocalOffer />
								<div>
									<Text>Descuentos</Text>
								</div>
							</Group>
						}>
							Descuentos para mayores de edad
						</Accordion.Item>


					</Accordion>
				</div>
			</ScrollArea>
		</Navbar>
	)
}

export default NavbarComponent