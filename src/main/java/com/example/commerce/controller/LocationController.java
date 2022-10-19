package com.example.commerce.controller;

import com.example.commerce.domain.DTO.LocationDTO;
import com.example.commerce.domain.Location;
import com.example.commerce.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class LocationController {

    private final LocationService locationService;

    @GetMapping("/location")
    public ResponseEntity<?> getLocations() {
        try {
            return new ResponseEntity<>(locationService.getAll().stream().map(LocationDTO::new).collect(Collectors.toList()), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getReason(), rse.getStatus());
        }
    }

    @GetMapping("/location/{id}")
    public ResponseEntity<?> getLocationsById(@PathVariable(value = "id") Long id) {
        try {
            return new ResponseEntity<>(new LocationDTO(locationService.getById(id)), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getReason(), rse.getStatus());
        }
    }

    @PostMapping("/location")
    public ResponseEntity<?> createLocation(@RequestBody Location location) {
        try {
            return new ResponseEntity<>(new LocationDTO(locationService.create(location)), HttpStatus.CREATED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getReason(), rse.getStatus());
        }
    }

    @PutMapping("/location/{id}")
    public ResponseEntity<?> updateLocation(@PathVariable(value = "id") Long id, @RequestBody Location location) {
        try {
            return new ResponseEntity<>(new LocationDTO(locationService.update(id, location)), HttpStatus.ACCEPTED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getReason(), rse.getStatus());
        }
    }

    @DeleteMapping("/location/{id}")
    public ResponseEntity<?> deleteLocation(@PathVariable(value = "id") Long id) {
        try {
            locationService.delete(id);
            return new ResponseEntity<>("Deleted location with id " + id, HttpStatus.ACCEPTED);
        } catch (
                ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getReason(), rse.getStatus());
        }
    }
}
