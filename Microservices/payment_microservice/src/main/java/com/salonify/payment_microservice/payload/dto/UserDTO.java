package com.salonify.payment_microservice.payload.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String fullName;
    private String email;
}
