import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
