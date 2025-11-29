package com.salonify.payment_microservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/hi")
    public String HomeControllerHandler(){
        return "Payment microservice for salonify";
    }
}
