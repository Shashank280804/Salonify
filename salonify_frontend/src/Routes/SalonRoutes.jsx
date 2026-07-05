import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Salon/Home/HomePage'
import ServiceTables from '../Customer/Salon/Services/ServiceTable'
import CreateServiceForm from '../Customer/Salon/Services/CreateServiceForm'
import BookingTables from '../Customer/Salon/Booking/BookingTable'
import Category from '../Customer/Salon/Category/Category'
import TransactionTables from '../Customer/Salon/Transaction/TransactionTables'
import Payment from '../Customer/Salon/Payment/Payment'
import Notifications from '../Customer/Notification/Notifications'

const SalonRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServiceTables />} />
            <Route path="/add-services" element={<CreateServiceForm />} />
            <Route path="/bookings" element={<BookingTables />} />
            <Route path="/category" element={<Category />} />
            <Route path="/transaction" element={<TransactionTables />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/notifications" element={<Notifications />} />
        </Routes>
    )
}

export default SalonRoutes
