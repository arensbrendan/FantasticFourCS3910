package com.example.commerce.domain.DTO;

import com.example.commerce.domain.Service;
import lombok.Data;

@Data
public class ServiceDTO {

    private Long id;
    private Long location_id;
    private String service;

    ServiceDTO(Service service) {
        this.id = service.getId();
        this.location_id = service.getLocation().getId();
        this.service = service.getService();
    }

}
