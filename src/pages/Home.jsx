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
import Inicio from '../components/Inicio';
import Ranking from '../components/Ranking/Ranking';
import Nombre from '../components/Nombre';
import Trivia from '../components/Trivia';
import Respuesta from '../components/Dialogo/Respuesta';
import Categoria from '../components/Categoria';

//Llamada a endpoints
const Home = () => {
    const [pantalla, setPantalla] = useState('inicio'); // Estado para controlar qué pantalla mostrar
    const [nombreJugador, setNombreJugador] = useState('')
    const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
    // Función para cambiar de pantalla
    const cambiarPantalla = (nuevaPantalla) => {
        setPantalla(nuevaPantalla);
    };

    // Función para iniciar el juego
    const iniciarJuego = (nombre) => {
        console.log('esats en juego con nombre', nombre)
        setNombreJugador(nombre)
        guardarScore(0)
        cambiarPantalla('categoria')
        // Lógica para iniciar el juego con el nombre proporcionado
        // Aquí podrías manejar el inicio del juego, cambiar la pantalla, etc.
    };


    ///
    const [game, setgame] = useState(false);
    const [triviaActiva, setTriviaActiva] = useState(false)

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
    // Para guardar el score
    const guardarScore = (score) => {
        sessionStorage.setItem('score', score.toString());
    };

    // Para obtener el score
    const obtenerScore = () => {
        const scoreString = sessionStorage.getItem('score');
        return scoreString ? parseInt(scoreString, 10) : 0;
    };

    // Para actualizar el score
    const actualizarScore = (puntos) => {
        const scoreActual = obtenerScore();
        const nuevoScore = scoreActual + puntos;
        guardarScore(nuevoScore);
    };

    // Para borrar el score al finalizar la sesión
    const reiniciarScore = () => {
        sessionStorage.removeItem('score');
    };

    const preguntarDeNuevo = (algo) =>{
        if(algo === 'next'){
            cambiarPantalla('trivia')
        }
    }
    const eleccionAlternativa = (alternativa) => {
        actualizarScore(100)
        console.log(sessionStorage.getItem('score'))
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
            case '':
                console.log('no se envio nada');
                break;
            default:
        }
        setMostrarRespuesta(true);
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
            {pantalla === 'inicio' && (
                // Pantalla de inicio con botones para jugar y ver el ranking
                <Inicio cambiarPantalla={cambiarPantalla} />
            )}

            {pantalla === 'ranking' && (
                // Pantalla de ranking
                <Ranking cambiarPantalla={cambiarPantalla} />
            )}
            {pantalla === 'juego' && (
                // Pantalla para ingresar el nombre y guardar
                <Nombre cambiarPantalla={cambiarPantalla} iniciarJuego={iniciarJuego} />
            )}
            {pantalla === 'categoria' && (
                // Pantalla para elegir la categoría
                <Categoria cambiarPantalla={cambiarPantalla}/>
            )}

            {pantalla === 'trivia' && (
                // Pantalla de trivia con pregunta, alternativas y resultados
                <Trivia eleccionAlternativa={eleccionAlternativa} />
            )}
            {mostrarRespuesta && <Respuesta abrir={true} estado={'Correcta'} onClick={preguntarDeNuevo} />}
        </Box >
    )
}

export default Home