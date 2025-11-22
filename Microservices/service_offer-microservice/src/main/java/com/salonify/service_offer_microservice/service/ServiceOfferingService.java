package com.salonify.service_offer_microservice.service;

import com.salonify.service_offer_microservice.dto.SalonDTO;

public interface ServiceOfferingService {

    ServiceOfferingService createService(SalonDTO salonDto, ServiceDTO, Category categoryDTO);
}
