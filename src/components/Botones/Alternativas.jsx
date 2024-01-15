import React from 'react'
import { Button } from '@mui/material'

const Alternativas = ({texto, onClick}) => {
    return (
        <Button variant='contained'
            sx={{
                background:'linear-gradient(90deg, rgba(255,222,89,1) 0%, rgba(255,145,77,1) 100%);',
                borderRadius: '2rem',
                color: '#1a1b00',
                fontFamily: 'Fredoka',
                fontSize: {xs:'1.35rem', md:'1.75rem'},
                width: {xs:'80vw', md:'45vw'},
                border: '1px solid black',
                borderBottomWidth: '0.2rem',
                paddingY:'5px',
                marginY:'.75rem',
                '&:hover': {
                    background: '#FF914D',
                    translate: '0 .1rem',
                },
            }}
            onClick={onClick}
        >
            {texto}
        </Button>
    )
}

export default Alternativas