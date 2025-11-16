package com.example.salon_microservice.salon.microservice.service;

import com.example.salon_microservice.salon.microservice.Model.Salon;
import com.example.salon_microservice.salon.microservice.payload.dto.SalonDTO;
import com.example.salon_microservice.salon.microservice.payload.dto.UserDTO;

import java.util.List;

public interface SalonService {
    Salon createSalon(SalonDTO salon, UserDTO user);
    Salon updateSalon(SalonDTO salon, UserDTO user, Long salonId) throws Exception;

    List<Salon> getAllSalons();
    Salon getSalonById(Long salonId) throws Exception;

    Salon getSalonOwnerById(Long ownerId);

    List<Salon> searchSalonByCity(String city);

}
