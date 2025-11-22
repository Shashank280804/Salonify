package com.salonify.category_microservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/hi")
    public String HomeControllerHandler(){
        return "category microservice for salonify";
    }
}
