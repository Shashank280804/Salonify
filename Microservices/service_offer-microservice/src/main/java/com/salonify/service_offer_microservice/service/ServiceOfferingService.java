package com.salonify.service_offer_microservice.service;

import com.salonify.service_offer_microservice.dto.CategoryDTO;
import com.salonify.service_offer_microservice.dto.SalonDTO;
import com.salonify.service_offer_microservice.dto.ServiceDTO;
import com.salonify.service_offer_microservice.model.ServiceOffering;

import java.util.List;
import java.util.Set;

public interface ServiceOfferingService {

    ServiceOffering createService(SalonDTO salonDto, ServiceDTO serviceDTO, CategoryDTO categoryDTO);

    ServiceOffering updateService(Long serviceId, ServiceOffering service) throws Exception;

    Set<ServiceOffering> getAllServiceBySalonId(Long salonId,Long categoryId);

    List<ServiceOffering> getServicesByIds(Set<Long> ids);

    ServiceOffering getServicesById(Long id) throws Exception;
}
