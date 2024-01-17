import { Box, FormControl, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BotonPrincipal from '../components/Botones/BotonPrincipal'
import CampoInput from '../components/CamposTexto/CampoInput'
import Slide from '@mui/material/Slide';
import TextoPregunta from '../components/Textos/TextoPregunta';
import Alternativas from '../components/Botones/Alternativas';
import { postUsername, getUserId, postScore } from '../services/apiService';
import ENDPOINTS from '../EndPoints/EndPoints';
import ItemRanking from '../components/Ranking/ItemRanking';

//Llamada a endpoints
const Home = () => {
    const [game, setgame] = useState(false);
    const [triviaActiva, setTriviaActiva] = useState(false)
    const [nombreJugador, setNombreJugador] = useState('')
    const [checked, setChecked] = React.useState(false);
    const [checkedHome, setCheckedHome] = React.useState(false);
    const [datosUsuario, setDatosUsuario] = useState({});
    const [alternativaSeleccionada, setAlternativaSeleccionada] = useState('');

    const [mostrarJuego, setMostrarJuego] = useState(false);
    const [mostrarRanking, setMostrarRanking] = useState(false);

    const comenzarJuego = () => {
        setMostrarJuego(true);
        setChecked(true);
        setMostrarRanking(false);
    };

    const verRanking = () => {
        setMostrarJuego(false);
        setMostrarRanking(true);
    };
    const eleccionAlternativa = (alternativa) => {
        switch (alternativa) {
            case 'a':
                console.log('se clickeo a');
                break;
            case 'b':
                console.log('se clickeo b');
                break;
            case 'c':
                console.log('se clickeo c');
                break;
            default:


        }
    }
    const handleUsernameSubmit = async () => {
        try {
            // Llamando a postUsername para enviar el nombre de usuario
            const result = await postUsername(nombreJugador);
            setDatosUsuario(result)
            console.log('Resultado de postUsername:', result);
        } catch (error) {
            console.error('Error al enviar el nombre de usuario desde el componente:', error);
        }
    };
    useEffect(() => {
        // Este bloque de código se ejecutará cada vez que se actualice el estado datosUsuario
        console.log('Estado actualizado de datosUsuario:', datosUsuario);
    }, [datosUsuario]);
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
    //Click en  boton guardar
    const guardarName = () => {
        sessionStorage.setItem('nombreJugador', nombreJugador)
        console.log('Formulario enviado con nombre', nombreJugador);
        handleUsernameSubmit()
        setMostrarJuego(false);
        setMostrarRanking(false);
        setTriviaActiva(true)
        console.log(sessionStorage.getItem('nombreJugador'))
    };
    const VolverHome = () => {
        setMostrarJuego(false);
        setMostrarRanking(false);
        setCheckedHome(true)
    };
    const cambio = (event) => {
        event.preventDefault();
        const nombre = event.target.value
        setNombreJugador(nombre)
    };

    useEffect(() => {
        setCheckedHome(true)
    }, []);
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
                overflow: 'hidden',
            }}>
            {!mostrarJuego && !mostrarRanking&& !triviaActiva&& (
                <Box component={'div'}>
                    <Box
                        component={'img'}
                        src='/assets/LogoCompuesto.svg'
                        sx={{ width: { xs: '50vh', md: '65vh' } }}
                    />
                    <Slide direction="up" in={checkedHome} mountOnEnter unmountOnExit>
                        <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '0' }}>
                            <BotonPrincipal texto={'Jugar'} onClick={comenzarJuego} />
                            <BotonPrincipal texto={'Ranking'} onClick={verRanking} />
                        </Box>
                    </Slide>
                </Box>
            )}
            {mostrarJuego && (
                <Box component={'div'}>
                    <Box
                        component={'img'}
                        src='/assets/LogoCompuesto.svg'
                        sx={{ width: { xs: '50vh', md: '65vh' } }}
                    />
                    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                        <Box component={'form'}
                            sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '0' }}>
                            <CampoInput placeholder={'Escribe tu nombre aqui'} onChange={cambio} />
                            <BotonPrincipal texto={'Guardar'} onClick={guardarName} />
                            <BotonPrincipal texto={'Volver Atras'} onClick={VolverHome} />
                        </Box>
                    </Slide>
                </Box>
            )}

            {mostrarRanking && (
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
                        <BotonPrincipal texto={'VOLVER AL MENU'} onClick={VolverHome} />
                    </Box>
                </Box>
            )
            }


            {
                triviaActiva &&
                <Box component={'div'}>
                    <Box component={'img'}
                        src='/assets/LogoCompuesto.svg'
                        sx={{
                            position: 'absolute',
                            width: { xs: '6rem', md: '9rem' },
                            top: { xs: '1vh', md: '3vh' },
                            left: { xs: '1vw', md: '3vw' }
                        }}
                    />
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
            }
        </Box >
    )
}

export default Home