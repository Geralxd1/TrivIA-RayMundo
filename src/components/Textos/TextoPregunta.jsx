import { Typography } from '@mui/material'
import React from 'react'

const TextoPregunta = ({texto}) => {
    return (
        <>
        <Typography variant='h2' component={'p'} color={'#571845'}
        sx={{fontFamily:'Patrick Hand', textAlign:'center', marginBottom:'2rem', display:{xs:'none', md:'flex'}}}
        >{texto}</Typography>

        <Typography variant='h3' component={'p'} color={'#571845'}
        sx={{fontFamily:'Patrick Hand', textAlign:'center', marginBottom:'2rem',display:{xs:'flex', md:'none'}}}
        >{texto}</Typography>
        </>
    )
}

export default TextoPregunta