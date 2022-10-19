package com.example.commerce.domain.DTO;

import com.example.commerce.domain.Customer;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class CustomerDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private List<AppointmentDTO> appointments;

    public CustomerDTO(Customer customer) {
        this.id = customer.getId();
        this.firstName = customer.getFirstName();
        this.lastName = customer.getLastName();
        this.email = customer.getEmail();
        this.phone = customer.getPhone();
        this.appointments = customer.getAppointments().stream().map(AppointmentDTO::new).collect(Collectors.toList());
    }

}

