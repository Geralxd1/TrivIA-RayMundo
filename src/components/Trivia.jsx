import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextoPregunta from './Textos/TextoPregunta'
import Alternativas from './Botones/Alternativas'

const Trivia = ({ eleccionAlternativa }) => {
    const [tiempoRestante, setTiempoRestante] = useState(10);
    const [eleccionRealizada, setEleccionRealizada] = useState(false);
    const [score, setScore] = useState(0);
    const obtenerScore = () => {
        const scoreString = sessionStorage.getItem('score');
        return scoreString ? parseInt(scoreString, 10) : 0;
    };
    useEffect(() => {
        // Obtener el score almacenado en sessionStorage al montar el componente
        const scoreString = sessionStorage.getItem('score');
        const initialScore = scoreString ? parseInt(scoreString, 10) : 0;
        setScore(initialScore);

        // Actualizar el score en el estado cada vez que cambie en sessionStorage
        const scoreChangeListener = (event) => {
            if (event.key === 'score') {
                setScore(parseInt(event.newValue, 10));
            }
        };

        // Agregar un event listener para detectar cambios en sessionStorage
        window.addEventListener('storage', scoreChangeListener);

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('storage', scoreChangeListener);
        };
    }, []);
    useEffect(() => {
        obtenerScore()
        const temporizador = setInterval(() => {
            setTiempoRestante((prevTiempo) => (prevTiempo > 0 ? prevTiempo - 1 : 0));
        }, 1000);

        return () => clearInterval(temporizador);
    }, []);

    const handleEleccion = (alternativa) => {
        if (!eleccionRealizada) {
            setEleccionRealizada(true);
            clearInterval(temporizador);
            eleccionAlternativa(alternativa);
        }
    };
    useEffect(() => {
        if (tiempoRestante === 0 && !eleccionRealizada) {
            eleccionAlternativa(''); // Envía un valor vacío si no se hizo elección
        }
    }, [tiempoRestante, eleccionRealizada, eleccionAlternativa]);
    return (
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
                <Box component={'div'} sx={{ position: 'relative', top: '1rem' }}>
                    <Box component={'img'}
                        src='/assets/preguntas/reloj.svg'
                        sx={{
                            width: { xs: '8rem', md: '12rem' },
                        }}
                    />
                    <Box component={'span'}
                        sx={{
                            position: 'absolute',
                            top: { xs: '.65rem', md: '1.5rem' },
                            left: { xs: '3.5rem', md: '6rem' },
                            color: '#ffffff',
                            WebkitTextStrokeWidth: '1px',
                            WebkitTextStrokeColor: 'black',
                            fontSize: { xs: '1.65rem', md: '2rem' }
                        }}>
                        {tiempoRestante < 10 ? `00:0${tiempoRestante}` : `00:${tiempoRestante}`}
                    </Box>
                </Box>
                <Box component={'div'} sx={{ position: 'relative', top: '1rem', display: { xs: 'none', md: 'block' } }}>
                    <Box component={'img'}
                        src='/assets/preguntas/score.svg'
                        sx={{
                            width: { xs: '8rem', md: '12rem' },
                        }}
                    />
                    <Box component={'span'}
                        sx={{
                            position: 'absolute',
                            top: '2.75rem',
                            left: '4rem',
                            color: '#ffffff',
                            WebkitTextStrokeWidth: '1px',
                            WebkitTextStrokeColor: 'black',
                            fontSize: '2rem'
                        }}>
                        {score}
                    </Box>
                </Box>
            </Box>
            <Box component={'div'} sx={{ position: 'absolute', bottom: '.25rem', left: '0rem', display: { xs: 'block', md: 'none' } }}>
                <Box component={'img'}
                    src='/assets/preguntas/score.svg'
                    sx={{
                        width: { xs: '10rem', md: '12rem' },
                    }}
                />
                <Box component={'span'}
                    sx={{
                        position: 'absolute',
                        bottom: '.5rem',
                        left: '2.5rem',
                        color: '#ffffff',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: 'black',
                        fontSize: '1.75rem'
                    }}>
                    {score}
                </Box>
            </Box>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    background: 'rgba(254,254,254, 0.67)',
                    width: { xs: '90vw', md: '85vw' },
                    borderRadius: '50px',
                    height: { xs: '90vh', md: '85vh' },
                }}>
                <TextoPregunta texto={'¿Cual destino turistico se encuentra en Puno?'} />
                <Alternativas texto={'Machu Picchu'} onClick={() => eleccionAlternativa('a')} />
                <Alternativas texto={'Lago Titicaca'} onClick={() => eleccionAlternativa('b')} />
                <Alternativas texto={'Cañon del Colca'} onClick={() => eleccionAlternativa('c')} />
            </Paper>
        </Box>
    )
}

export default Trivia