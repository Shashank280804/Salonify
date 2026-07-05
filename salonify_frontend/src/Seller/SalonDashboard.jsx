import React from 'react'
import SalonDrawerList from '../Customer/Salon/components/SalonDrawerList'
import Navbar from '../Admin Salon/Navbar'
import BookingTables from '../Customer/Salon/Booking/BookingTable'

const SalonDashboard = () => {
  return (
    <div className='min-h-screen'>
      <Navbar DrawerList={SalonDrawerList}/>
      <section className='lg:flex lg:h-[90vh]'>
        <div className='hidden lg:block h-full'>
          <SalonDrawerList/>
        </div>
        <div className='p-10 w-ful lg:w-[80%] overflow-y-auto'>
          <BookingTables/>
        </div>
      </section>
    </div>
  )
}

export default SalonDashboard
