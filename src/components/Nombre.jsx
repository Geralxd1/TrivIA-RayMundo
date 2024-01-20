import { Box, Slide } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CampoInput from './CamposTexto/CampoInput'
import BotonPrincipal from './Botones/BotonPrincipal'

const Nombre = ({ cambiarPantalla }) => {
    const [nombre, setNombre] = useState('');
    const [checked, setChecked] = useState(false);

    function guardarNombre(){
        //haremos una llamada a la api para guardar el nombre

        //se almacena localmente el nombre de jugador y se inica el score en 0 
        localStorage.setItem('nombreJugador', nombre);
        localStorage.setItem('score', 0);

        //cambiamos pantalla a elegir categoria
        cambiarPantalla('elegirCategoria')
    }
    useEffect(() => {
        setChecked(true)
    }, []);
    return (
        <Box component={'div'}>
            <Box
                component={'img'}
                src='/assets/LogoCompuesto.svg'
                sx={{ width: { xs: '50vh', md: '65vh' } }}
            />
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Box component={'form'}
                    sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '0' }}>
                    <CampoInput placeholder={'Escribe tu nombre aqui'} onChange={(e) => setNombre(e.target.value)} />
                    <BotonPrincipal texto={'Guardar'} onClick={()=> guardarNombre()} />
                    <BotonPrincipal texto={'Volver Atras'} onClick={() => cambiarPantalla('inicio')} />
                </Box>
            </Slide>
        </Box>
    )
}

export default Nombre