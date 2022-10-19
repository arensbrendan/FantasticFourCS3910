package com.example.commerce.controller;

import com.example.commerce.domain.Location;
import com.example.commerce.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class LocationController {

    private final LocationService locationService;

    @GetMapping("/location")
    public ResponseEntity<?> getLocations() {
        return new ResponseEntity<>(locationService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/location/{locId}")
    public ResponseEntity<?> getLocationsById(@PathVariable(value = "locId") long locId) {
        return new ResponseEntity<>(locationService.getById(locId), HttpStatus.OK);
    }

    @PostMapping("/location")
    public ResponseEntity<?> createLocation(@RequestBody Location location) {
        return new ResponseEntity<>(locationService.create(location), HttpStatus.CREATED);
    }

    @PutMapping("/location/{locId}")
    public ResponseEntity<?> updateLocation(@PathVariable(value = "locId") Long locId, @RequestBody Location location) {
        return new ResponseEntity<>(locationService.update(locId, location), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/location/{locId}")
    public ResponseEntity<?> deleteLocation(@PathVariable(value = "locId") Long locId) {
        locationService.delete(locId);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
