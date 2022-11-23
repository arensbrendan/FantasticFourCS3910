package com.example.commerce.domain.DTO;

import com.example.commerce.domain.Customer;
import lombok.Data;

@Data
public class CustomerDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;

    public CustomerDTO(Customer customer) {
        this.id = customer.getId();
        this.firstName = customer.getFirstName();
        this.lastName = customer.getLastName();
        this.email = customer.getEmail();
        this.phone = customer.getPhone();
    }

}

