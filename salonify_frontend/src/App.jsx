import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import greenTheme from './theme/greenTheme';
import Home from './Customer/Home/Home';
import SalonDetails from './Customer/Salon/SalonDetails/SalonDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme = {greenTheme}>
     {/* <Home/> */}
     <SalonDetails/>
    </ThemeProvider>
    </>
  )
}

export default App
