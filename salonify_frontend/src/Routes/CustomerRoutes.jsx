import React from 'react'
import SalonDashboard from '../Seller/SalonDashboard'
import Home from '../Customer/Home/Home'
import NotificationCard from '../Customer/Notification/NotificationCard'
import Bookings from '../Customer/Booking/Bookings'
import SalonDetails from '../Customer/Salon/SalonDetails/SalonDetails'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Customer/Navbar/Navbar'
import Notifications from '../Customer/Notification/Notifications'
import NotFound from '../NotFound/NotFound'

const CustomerRoutes = () => {
  return (
    <div>
         <Navbar />
      <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/notifications' element={<Notifications/>}/>
          <Route path = '/bookings' element={ <Bookings/>}/>
          <Route path = '/salon/:id' element={ <SalonDetails/>}/>
          <Route path = '*' element={ <NotFound/>}/>
        </Routes>
    </div>
  )
}

export default CustomerRoutes
