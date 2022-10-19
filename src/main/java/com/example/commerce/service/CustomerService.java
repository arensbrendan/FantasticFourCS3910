package com.example.commerce.service;

import com.example.commerce.domain.Customer;
import com.example.commerce.repository.BookRepository;
import com.example.commerce.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    @Transactional
    public Customer create(Customer customer){
        return customerRepository.save(customer);
    }
}
