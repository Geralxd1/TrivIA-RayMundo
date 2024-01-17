import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Home/>
    </ThemeProvider>
  )
}

export default App
