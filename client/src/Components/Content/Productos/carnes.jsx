import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import Sal2 from"./img_carnes/img2.png"
import Sal1 from "./img_carnes/img1.svg"
import Sal3 from "./img_carnes/img3.svg"
import Sal4 from "./img_carnes/img4.svg"
import Sal5 from "./img_carnes/img5.svg"
import Sal6 from "./img_carnes/img6.svg"
import Sal7 from "./img_carnes/img7.svg"
import Sal8 from "./img_carnes/img8.svg"
import './producto.css'
import { SimpleGrid } from '@mantine/core';

function Democarta(){
    const [cuenta, setCuenta] = React.useState(0);
    console.log(cuenta)
    

    return(
        <div style={{width:1200,margin:'auto'}}>
            <SimpleGrid
                cols={4}
                spacing="lg"
                breakpoints={
                    [
                        {maxWidth:980,cols:3,spacing:'md'},
                        {maxWidth:755,cols:2,spacing:'sm'},
                        {maxWidth:755,cols:1,spacing:'sm'},
                    ]
                }
            >

                <Card shadow="sm" p="lg" style={{height:350}}>
                    <Card.Section>
                        <Image src={Sal2} height={160} alt="Carnes"/>
                    </Card.Section>
                    <Group position="apart" style={{ marginBottom: 5}}>
                        <Text weight={500}>Salchichas Toledo</Text>
                    </Group>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Marca: Toledo
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Cantidad: 10 unidades
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Precio: Q20.00
                    </Text>
                    <div className="caja_info">
                        <div className='boton_izquierda'>
                            <button className='boton_menos'>-</button>
                        </div>
                        <div className='boton_derecha'>
                            <button className='boton_mas' onClick={()=>setCuenta(cuenta+=1)}>+</button>
                        </div>
                        <div className='cuenta'>
                            <p className='dato'>{cuenta}</p>
                        </div>
                    </div>
                    
                </Card>
                <Card shadow="sm" p="lg" style={{height:350}}>
                    <Card.Section>
                        <Image src={Sal1} height={160} alt="Carnes"/>
                    </Card.Section>
                    <Group position="apart" style={{ marginBottom: 5}}>
                        <Text weight={500}>Salchichas Bremen</Text>
                    </Group>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Marca: Bremen
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Cantidad: 20 unidades
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Precio: Q16.00
                    </Text>
                    <div className="caja_info">
                        <div className='boton_izquierda'>
                            <button className='boton_menos'>-</button>
                        </div>
                        <div className='boton_derecha'>
                            <button className='boton_mas' onClick={()=>setCuenta(cuenta+=1)}>+</button>
                        </div>
                        <div className='cuenta'>
                            <p className='dato'>{cuenta}</p>
                        </div>
                    </div>
                    
                </Card>
                <Card shadow="sm" p="lg" style={{height:350}}>
                    <Card.Section>
                        <Image src={Sal3} height={160} alt="Carnes"/>
                    </Card.Section>
                    <Group position="apart" style={{ marginBottom: 5}}>
                        <Text weight={500}>Salchichas Toledo Cocktail</Text>
                    </Group>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Marca: Toledo
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Cantidad: 460 gramos
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Precio: Q26.50
                    </Text>
                    <div className="caja_info">
                        <div className='boton_izquierda'>
                            <button className='boton_menos'>-</button>
                        </div>
                        <div className='boton_derecha'>
                            <button className='boton_mas' onClick={()=>setCuenta(cuenta+=1)}>+</button>
                        </div>
                        <div className='cuenta'>
                            <p className='dato'>{cuenta}</p>
                        </div>
                    </div>
                    
                </Card>
                <Card shadow="sm" p="lg" style={{height:350}}>
                    <Card.Section>
                        <Image src={Sal4} height={160} alt="Carnes"/>
                    </Card.Section>
                    <Group position="apart" style={{ marginBottom: 5}}>
                        <Text weight={500}>Salchichas Gigante Bremen</Text>
                    </Group>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Marca: Bremen
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Cantidad: 12 unidades
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Precio: Q14.90
                    </Text>
                    <div className="caja_info">
                        <div className='boton_izquierda'>
                            <button className='boton_menos'>-</button>
                        </div>
                        <div className='boton_derecha'>
                            <button className='boton_mas' onClick={()=>setCuenta(cuenta+=1)}>+</button>
                        </div>
                        <div className='cuenta'>
                            <p className='dato'>{cuenta}</p>
                        </div>
                    </div>
                    
                </Card>
                <Card shadow="sm" p="lg" style={{height:350}}>
                    <Card.Section>
                        <Image src={Sal5} height={160} alt="Carnes"/>
                    </Card.Section>
                    <Group position="apart" style={{ marginBottom: 5}}>
                        <Text weight={500}>Salchichas Hot Dog</Text>
                    </Group>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Marca: FUD
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Cantidad: 500 gramos
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Precio: Q32.20
                    </Text>
                    <div className="caja_info">
                        <div className='boton_izquierda'>
                            <button className='boton_menos'>-</button>
                        </div>
                        <div className='boton_derecha'>
                            <button className='boton_mas' onClick={()=>setCuenta(cuenta+=1)}>+</button>
                        </div>
                        <div className='cuenta'>
                            <p className='dato'>{cuenta}</p>
                        </div>
                    </div>
                    
                </Card>
                <Card shadow="sm" p="lg" style={{height:350}}>
                    <Card.Section>
                        <Image src={Sal6} height={160} alt="Carnes"/>
                    </Card.Section>
                    <Group position="apart" style={{ marginBottom: 5}}>
                        <Text weight={500}>Bistec Especial</Text>
                    </Group>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Marca: Carnes La Torre
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Cantidad: 1.40 libras
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Precio: Q38.05
                    </Text>
                    <div className="caja_info">
                        <div className='boton_izquierda'>
                            <button className='boton_menos'>-</button>
                        </div>
                        <div className='boton_derecha'>
                            <button className='boton_mas' onClick={()=>setCuenta(cuenta+=1)}>+</button>
                        </div>
                        <div className='cuenta'>
                            <p className='dato'>{cuenta}</p>
                        </div>
                    </div>
                    
                </Card>
                <Card shadow="sm" p="lg" style={{height:350}}>
                    <Card.Section>
                        <Image src={Sal7} height={160} alt="Carnes"/>
                    </Card.Section>
                    <Group position="apart" style={{ marginBottom: 5}}>
                        <Text weight={500}>Bistec economico</Text>
                    </Group>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Marca: Carnes La Torre
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Cantidad: 1.50 lb
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Precio: Q29.25
                    </Text>
                    <div className="caja_info">
                        <div className='boton_izquierda'>
                            <button className='boton_menos'>-</button>
                        </div>
                        <div className='boton_derecha'>
                            <button className='boton_mas' onClick={()=>setCuenta(cuenta+=1)}>+</button>
                        </div>
                        <div className='cuenta'>
                            <p className='dato'>{cuenta}</p>
                        </div>
                    </div>
                    
                </Card>
                <Card shadow="sm" p="lg" style={{height:350}}>
                    <Card.Section>
                        <Image src={Sal8} height={160} alt="Carnes"/>
                    </Card.Section>
                    <Group position="apart" style={{ marginBottom: 5}}>
                        <Text weight={500}>Bistec Ternera</Text>
                    </Group>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Marca: Carnes La Torre
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Cantidad: 1.40 lb
                    </Text>
                    <Text size="sm" style={{lineHeight: 1.5 }}>
                        Precio: Q38.05
                    </Text>
                    <div className="caja_info">
                        <div className='boton_izquierda'>
                            <button className='boton_menos'>-</button>
                        </div>
                        <div className='boton_derecha'>
                            <button className='boton_mas' onClick={()=>setCuenta(cuenta+=1)}>+</button>
                        </div>
                        <div className='cuenta'>
                            <p className='dato'>{cuenta}</p>
                        </div>
                    </div>
                    
                </Card>
            </SimpleGrid>
        </div>
    ) 
}
export default Democarta;
