import { Box, Slide } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BotonPrincipal from './Botones/BotonPrincipal'
import BotonCategoria from './Botones/BotonCategoria';

const Categoria = ({ cambiarPantalla }) => {
    const [checked, setChecked] = useState(false);
    const [nombre, setNombre] = useState('');

    //eleccion de categoria 
    function elegirCategoria(categoria){
        localStorage.setItem('categoria', categoria);
        cambiarPantalla('trivia')
    }
    useEffect(() => {
        setNombre(localStorage.getItem('nombreJugador'))
        setChecked(true)
    }, []);
    return (
        <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                component={'img'}
                src='/assets/LogoCompuesto.svg'
                sx={{ width: { xs: '50vh', md: '65vh' } }}
            />
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Box component={'form'}
                    sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '0' }}>
                    <BotonCategoria texto={`¡Hola ${nombre} ! Elige una categoria`} />
                    <Box component={'div'} sx={{display:'flex', width:'100vw', justifyContent:'space-around',alignItems:'center', flexDirection:{xs:'column', md:'row'}}}> 
                        <BotonPrincipal texto={'Destinos Turisticos'} onClick={() => elegirCategoria('destinosTuristicos')} />
                        <BotonPrincipal texto={'Platos Tipicos'} onClick={() => elegirCategoria('platosTipicos')} />
                        <BotonPrincipal texto={'Combinación'} onClick={() => elegirCategoria('combinacion')} />
                    </Box>
                </Box>
            </Slide>
        </Box>
    )
}

export default Categoria