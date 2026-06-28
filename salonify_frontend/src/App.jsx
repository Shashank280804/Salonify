import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import greenTheme from './theme/greenTheme';
import Home from './Customer/Home/Home';
import SalonDetails from './Customer/Salon/SalonDetails/SalonDetails';
import Bookings from './Customer/Booking/Bookings';
import Notifications from './Customer/Notification/Notifications';
import Navbar from './Customer/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={greenTheme}>
        <Navbar />
        <Home/>
        {/* <SalonDetails/> */}
        {/* <Bookings/> */}
        {/* <Notifications/> */}
      </ThemeProvider>
    </>
  )
}

export default App
