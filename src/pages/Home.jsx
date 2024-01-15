import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import BotonPrincipal from '../components/Botones/BotonPrincipal'
import CampoInput from '../components/CamposTexto/CampoInput'
import Slide from '@mui/material/Slide';
import TextoPregunta from '../components/Textos/TextoPregunta';
import Alternativas from '../components/Botones/Alternativas';

const Home = () => {
    const [game, setgame] = useState(false);
    const [triviaActiva, setTriviaActiva] = useState(false)
    const [nombreJugador, setNombreJugador] = useState('')
    const [checked, setChecked] = React.useState(false);
    //Clcik en boton Jugar
    const clickJugar = () => {
        setChecked(true)
        setgame(true)

    };

    //Click en  boton ranking
    const clickRanking = () => {
        console.log('Se hizo clic en el botón ranking');
        // Aquí puedes realizar otras acciones al hacer clic en el botón
    };
    const guardarName = () => {
        localStorage.setItem('nombreJugador', nombreJugador)
        console.log('Formulario enviado con nombre', nombreJugador);
        setTriviaActiva(true)
        console.log(localStorage.getItem('nombreJugador'))
    };
    const VolverHome = () => {
        setgame(false)
    };
    const cambio = (event) => {
        event.preventDefault();
        const nombre = event.target.value
        setNombreJugador(nombre)
    };
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
                alignItems: 'center',
                overflow:'hidden',
            }}>
            {!triviaActiva &&
                <Box component={'div'}>
                    <Box
                        component={'img'}
                        src='/assets/LogoCompuesto.svg'
                        sx={{ width: { xs: '50vh', md: '65vh' } }}
                    />
                    {game &&
                        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                            <Box component={'form'}
                                sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '0' }}>
                                <CampoInput placeholder={'Escribe tu nombre aqui'} onChange={cambio} />
                                <BotonPrincipal texto={'Guardar'} onClick={guardarName} />
                                <BotonPrincipal texto={'Volver Atras'} onClick={VolverHome} />
                            </Box>
                        </Slide>
                    }
                    {!game &&

                        <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '0' }}>
                            <BotonPrincipal texto={'Jugar'} onClick={clickJugar} />
                            <BotonPrincipal texto={'Ranking'} onClick={clickRanking} />
                        </Box>
                    }
                </Box>
            }
            {triviaActiva &&
                <Box component={'div'}>
                    <Box component={'img'}
                        src='/assets/LogoCompuesto.svg'
                        sx={{
                            position:'absolute',
                            width:{xs:'6rem',md:'9rem'},
                            top:{xs:'1vh',md:'3vh'},
                            left:{xs:'1vw',md:'3vw'}
                        }}
                    />
                    <Paper 
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center',
                        padding:'2rem',
                        background: 'rgba(254,254,254, 0.67)',
                        width: { xs: '90vw', md: '85vw' },
                        borderRadius:'50px',
                        height: { xs: '90vh', md: '85vh' },
                    }}>
                        <TextoPregunta texto={'¿Cual destino turistico se encuentra en Puno?'}/>
                        <Alternativas texto ={'Machu Picchu'}/>
                        <Alternativas texto ={'Lago Titicaca'}/>
                        <Alternativas texto ={'Cañon del Colca'}/>
                    </Paper>
                </Box>
            }
        </Box>
    )
}

export default Home