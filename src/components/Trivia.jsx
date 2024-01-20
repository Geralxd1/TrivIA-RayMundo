import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextoPregunta from './Textos/TextoPregunta'
import Alternativas from './Botones/Alternativas'

const Trivia = ({ validarRespuestaExterno }) => {
    const [seconds, setSeconds] = useState(30);
    const [pregunta, setPregunta] = useState('');
    const [variablePregunta, setVariablePregunta] = useState('');
    const [alternativa1, setAlternativa1] = useState('');
    const [alternativa2, setAlternativa2] = useState('');
    const [alternativa3, setAlternativa3] = useState('');
    const [alternativas, setAlternativas] = useState(['', '', '']);
    const [respuestCorrecta, setRespuestaCorrecta] = useState('');
    // Se obtiene los datos de pregunta y respuesats de la api y se asignan supongo xde

    function obtenerDatos() {
        //por mientras 
        setAlternativa1('Puno');
        setAlternativa2('Lima');
        setAlternativa3('Cuzco');

    }
    // dar la pregunta segun la categoria ps
    function asignarPregunta() {
        setVariablePregunta('Lago Titicaca')
        //obtenemos categoria
        const categoria = localStorage.getItem('categoria');
        switch (categoria) {
            case 'destinosTuristicos':
                setPregunta(`¿En que departamento del Peru se encuentra ${variablePregunta}?`)
                break;
            case 'platosTipicos':
                setPregunta(`¿De que Departamento del Peru es natural ${variablePregunta}?`)
                break;
            case 'cambinacion':
                //implemntar logica de combinacion de llamada a os apis de forma
                break;
        }
    }

    //validar respuesta
    function validarRespuestaInterno(alternativa) {
        //se reconoce a la correcta y si coincide devolvemos bein sino ps no :v
        const puntajeActual = parseInt(localStorage.getItem('score')) 
        console.log('puntaje antes', puntajeActual)
        if(alternativa === 'Puno'){
            localStorage.setItem('score', puntajeActual+100)
            validarRespuestaExterno('correcto')
        }
        else{
            validarRespuestaExterno('incorrecto')
        }
    }
    //barajar alternativas
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    useEffect(() => {
        obtenerDatos();
        asignarPregunta();
        // Mezclar las alternativas al montar el componente
        const shuffledAlternativas = shuffleArray([...alternativas]);
        setAlternativas(shuffledAlternativas);
        //Temporizador
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        setAlternativas(shuffleArray([alternativa1, alternativa2, alternativa3]));
    }, [alternativa1, alternativa2, alternativa3]);
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
                        {seconds} sg
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
                        {localStorage.getItem('score')}
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
                    {localStorage.getItem('score')}
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
                <TextoPregunta texto={pregunta} />
                {alternativas.map((alternativa, index) => (
                    <Alternativas key={index} texto={alternativa} onClick={() => validarRespuestaInterno(alternativa)} />
                ))}
            </Paper>
        </Box>
    )
}

export default Trivia