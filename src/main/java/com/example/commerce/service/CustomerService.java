package com.example.commerce.service;

import com.example.commerce.domain.Customer;
import com.example.commerce.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.InvalidDataAccessResourceUsageException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public Customer getById(Long id) {
        if (id != null && id > 0) {
            Optional<Customer> customer = customerRepository.findById(id);
            if (customer.isPresent()) return customer.get();
            else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No customer found with id " + id);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid id " + id);
        }
    }

    public List<Customer> getAll() {
        List<Customer> customers = customerRepository.findAll();
        if (customers.size() > 0) return customers;
        else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "There are no customers");
    }

    @Transactional
    public Customer create(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer update(Long appId, Customer customer) {
        customer.setId(appId);
        return customerRepository.save(customer);
    }

    public void delete(Long appId) {
        try {
            customerRepository.deleteById(appId);
        } catch (InvalidDataAccessResourceUsageException | EmptyResultDataAccessException ex) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer with id " + appId + " doesn't exist, and could not be deleted");
        }
    }

}
