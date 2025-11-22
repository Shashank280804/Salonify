package com.salonify.service_offer_microservice.controller;


import com.salonify.service_offer_microservice.model.ServiceOffering;
import com.salonify.service_offer_microservice.service.ServiceOfferingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/service-offering")
public class ServiceOfferingController {

    private final ServiceOfferingService serviceOfferingService;


    @GetMapping("/salon/{salonId}")
    public ResponseEntity<Set<ServiceOffering>> getServicesBySalonId(@PathVariable Long salonId, @RequestParam(required = false) Long categoryId){

        Set<ServiceOffering> serviceOfferings = serviceOfferingService.getAllServiceBySalonId(salonId,categoryId);

        return ResponseEntity.ok(serviceOfferings);


    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceOffering> getServicesById(@PathVariable Long id) throws Exception {

        ServiceOffering serviceOffering = serviceOfferingService.getServicesById(id);

        return ResponseEntity.ok(serviceOffering);



    }

    @GetMapping("/list/{id}")
    public ResponseEntity<List<ServiceOffering>> getServicesByIds(@PathVariable Set<Long> ids){

        List<ServiceOffering> serviceOfferings = serviceOfferingService.getServicesByIds(ids);

        return ResponseEntity.ok(serviceOfferings);


    }
}
