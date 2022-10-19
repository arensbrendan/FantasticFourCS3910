package com.example.commerce.domain.DTO;

import com.example.commerce.domain.Appointment;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AppointmentDTO {

    private Long id;
    private Long location_id;
    private LocalDateTime time;
    private String purpose;
    private Long customer_id;

    public AppointmentDTO(Appointment appointment) {
        this.id = appointment.getId();
        this.location_id = appointment.getLocation().getId();
        this.time = appointment.getTime();
        this.purpose = appointment.getPurpose();
        customer_id = appointment.getCustomer().getId();
    }
}


