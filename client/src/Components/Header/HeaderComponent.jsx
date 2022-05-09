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
} from '@mantine/core';

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
						<Code className='id__usuario__aplicacion'>{user.id}</Code>
						<Code className='id__usuario__aplicacion'>{user.correo}</Code>
						<Text className='nombre__avatar__aplicacion'>{user.nombre}</Text>
						<Avatar color="orange" radius="xl" className="logo__avatar__aplicacion">{user.abreviacion}</Avatar>
					</div>
				</div>
			</div>
		</Header>
	)
}

export default HeaderComponent