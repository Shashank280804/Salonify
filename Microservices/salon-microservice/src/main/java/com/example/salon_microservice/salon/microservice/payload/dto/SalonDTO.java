package com.example.salon_microservice.salon.microservice.payload.dto;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import lombok.Data;

import java.time.LocalTime;
import java.util.List;

@Data
public class SalonDTO {

    private Long id;


    private String name;


    private List<String> images;


    private String email;

    private String address;


    private String phoneNumber;


    private String city;


    private Long ownerId;


    private LocalTime openTime;


    private LocalTime closeTime;


}
