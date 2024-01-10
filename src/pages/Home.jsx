import { Box } from '@mui/material'
import React from 'react'
import BotonPrincipal from '../components/Botones/BotonPrincipal'

const Home = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                backgroundImage: 'url("/assets/bg_home.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Box component={'div'}>
                <Box
                    component={'img'}
                    src='/assets/LogoTrivIA.svg'
                    sx={{ width: '30vw' }}
                />
                <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', height: '50%' }}>
                    <BotonPrincipal texto={'Jugar'} />
                    <BotonPrincipal texto={'Ranking'} />
                </Box>
            </Box>


        </Box>
    )
}

export default Home