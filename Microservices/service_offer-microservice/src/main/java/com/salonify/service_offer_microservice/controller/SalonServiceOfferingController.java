package com.salonify.service_offer_microservice.controller;

import com.salonify.service_offer_microservice.dto.CategoryDTO;
import com.salonify.service_offer_microservice.dto.SalonDTO;
import com.salonify.service_offer_microservice.dto.ServiceDTO;
import com.salonify.service_offer_microservice.model.ServiceOffering;
import com.salonify.service_offer_microservice.service.ServiceOfferingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/service-offering/salon-owner")
public class SalonServiceOfferingController {

    private final ServiceOfferingService serviceOfferingService;


    @PostMapping
    public ResponseEntity<ServiceOffering> createService(@RequestBody ServiceDTO serviceDTO){
        SalonDTO salonDTO = new SalonDTO();
        salonDTO.setId(1L);

        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(serviceDTO.getCategory());
        ServiceOffering serviceOfferings = serviceOfferingService.createService(salonDTO,serviceDTO,categoryDTO);

        return ResponseEntity.ok(serviceOfferings);


    }

    @PostMapping("/{id}")
    public ResponseEntity<ServiceOffering> updateService(@PathVariable Long id, @RequestBody ServiceOffering serviceOffering) throws Exception {
        SalonDTO salonDTO = new SalonDTO();
        salonDTO.setId(1L);

        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(1L);
        ServiceOffering serviceOfferings = serviceOfferingService.updateService(id,serviceOffering);

        return ResponseEntity.ok(serviceOfferings);


    }
}
