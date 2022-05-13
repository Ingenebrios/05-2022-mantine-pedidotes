import React from 'react'

import './headercomponent.css'

import LogoPedidotes from '../../assets/logo/logo_pedidotes.png'

import {
	Header,
	Text,
	MediaQuery,
	Burger,
	Code,
	Avatar,
	Menu,
	Divider,
} from '@mantine/core';

import { Settings, Search, Photo, MessageCircle, Trash, UserMinus } from 'tabler-icons-react';

const HeaderComponent = ({ setOpened, opened, user }) => {
	return (
		<Header height={60} p="md" className="header__container">
			<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
					<Burger
						opened={opened}
						onClick={() => setOpened((o) => !o)}
						size="sm"
						mr="xl"
					/>
				</MediaQuery>
				<div className="header__area__aplicacion">
					<img src={LogoPedidotes} alt="logo_aplicacion" className="logo__aplicacion" />

					<div className="area__avatar__aplicacion">
						{/* <Code className='id__usuario__aplicacion'>{user.id}</Code> */}
						{/* <Code className='id__usuario__aplicacion'>{user.correo}</Code> */}
						<Text className='nombre__avatar__aplicacion'>{user.nombre}</Text>
						<Menu control={<Avatar color="orange" radius="xl" className="logo__avatar__aplicacion">{user.abreviacion}</Avatar>}>
							<Menu.Label>Aplicacion</Menu.Label>
							<Menu.Item icon={<Settings size={14} />}>Configuracion</Menu.Item>
							<Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>

							<Divider />

							<Menu.Label>Cuenta</Menu.Label>
							<Menu.Item color="red" icon={<UserMinus size={14} />}>Cerrar sesion</Menu.Item>
						</Menu>
					</div>
				</div>
			</div>
		</Header>
	)
}

export default HeaderComponent