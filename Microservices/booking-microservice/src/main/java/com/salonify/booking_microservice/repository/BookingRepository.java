package com.salonify.booking_microservice.repository;

import com.salonify.booking_microservice.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByCustomerId(Long customerId);
    List<Booking> findBySalonId(Long salonId);
}
