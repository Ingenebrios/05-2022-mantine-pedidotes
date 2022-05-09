import React, { useState, useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore'

import { db } from '../config/firebase-config'

import {
  AppShell
} from '@mantine/core';

import HeaderComponent from './Header/HeaderComponent'
import NavbarComponent from './Navbar/NavbarComponent';
import ContentComponent from './Content/ContentComponent'

const ID_USUARIO = "AoUr7wmX3kYc9tp9kQQ2"

function App() {

  const [opened, setOpened] = useState(false);

  const [usuarios, setUsuarios] = useState({});

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const referenciaUsuarios = collection(db, 'usuarios')
    const reatrerUsuarios = async () => {
      const datos = await getDocs(referenciaUsuarios)
      setUsuarios(datos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    reatrerUsuarios()
  }, []);

  useEffect(() => {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].id === ID_USUARIO) {
        setUsuario(usuarios[i])
      }
    }
  }, [usuarios]);

  // useEffect(() => {
  //   console.log('Se ha elegido un nuevo usuario:', usuario)
  // }, [usuario]);

  return (
    <div className="App">
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <NavbarComponent opened={opened} userID={usuario.id} />
        }
        header={
          <HeaderComponent setOpened={setOpened} opened={opened} user={usuario} />
        }
      >
        <ContentComponent />
      </AppShell>
    </div>
  )
}

export default App
