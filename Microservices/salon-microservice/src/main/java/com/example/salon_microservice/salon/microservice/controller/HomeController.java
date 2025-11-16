package com.example.salon_microservice.salon.microservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/hi")
    public String HomeControllerHandler(){
        return "Salon microservice for salonify";
    }
}
