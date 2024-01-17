import React from 'react'
import ItemRanking from './ItemRanking'
import { Box, Paper } from '@mui/material'
import BotonPrincipal from '../Botones/BotonPrincipal'

const Ranking = ({ cambiarPantalla }) => {
    return (
        <Box component={'div'} sx={{}}>
            <Box component={'div'}
                sx={{
                    width: '90vw',
                    position: 'absolute',
                    top: { xs: '-1rem', md: '-1rem' },
                    left: '5vw',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <Box component={'img'}
                    src='/assets/LogoCompuesto.svg'
                    sx={{
                        width: { xs: '6rem', md: '9rem' },
                    }}
                />
                <Box component={'img'}
                    src='/assets/ranking/titulo.svg'
                    sx={{
                        width: { xs: '15rem', md: '20rem' },
                    }}
                />
                <Box component={'img'}
                    src='/assets/ranking/estrellas.svg'
                    sx={{
                        width: { xs: '6rem', md: '9rem' },
                        display: { xs: 'none', md: 'flex' }
                    }}
                />
            </Box>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3rem 2rem',
                    background: 'rgba(254,254,254, 0.67)',
                    width: { xs: '90vw', md: '85vw' },
                    borderRadius: '50px',
                    height: { xs: '90vh', md: '85vh' },
                    overflow: 'hidden', // Utilizamos 'hidden' para ocultar el desbordamiento del Paper
                }}
            >
                <Box
                    sx={{ width: '100%' }}
                    style={{
                        overflowY: 'scroll', // Habilita el desbordamiento vertical solo para este contenedor
                    }}
                >
                    <ItemRanking puesto={1} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={2} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={3} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={4} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={5} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={1} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={2} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={3} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={4} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={5} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={1} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={2} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={3} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={4} nombre={'Geral'} puntaje={'10000'} />
                    <ItemRanking puesto={5} nombre={'Geral'} puntaje={'10000'} />
                </Box>
            </Paper>
            <Box component={'div'}
                sx={{
                    width: '90vw',
                    position: 'absolute',
                    bottom: { xs: '1rem', md: '2rem' },
                    left: '5vw',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <BotonPrincipal texto={'VOLVER AL MENU'} onClick={() => cambiarPantalla('inicio')} />
            </Box>
        </Box>
    )
}

export default Ranking