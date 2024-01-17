import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const Respuesta = ({ abrir }) => {
    const [open, setOpen] = useState(false);

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
            <DialogTitle id="alert-dialog-title">Tu respuesta fue: correcta</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Aqui ira la informacion de el lugar/plato turistico y una imagen referencial.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus endIcon={<NavigateNextIcon />}>
                    Continuar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Respuesta;
