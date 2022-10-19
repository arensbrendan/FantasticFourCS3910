package com.example.commerce.controller;

import com.example.commerce.domain.Appointment;
import com.example.commerce.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class AppointmentController {

    private final AppointmentService appointmentService;

    @GetMapping("/appointments")
    public ResponseEntity<?> getAppointments() {
        try {
            return new ResponseEntity<>(appointmentService.getAll(), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @GetMapping("/appointments/{appId}")
    public ResponseEntity<?> getAppointmentsById(@PathVariable(value = "appId") long appId) {
        try {
            return new ResponseEntity<>(appointmentService.getById(appId), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @PostMapping("/customers/{customerId}/appointment")
    public ResponseEntity<?> createAppointment(@PathVariable(value = "customerId") Long cus_Id, @RequestBody Appointment appointment) {
        return new ResponseEntity<>(appointmentService.create(cus_Id, appointment), HttpStatus.CREATED);
    }

    @PutMapping("/appointments/{appId}")
    public ResponseEntity<?> updateAppointment(@PathVariable(value = "appId") Long appId, @RequestBody Appointment appointment) {
        try {
            return new ResponseEntity<>(appointmentService.update(appId, appointment), HttpStatus.ACCEPTED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @DeleteMapping("/appointments/{appId}")
    public ResponseEntity<?> deleteAppointment(@PathVariable(value = "appId") Long appId) {
        try {
            appointmentService.delete(appId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

}

