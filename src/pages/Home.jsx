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
import Fin from '../components/Fin';

//Llamada a endpoints
const Home = () => {
    const [pantalla, setPantalla] = useState('inicio'); // Estado para controlar qué pantalla mostrar
    const [nombreJugador, setNombreJugador] = useState('')
    const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
    const [estadoRespuesta, setEstadoRespuesta] = useState('')
    const [ronda, setRonda] = useState(1);
    // Función para cambiar de pantalla
    const cambiarPantalla = (nuevaPantalla) => {
        setPantalla(nuevaPantalla);
    };
    //validar respeusta xde
    const validarRespuestaExterno = (validacion) => {
        console.log('puntaje en home', localStorage.getItem('score'))
        setEstadoRespuesta(validacion)
        cambiarPantalla('mensajeRespuesta')
    }
    //This is para contar rondas
    const continuar = () => {
        setRonda(ronda + 1);
        cambiarPantalla('trivia')
    };

    useEffect(() => {
        if(ronda===6){
            cambiarPantalla('fin')
        }
    }, [ronda]);

    //este pa reiniciar juego, si pasa :v
    const reiniciar = () =>{
        setRonda(1);
    }
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
            {pantalla === 'ingresarNombre' && (
                // Pantalla para ingresar el nombre y guardar
                <Nombre cambiarPantalla={cambiarPantalla} />
            )}
            {pantalla === 'elegirCategoria' && (
                // Pantalla para elegir la categoría
                <Categoria cambiarPantalla={cambiarPantalla} />
            )}
            {pantalla === 'trivia' && (
                // Pantalla de trivia con pregunta y alternativas
                <Trivia validarRespuestaExterno={validarRespuestaExterno} />
            )}
            {pantalla === 'mensajeRespuesta' && (
                <Respuesta estado={estadoRespuesta} continuar={continuar} />
            )}
            {pantalla === 'fin' && (
                <Fin/>
            )}
        </Box >
    )
}

export default Home