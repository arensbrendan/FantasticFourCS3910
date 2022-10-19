package com.example.commerce.repository;

import com.example.commerce.domain.Appointment;
import com.example.commerce.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {


}

