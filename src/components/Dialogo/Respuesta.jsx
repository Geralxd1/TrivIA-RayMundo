import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import lugares from "../../assets/Lugares.json"
import comidas from "../../assets/Comidas.json"
import { Box, Paper, Slide, Typography } from '@mui/material';
import Alternativas from '../Botones/Alternativas';
import BotonPrincipal from '../Botones/BotonPrincipal';

const Respuesta = ({ estado, continuar, categoria, variable }) => {
    const [checked, setChecked] = useState(false);
    const [variableRespuesta, setVariableRespuesta] = useState('');
    const [datosLugar, setDatosLugar] = useState({});
    const [categoriaVariable, setCategoriaVariable] = useState('');
    useEffect(() => {
        setVariableRespuesta(variable)
        setCategoriaVariable(categoria)
        //condicional para asignacion de los datos informativos

        if(categoria === 'lugares'){
            setDatosLugar(lugares['Santuario Nacional de Ampay'])
        } else if(categoria === 'comidas'){
            setDatosLugar(comidas[variable])
        }  
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
                    <Box component={'div'} sx={{ position: 'relative', top: '1rem' }}>
                        <Box component={'img'}
                            src='/assets/preguntas/score.svg'
                            sx={{
                                width: { xs: '8rem', md: '12rem' },
                            }}
                        />
                        <Box component={'span'}
                            sx={{
                                position: 'absolute',
                                top: { xs: '1.75rem', md: '2.75rem' },
                                left: { xs: '2.75rem', md: '4rem' },
                                color: '#ffffff',
                                WebkitTextStrokeWidth: '1px',
                                WebkitTextStrokeColor: 'black',
                                fontSize: { xs: '1.65rem', md: '2rem' }
                            }}>
                            {localStorage.getItem('score')}
                        </Box>
                    </Box>
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
                        }}
                    >¡{estado.toUpperCase()}!</Box>
                    <Alternativas texto={variableRespuesta} />
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Paper
                            sx={{
                                backgroundColor: '#ffde59',
                                padding: '1rem',
                                marginRight: '1rem',
                                width:'100%'
                            }}>
                            <Typography variant='body' sx={{display:{xs:'flex', md:'none'}}}>
                                {datosLugar.info}
                            </Typography>
                            <Typography variant='h5' sx={{display:{xs:'none', md:'flex'}}}>
                                {datosLugar.info}
                            </Typography>
                        </Paper>
                        <Box component={'img'}
                            src={datosLugar.url}
                            sx={{
                                maxWidth: {xs:'70%', md:'40%'},
                                height: { xs: '20vh', md: '70%' },
                                border: '2px solid black',
                                marginTop: '1rem'
                            }} />
                    </Box>
                    <BotonPrincipal texto={'Continuar'} onClick={() => continuar()} />
                </Paper>
            </Box>

        </Slide>

    );
};

export default Respuesta;
