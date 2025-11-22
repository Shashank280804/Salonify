package com.salonify.service_offer_microservice.service.impl;

import com.salonify.service_offer_microservice.dto.CategoryDTO;
import com.salonify.service_offer_microservice.dto.SalonDTO;
import com.salonify.service_offer_microservice.dto.ServiceDTO;
import com.salonify.service_offer_microservice.model.ServiceOffering;
import com.salonify.service_offer_microservice.repository.ServiceOfferingRepository;
import com.salonify.service_offer_microservice.service.ServiceOfferingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ServiceOfferingServiceImpl implements ServiceOfferingService {

    private final ServiceOfferingRepository serviceOfferingRepository;

    @Override
    public ServiceOffering createService(SalonDTO salonDto, ServiceDTO serviceDTO, CategoryDTO categoryDTO) {
        ServiceOffering serviceOffering = new ServiceOffering();
        serviceOffering.setImage(serviceDTO.getImage());
        serviceOffering.setName(serviceDTO.getName());
        serviceOffering.setDescription(serviceDTO.getDescription());
        serviceOffering.setCategoryId(serviceDTO.getCategory());
        serviceOffering.setDuration(serviceDTO.getDuration());
        serviceOffering.setPrice(serviceDTO.getPrice());
        serviceOffering.setSalonId(serviceDTO.getSalonId());
        return serviceOfferingRepository.save(serviceOffering);
    }

    @Override
    public ServiceOffering updateService(Long serviceId, ServiceOffering service) throws Exception {
        ServiceOffering serviceOffering = serviceOfferingRepository.findById(serviceId).orElse(null);

        if(serviceOffering == null){
            throw  new Exception("Service does not exist with id "+ serviceId);
        }

        serviceOffering.setImage(service.getImage());
        serviceOffering.setName(service.getName());
        serviceOffering.setDescription(service.getDescription());
        serviceOffering.setDuration(service.getDuration());
        serviceOffering.setPrice(service.getPrice());
        return serviceOfferingRepository.save(serviceOffering);
    }

    @Override
    public Set<ServiceOffering> getAllServiceBySalonId(Long salonId, Long categoryId) {
        Set<ServiceOffering> services = serviceOfferingRepository.findBySalonId(salonId);

        if(categoryId != null){
            services = services.stream().filter((service)-> service.getCategoryId() != null && service.getCategoryId() == categoryId).collect(Collectors.toSet());


        }
        return  services;

    }

    @Override
    public List<ServiceOffering> getServicesByIds(Set<Long> ids) {
        return serviceOfferingRepository.findAllById(ids);
    }

    @Override
    public ServiceOffering getServicesById(Long id) throws Exception {
        ServiceOffering serviceOffering = serviceOfferingRepository.findById(id).orElse(null);

        if(serviceOffering == null){
            throw  new Exception("Service does not exist with id "+ id);
        }
        return serviceOffering;

    }
}
