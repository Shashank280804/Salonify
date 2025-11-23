package com.salonify.booking_microservice.controller;

import com.salonify.booking_microservice.dto.BookingRequest;
import com.salonify.booking_microservice.dto.SalonDTO;
import com.salonify.booking_microservice.dto.UserDTO;
import com.salonify.booking_microservice.model.Booking;
import com.salonify.booking_microservice.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/bookings")
public class BookingController {

    private final BookingService bookingService;

    public ResponseEntity<Booking> createBooking(@RequestParam Long salonId, @RequestBody BookingRequest bookingRequest){

        UserDTO user = new UserDTO();

        user.setId(1L);

        SalonDTO salon = new SalonDTO();
        salon.setId(salonId);

        return null;

    }

}
