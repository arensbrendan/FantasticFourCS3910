package com.example.commerce.controller;

import com.example.commerce.domain.DTO.LocationDTO;
import com.example.commerce.domain.Location;
import com.example.commerce.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class LocationController {

    private final LocationService locationService;

    @GetMapping("/location")
    public ResponseEntity<?> getLocations() {
        return new ResponseEntity<>(locationService.getAll().stream().map(LocationDTO::new).collect(Collectors.toList()), HttpStatus.OK);
    }

    @GetMapping("/location/{locId}")
    public ResponseEntity<?> getLocationsById(@PathVariable(value = "locId") Long locId) {
        return new ResponseEntity<>(new LocationDTO(locationService.getById(locId)), HttpStatus.OK);
    }

    @PostMapping("/location")
    public ResponseEntity<?> createLocation(@RequestBody Location location) {
        return new ResponseEntity<>(new LocationDTO(locationService.create(location)), HttpStatus.CREATED);
    }

    @PutMapping("/location/{locId}")
    public ResponseEntity<?> updateLocation(@PathVariable(value = "locId") Long locId, @RequestBody Location location) {
        return new ResponseEntity<>(new LocationDTO(locationService.update(locId, location)), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/location/{locId}")
    public ResponseEntity<?> deleteLocation(@PathVariable(value = "locId") Long locId) {
        locationService.delete(locId);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
