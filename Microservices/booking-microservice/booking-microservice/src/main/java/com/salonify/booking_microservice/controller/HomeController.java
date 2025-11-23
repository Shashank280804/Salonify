package com.salonify.booking_microservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/hi")
    public String HomeControllerHandler(){
        return "Booking microservice for salonify";
    }
}
