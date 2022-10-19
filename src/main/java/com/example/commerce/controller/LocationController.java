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
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @GetMapping("/location/{locId}")
    public ResponseEntity<?> getLocationsById(@PathVariable(value = "locId") Long locId) {
        try {
            return new ResponseEntity<>(new LocationDTO(locationService.getById(locId)), HttpStatus.OK);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @PostMapping("/location")
    public ResponseEntity<?> createLocation(@RequestBody Location location) {
        try {
            return new ResponseEntity<>(new LocationDTO(locationService.create(location)), HttpStatus.CREATED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @PutMapping("/location/{locId}")
    public ResponseEntity<?> updateLocation(@PathVariable(value = "locId") Long locId, @RequestBody Location location) {
        try {
            return new ResponseEntity<>(new LocationDTO(locationService.update(locId, location)), HttpStatus.ACCEPTED);
        } catch (ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }

    @DeleteMapping("/location/{locId}")
    public ResponseEntity<?> deleteLocation(@PathVariable(value = "locId") Long locId) {
        try {
            locationService.delete(locId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (
                ResponseStatusException rse) {
            return new ResponseEntity<>(rse.getMessage(), rse.getStatus());
        }
    }
}
