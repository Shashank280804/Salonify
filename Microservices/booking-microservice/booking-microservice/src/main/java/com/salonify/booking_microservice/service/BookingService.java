package com.salonify.booking_microservice.service;

import com.salonify.booking_microservice.domain.BookingStatus;
import com.salonify.booking_microservice.dto.BookingRequest;
import com.salonify.booking_microservice.dto.SalonDTO;
import com.salonify.booking_microservice.dto.ServiceDTO;
import com.salonify.booking_microservice.dto.UserDTO;
import com.salonify.booking_microservice.model.Booking;
import com.salonify.booking_microservice.model.SalonReport;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public interface BookingService {

    Booking createBooking(BookingRequest booking, UserDTO user, SalonDTO salon, Set<ServiceDTO> serviceDTOSet) throws Exception;

    List<Booking> getBookingsByCustomer(Long customerId);
    List<Booking>  getBookingBySalon(Long salonId);
    Booking getBookingByid(Long id) throws Exception;
    Booking updateBooking(Long bookingId, BookingStatus status);
//    void deleteBooking(Long bookingId);
    List<Booking> getBookingsByDate(LocalDate date,Long salonId);
    SalonReport getSalonReport(Long salonId);
}
