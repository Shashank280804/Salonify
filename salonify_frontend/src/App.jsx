import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import greenTheme from './theme/greenTheme';
import Home from './Customer/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme = {greenTheme}>
     <Home/>
    </ThemeProvider>
    </>
  )
}

export default App
