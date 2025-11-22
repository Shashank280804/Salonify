package com.salonify.service_offer_microservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/hi")
    public String HomeControllerHandler(){
        return "Service-offering microservice for salonify";
    }
}
