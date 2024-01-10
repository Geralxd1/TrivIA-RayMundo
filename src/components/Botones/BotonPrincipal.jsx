import { Button } from '@mui/material'
import React from 'react'

const BotonPrincipal = ({ texto }) => {
    return (
        <Button variant='contained'
            sx={{
                bgcolor: '#ffc301',
                borderRadius: '2rem',
                color: '#1a1b00',
                fontFamily: 'Fredoka',
                fontSize: '2rem',
                width: {xs:'80vw', md:'25vw'},
                border: '1px solid black',
                borderBottomWidth: '0.2rem',
                paddingY:'0px',
                marginY:'.5rem',
                '&:hover': {
                    backgroundColor: '#E5AF00',
                    translate: '0 .1rem',
                },
            }}
        >
            {texto}
        </Button>
    )
}

export default BotonPrincipal