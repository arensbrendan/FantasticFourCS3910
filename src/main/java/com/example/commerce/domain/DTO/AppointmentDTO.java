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

    private String name;

    private String email;

    public AppointmentDTO(Appointment appointment) {
        this.id = appointment.getId();
        this.location_id = appointment.getLocation().getId();
        this.time = appointment.getTime();
        this.purpose = appointment.getPurpose();
        this.name = appointment.getName();
        this.email = appointment.getEmail();
    }
}


