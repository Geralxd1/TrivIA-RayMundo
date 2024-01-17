import { Box, Slide } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BotonPrincipal from './Botones/BotonPrincipal'
import BotonCategoria from './Botones/BotonCategoria';

const Categoria = ({cambiarPantalla}) => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true)
    }, []);
    return (
        <Box component={'div'} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Box
                component={'img'}
                src='/assets/LogoCompuesto.svg'
                sx={{ width: { xs: '50vh', md: '65vh' } }}
            />
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Box component={'form'}
                    sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '0' }}>
                    <BotonCategoria texto={'¡Hola Usuario! Elige una categoria'}/>
                    <BotonPrincipal texto={'Destinos Turisticos'} onClick={() =>  cambiarPantalla('trivia')} />
                    <BotonPrincipal texto={'Platos Tipicos'} onClick={() => cambiarPantalla('trivia')} />
                    <BotonPrincipal texto={'Combinación'} onClick={() => cambiarPantalla('trivia')} />
                </Box>
            </Slide>
        </Box>
    )
}

export default Categoria