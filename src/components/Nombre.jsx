import { Box, Slide, Snackbar, SnackbarContent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CampoInput from './CamposTexto/CampoInput';
import BotonPrincipal from './Botones/BotonPrincipal';

const Nombre = ({ cambiarPantalla }) => {
    const [nombre, setNombre] = useState('');
    const [checked, setChecked] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    function handleSnackbarClose() {
        setSnackbarOpen(false);
    }

    function guardarNombre() {
        // Validar que el nombre no esté vacío y no contenga espacios
        if (nombre.trim() === '' || nombre.includes(' ')) {
            // Muestra el Snackbar con el mensaje de error
            setSnackbarOpen(true);
            return;
        }

        // Se almacena localmente el nombre de jugador y se inicia el score en 0
        localStorage.setItem('nombreJugador', nombre);
        localStorage.setItem('score', 0);

        // Cambiamos pantalla a elegir categoría
        cambiarPantalla('elegirCategoria');
    }
    function handleKeyDown(event) {
        // Si se presiona Enter, guarda el nombre
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita que se envíe el formulario por defecto
            guardarNombre();
        }
    }
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <Box component={'div'}>
            <Box
                component={'img'}
                src='/assets/LogoCompuesto.svg'
                sx={{ width: { xs: '50vh', md: '65vh' } }}
            />
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Box
                    component={'form'}
                    sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '0' }}
                >
                    <CampoInput
                        placeholder={'Escribe tu nombre aquí'}
                        onChange={(e) => setNombre(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <BotonPrincipal texto={'Guardar'} onClick={() => guardarNombre()} />
                    <BotonPrincipal texto={'Volver Atrás'} onClick={() => cambiarPantalla('inicio')} />
                </Box>
            </Slide>
            {/* Snackbar para mostrar mensajes de error */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000} // Opcional: ajusta la duración del Snackbar
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{
                    background: 'red',
                    borderRadius: '8px'
                }}
            >
                <SnackbarContent
                    message="Por favor, ingresa un nombre válido sin espacios."
                    action={null}
                    sx={{
                        background: 'red',
                        fontSize: '1.25rem',
                        textAlign: 'center',
                        lineHeight:'normal'
                    }}
                />
            </Snackbar>
        </Box>
    );
};

export default Nombre;
