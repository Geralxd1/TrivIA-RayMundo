import React from 'react'
import { Box, Button } from '@mui/material'
const BotonCategoria = ({ texto, onClick }) => {
    return (
        <Box component={'div'}
            sx={{
                bgcolor: '#C7003A',
                borderRadius: '2rem',
                color: '#ffffff',
                fontFamily: 'Fredoka',
                fontSize: '1.5rem',
                width: { xs: '80vw', md: '50vw' },
                border: '1px solid black',
                borderBottomWidth: '0.2rem',
                paddingY: '0px',
                marginY: '.25rem',
                textAlign:'center'
            }}
            onClick={onClick}
        >
            {texto}
        </Box>
    )
}

export default BotonCategoria