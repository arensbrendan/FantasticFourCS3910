package com.example.commerce.controller;

import com.example.commerce.domain.Appointment;
import com.example.commerce.domain.AppointmentDTO;
import com.example.commerce.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class AppointmentController {

    private final AppointmentService appointmentService;

    @GetMapping("/appointments")
    public ResponseEntity<?> getAppointments() {
        return new ResponseEntity<>(appointmentService.getAll().stream().map(AppointmentDTO::new).collect(Collectors.toList()), HttpStatus.OK);
    }

    @GetMapping("/appointments/{appId}")
    public ResponseEntity<?> getAppointmentsById(@PathVariable(value = "appId") long appId) {
        return new ResponseEntity<>(new AppointmentDTO(appointmentService.getById(appId)), HttpStatus.OK);
    }

    @PostMapping("/customers/{customerId}/appointment")
    public ResponseEntity<?> createAppointment(@PathVariable(value = "customerId") Long cus_Id, @RequestBody Appointment appointment) {
        return new ResponseEntity<>(new AppointmentDTO(appointmentService.create(cus_Id, appointment)), HttpStatus.CREATED);
    }

    @PutMapping("/appointments/{appId}")
    public ResponseEntity<?> updateAppointment(@PathVariable(value = "appId") Long appId, @RequestBody Appointment appointment) {
        return new ResponseEntity<>(new AppointmentDTO(appointmentService.update(appId, appointment)), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/appointments/{appId}")
    public ResponseEntity<?> deleteAppointment(@PathVariable(value = "appId") Long appId) {
        appointmentService.delete(appId);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}

