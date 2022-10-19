package com.example.commerce.controller;

import com.example.commerce.domain.Customer;
import com.example.commerce.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping("/customers")
    public ResponseEntity<?> getCustomers() {
        try {
            return new ResponseEntity<>(customerService.getAll(), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<?> getCustomersById(@PathVariable(value = "id") Long id) {
        try {
            return new ResponseEntity<>(customerService.getById(id), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @PostMapping("/customers/{customerId}/customer")
    public ResponseEntity<?> createCustomer(@PathVariable(value = "customerId") String cus_Id, @RequestBody Customer customer) {
        try {
            return new ResponseEntity<>(customerService.create(customer), HttpStatus.CREATED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @PutMapping("/customers/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable(value = "id") Long id, @RequestBody Customer customer) {
        try {
            return new ResponseEntity<>(customerService.update(id, customer), HttpStatus.ACCEPTED);
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

