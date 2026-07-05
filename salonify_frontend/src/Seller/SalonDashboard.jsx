import React from 'react'
import SalonDrawerList from '../Customer/Salon/components/SalonDrawerList'
import Navbar from '../Admin Salon/Navbar'
import BookingTables from '../Customer/Salon/Booking/BookingTable'
import ServiceTables from '../Customer/Salon/Services/ServiceTable'
import CategoryTables from '../Customer/Salon/Category/CategoryTable'
import Category from '../Customer/Salon/Category/Category'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Salon/Home/HomePage'
import CreateServiceForm from '../Customer/Salon/Services/CreateServiceForm'
import Notifications from '../Customer/Notification/Notifications'
import TransactionTables from '../Customer/Salon/Transaction/TransactionTables'
import Payment from '../Customer/Salon/Payment/Payment'
import SalonRoutes from '../Routes/SalonRoutes'

const SalonDashboard = () => {
  return (
    <div className='min-h-screen'>
      <Navbar DrawerList={SalonDrawerList}/>
      <section className='lg:flex lg:h-[90vh]'>
        <div className='hidden lg:block h-full'>
          <SalonDrawerList/>
        </div>
        <div className='p-10 w-ful lg:w-[80%] overflow-y-auto'>
          <SalonRoutes/>
        </div>
      </section>
    </div>
  )
}

export default SalonDashboard
