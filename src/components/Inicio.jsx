import { Box, Slide } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BotonPrincipal from './Botones/BotonPrincipal'

const Inicio = ({ cambiarPantalla }) => {
    const [checkedHome, setCheckedHome] = React.useState(false);
    useEffect(() => {
        setCheckedHome(true)
    }, []);
    return (
        <Box component={'div'}>
            <Box
                component={'img'}
                src='/assets/LogoCompuesto.svg'
                sx={{ width: { xs: '50vh', md: '65vh' } }}
            />
            <Slide direction="up" in={checkedHome} mountOnEnter unmountOnExit>
                <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '0' }}>
                    <BotonPrincipal texto={'Jugar'} onClick={() => cambiarPantalla('ingresarNombre')} />
                    <BotonPrincipal texto={'Ranking'} onClick={() => cambiarPantalla('ranking')} />
                </Box>
            </Slide>
        </Box>
    )
}

export default Inicio