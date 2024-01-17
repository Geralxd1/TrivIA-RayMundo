import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import lugares from "../../assets/Lugares.json"
import { Box } from '@mui/material';

const Respuesta = ({ abrir, estado, onClick }) => {
    const [open, setOpen] = useState(false);
    const [lugar, setLugar] = useState('');
    const [datosLugar, setDatosLugar] = useState({});


    useEffect(() => {
        if (abrir) {
            setOpen(true);
        }
    }, [abrir]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Tu respuesta fue: {estado}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {lugares["Cataratas de Gocta"].info}
                    <Box component={'img'}
                        src={lugares["Cataratas de Gocta"].url}
                        sx={{
                            width:'100%',
                            border:'2px solid black',
                            marginTop:'1rem'
                        }}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {setOpen(false),onClick('next')}} autoFocus endIcon={<NavigateNextIcon />}>
                    Continuar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Respuesta;
