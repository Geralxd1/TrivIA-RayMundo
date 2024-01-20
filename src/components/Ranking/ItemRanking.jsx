import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const ItemRanking = ({ puesto, nombre, puntaje }) => {

    //const [esPrimerPuesto] = useState(puesto === 1);
    //const imagenItem = esPrimerPuesto ? '/assets/ranking/puesto1.svg' : (puesto === 2 ? '/assets/ranking/puesto2.svg' : (puesto === 3 ? '/assets/ranking/puesto3.svg' : ''));

    return (
        <Box
            component={'div'}
            sx={{
                backgroundColor: '#ff5733',
                width: '100%',
                border: '2px solid black',
                borderRadius: '10px',
                display: 'flex',
                height: '3.25rem',
                alignItems: 'center',
                fontSize: { xs: '1.25rem', md: '2rem' },
                color: '#ffffff',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: 'black',
                position: 'relative',
                paddingX: { xs: '.75rem', md: '3rem' },
                marginY: '.5rem'
            }}
        >
            <Box component={'div'} sx={{display:'flex'}}>
                <Box component={'p'} sx={{ color: 'yellow' }}>
                    {puesto}
                </Box>
                <Box component={'p'} sx={{ marginLeft: { xs: '1rem', md: '2rem' } }}>
                    {nombre}
                </Box>
            </Box>
            <Box
                component={'div'}
                sx={{
                    backgroundColor: '#f17156',
                    display: 'flex',
                    alignItems: 'center',
                    height: '2.5rem',
                    borderRadius: '5px',
                    paddingX: {xs:'.2rem',md:'.75rem'},
                    position: 'absolute',
                    right: { xs: '.75rem', md: '3rem' },
                }}
            >
                <Box
                    component={'img'}
                    src='/assets/ranking/coin.svg'
                    sx={{
                        width: '1.85rem',
                        marginRight: {xs:'.2rem',md:'1rem'},
                    }}
                />
                {puntaje}
            </Box>
        </Box>
    );
};

export default ItemRanking;
