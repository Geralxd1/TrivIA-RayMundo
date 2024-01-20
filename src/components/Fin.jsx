import React, { useState, useEffect } from 'react';
import { Box, Paper, Slide, Typography } from '@mui/material';
import BotonPrincipal from './Botones/BotonPrincipal';

const Fin = () => {
    const [checked, setChecked] = useState(false);
    const [nombre, setNombre] = useState('');
    const [score, setScore] = useState('');

    useEffect(() => {
        setNombre(localStorage.getItem('nombreJugador'))
        setScore(localStorage.getItem('score'))
        setChecked(true)
    }, []);

    return (
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Box component={'div'}>
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
                </Box>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem 2rem',
                        background: 'rgba(254,254,254, 0.67)',
                        width: { xs: '90vw', md: '85vw' },
                        borderRadius: '50px',
                        height: { xs: '90vh', md: '85vh' },
                    }}
                >
                    <Box component={'span'}
                        sx={{
                            fontSize: { xs: '3rem', md: '6rem' },
                            lineHeight: 'normal',
                            color: '#26bf00',
                            WebkitTextStrokeWidth: '1px',
                            WebkitTextStrokeColor: '#fee868',
                            textAlign:'center'
                        }}
                    >¡Felicidades, {nombre}!</Box>

                    <Box component={'span'}
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2.5rem' },
                            lineHeight: 'normal',
                            color: '#000000',
                            textAlign: 'center'
                        }}
                    >
                        ¡Has completado TrivIA RayMundo con éxito!<br />
                        Tu puntaje final es:<br />
                        <Box component={'span'}
                            sx={{
                                fontSize: { xs: '3rem', md: '4rem' },
                                lineHeight: 'normal',
                                color: '#26bf00',
                                WebkitTextStrokeWidth: '1px',
                                WebkitTextStrokeColor: '#fee868',
                            }}>
                            {score} <br />
                        </Box>
                        
                        ¡Eres un verdadero genio! 🌟<br />
                        Gracias por jugar y aprender con nosotros. ¡Esperamos verte de nuevo pronto!
                    </Box>
                    <Box component={'div'}
                    sx={{
                        width:'100%',
                        display:'flex',
                        justifyContent:'space-around',
                        alignItems:'center',
                        marginTop:'1.5rem',
                        flexDirection:{xs:'column', md:'row'}
                    }}>
                            <BotonPrincipal texto={'Ver Ranking'}/>
                            <BotonPrincipal texto={'Ir a inicio'}/>
                    </Box>
                </Paper>
            </Box>

        </Slide>
    )
}

export default Fin