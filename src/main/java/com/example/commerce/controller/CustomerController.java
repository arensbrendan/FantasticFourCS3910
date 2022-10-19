package com.example.commerce.controller;

import com.example.commerce.domain.Customer;
import com.example.commerce.domain.DTO.CustomerDTO;
import com.example.commerce.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping("/customers")
    public ResponseEntity<?> getCustomers() {
        try {
            return new ResponseEntity<>(customerService.getAll().stream().map(CustomerDTO::new).collect(Collectors.toList()), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<?> getCustomersById(@PathVariable(value = "id") Long id) {
        try {
            return new ResponseEntity<>(new CustomerDTO(customerService.getById(id)), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @PostMapping("/customers")
    public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
        try {
            return new ResponseEntity<>(new CustomerDTO(customerService.create(customer)), HttpStatus.CREATED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @PutMapping("/customers/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable(value = "id") Long id, @RequestBody Customer customer) {
        try {
            return new ResponseEntity<>(new CustomerDTO(customerService.update(id, customer)), HttpStatus.ACCEPTED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @DeleteMapping("/customers/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable(value = "id") Long id) {
        try {
            customerService.delete(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }
}

