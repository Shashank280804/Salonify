package com.example.salon_microservice.salon.microservice.mapper;

import com.example.salon_microservice.salon.microservice.Model.Salon;
import com.example.salon_microservice.salon.microservice.payload.dto.SalonDTO;

public class SalonMapper {

    public static SalonDTO mapToDTO(Salon salon){
        SalonDTO salonDTO = new SalonDTO();
        salonDTO.setId(salon.getId());
        salonDTO.setName(salon.getName());
        salonDTO.setAddress(salon.getAddress());
        salonDTO.setCity(salon.getCity());
        salonDTO.setEmail(salon.getEmail());
        salonDTO.setImages(salon.getImages());
        salonDTO.setOpenTime(salon.getOpenTime());
        salonDTO.setCloseTime(salon.getCloseTime());
        salonDTO.setOwnerId(salon.getOwnerId());
        salonDTO.setPhoneNumber(salon.getPhoneNumber());
        return salonDTO;
    }

}
