import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextoPregunta from './Textos/TextoPregunta'
import Alternativas from './Botones/Alternativas'
import { getData } from '../services/apiService'

const Trivia = ({ validarRespuestaExterno }) => {
    const [respondido, setRespondido] = useState(false);
    const [seconds, setSeconds] = useState(15);
    const [variablePregunta, setVariablePregunta] = useState('');
    const [alternativa1, setAlternativa1] = useState('');
    const [alternativa2, setAlternativa2] = useState('');
    const [alternativa3, setAlternativa3] = useState('');
    const [alternativas, setAlternativas] = useState(['', '', '']);
    const [respuestCorrecta, setRespuestaCorrecta] = useState('');
    const [datos, setDatos] = useState({})
    const [pregunta, setPregunta] = useState('')
    const [categoria, setCategoria] = useState('')
    let categoria_comb = ''
    let respuestaBien = ''
    const obtenerDatos = async (cat) => {
        try {
            const response = await getData(cat);

            if (response) {
                setDatos(response)
                console.log(response)
                setAlternativa1(response.REGION1)
                setAlternativa2(response.REGION2)
                setAlternativa3(response.REGION3)
                setRespuestaCorrecta(response.REGION1)
                respuestaBien = response.REGION1
                asignarPregunta(response['REGION ALEATORIA'])

            } else {
            }
        } catch (error) {
            alert(error)
        }
    };

    // dar la pregunta según la categoría
    // dar la pregunta según la categoría
    // dar la pregunta según la categoría

    function asignarPregunta(vario) {
        const categoria = localStorage.getItem('categoria');
        // Nueva variable para almacenar la pregunta asignada
        let preguntaAsignada = '';
        let esDestino = categoria_comb

        switch (categoria) {
            case 'destinosTuristicos':
                preguntaAsignada = `¿En qué departamento del Peru se encuentra ${vario}?`;
                setCategoria('lugares')
                break;
            case 'platosTipicos':
                preguntaAsignada = `¿De dónde es originario el platillo conocido como ${vario}"?`;
                setCategoria('comidas')
                break;
            case 'combinacion':
                preguntaAsignada = esDestino ? `¿En qué departamento del Peru se encuentra ${vario}?` : `¿De dónde es originario el platillo conocido como ${vario}"?`;
                if(esDestino){
                    setCategoria('lugares')
                }else{
                    setCategoria('comidas')
                }

                break;
        }
        setPregunta(preguntaAsignada)
        // Seleccionar aleatoriamente una pregunta de la lista

    }

    // validar respuesta
    function validarRespuestaInterno(alternativa) {
        // Verifica si ya se ha respondido
        if (!respondido) {
            setRespondido(true);
            const puntajeActual = parseInt(localStorage.getItem('score')) || 0;

            if (alternativa === respuestCorrecta) {
                localStorage.setItem('score', puntajeActual + 100);
                validarRespuestaExterno('correcto', categoria, datos['REGION ALEATORIA'],respuestCorrecta);
            } else {
                validarRespuestaExterno('incorrecto', categoria, datos['REGION ALEATORIA'],respuestCorrecta);
            }
        }
    }

    // barajar alternativas
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        // Temporizador
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    // Si el tiempo se agota y no se ha respondido, marcar como respondido e enviar 'incorrecto'
                    if (!respondido) {
                        setRespondido(true);
                        validarRespuestaExterno('incorrecto', categoria, datos['REGION ALEATORIA'],respuestCorrecta);
                    }
                    return 0;
                }
            });
        }, 1000);

        // Cleanup: detener el temporizador cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [respondido]);

    useEffect(() => {
        // Mezclar las alternativas al montar el componente
        const shuffledAlternativas = shuffleArray([alternativa1, alternativa2, alternativa3]);
        setAlternativas(shuffledAlternativas);
    }, [alternativa1, alternativa2, alternativa3]);

    useEffect(() => {
        const categoria = localStorage.getItem('categoria');
        if (categoria === 'destinosTuristicos')
            obtenerDatos('turistico_estruc')
        else if (categoria === 'platosTipicos')
            obtenerDatos('comida_estruc')
        else if (categoria === 'combinacion') {
            const esDestino = Math.random() < 0.5;
            const categoriaElegida = esDestino ? 'turistico_estruc' : 'comida_estruc';
            categoria_comb = esDestino ? true : false
            obtenerDatos(categoriaElegida)
        }
    }, []);

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