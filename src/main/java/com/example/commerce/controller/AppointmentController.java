package com.example.commerce.controller;

import com.example.commerce.domain.Appointment;
import com.example.commerce.domain.AppointmentDTO;
import com.example.commerce.domain.AppointmentDTO;
import com.example.commerce.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class AppointmentController {

    private final AppointmentService appointmentService;

    @GetMapping("/appointments")
    public ResponseEntity<?> getAppointments() {
        try {
            return new ResponseEntity<>(appointmentService.getAll().stream().map(AppointmentDTO::new).collect(Collectors.toList()), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @GetMapping("/appointments/{id}")
    public ResponseEntity<?> getAppointmentsById(@PathVariable(value = "id") Long id) {
        try {
            return new ResponseEntity<>(new AppointmentDTO(appointmentService.getById(id)), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @PostMapping("/customers/{customerId}/appointment")
    public ResponseEntity<?> createAppointment(@PathVariable(value = "customerId") String cus_Id, @RequestBody Appointment appointment) {
        try {
            return new ResponseEntity<>(new AppointmentDTO(appointmentService.create(Long.valueOf(cus_Id), appointment)), HttpStatus.CREATED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @PutMapping("/appointments/{id}")
    public ResponseEntity<?> updateAppointment(@PathVariable(value = "id") Long id, @RequestBody Appointment appointment) {
        try {
            return new ResponseEntity<>(new AppointmentDTO(appointmentService.update(id, appointment)), HttpStatus.ACCEPTED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<?> deleteAppointment(@PathVariable(value = "id") Long id) {
        try {
            appointmentService.delete(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

}

