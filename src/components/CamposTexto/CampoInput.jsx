import { Input, TextField } from '@mui/material'
import React from 'react'

const CampoInput = ({ placeholder, onChange }) => {
    return (
        <Input
            sx={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '2rem',
                border: '1px solid black',
                padding: '.15rem 2rem',
                fontSize: '1.5rem',
                width: { xs: '80vw', md: '30vw' },
            }}
            placeholder={placeholder}
            inputProps={{
                pattern: '^[a-zA-Z0-9]{0,10}$',
            }}
            required
            onChange={onChange}
        ></Input>
    )
}

export default CampoInput