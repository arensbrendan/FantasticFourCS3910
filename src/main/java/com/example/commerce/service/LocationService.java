package com.example.commerce.service;

import com.example.commerce.domain.Location;
import com.example.commerce.domain.Services;
import com.example.commerce.repository.LocationRepository;
import com.example.commerce.repository.ServicesRepository;
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
public class LocationService {

    private final LocationRepository locationRepository;
    private final ServicesRepository servicesRepository;

    public List<Location> getAll() {
        return locationRepository.findAll();
    }

    public Location getById(Long id) {
        if (id != null && id > 0) {
            Optional<Location> location = locationRepository.findById(id);
            if (location.isPresent()) return location.get();
            else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No location found with id " + id);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid id " + id);
        }
    }

    @Transactional
    public Location create(Location location) {
        Location returnVal = locationRepository.save(location);
        for (Services service : location.getServices()) {
            if (service.getLocationId() == null) service.setLocationId(returnVal.getId());
            servicesRepository.save(service);
        }
        return returnVal;
    }

    public Location update(Long id, Location location) {
        location.setId(id);

        return locationRepository.save(location);
    }

    public void delete(Long id) {
        try {
            locationRepository.deleteById(id);
        } catch (InvalidDataAccessResourceUsageException | EmptyResultDataAccessException ex) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Appointment with id " + id + " doesn't exist, and could not be deleted");
        }
    }

}
