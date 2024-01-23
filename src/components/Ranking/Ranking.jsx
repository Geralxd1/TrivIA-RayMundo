import React, { useState, useEffect } from 'react';
import ItemRanking from './ItemRanking'
import { Box, Paper } from '@mui/material'
import BotonPrincipal from '../Botones/BotonPrincipal'
import { getDatosRanking } from '../../services/apiService'

const Ranking = ({ cambiarPantalla }) => {
    const [rankingData, setRankingData] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await getDatosRanking();
                setRankingData(response || []); // Asegúrate de que response.data esté definido
            } catch (error) {
            alert(error)
            }
        };

        obtenerDatos();
        
    }, []);
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
                    {rankingData.map((item, index) => (
                        <ItemRanking
                            key={item.id}
                            puesto={index + 1}
                            nombre={item.nickname}
                            puntaje={item.score}
                        />
                    ))}
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