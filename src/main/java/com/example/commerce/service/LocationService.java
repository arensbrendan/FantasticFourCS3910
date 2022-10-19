package com.example.commerce.service;

import com.example.commerce.domain.Location;
import com.example.commerce.repository.LocationRepository;
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

    public List<Location> getAll() {
        return locationRepository.findAll();
    }

    public Location getById(Long locId) {
        if (locId != null && locId > 0) {
            Optional<Location> location = locationRepository.findById(locId);
            if (location.isPresent()) return location.get();
            else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No location found with id " + locId);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional
    public Location create(Location location) {


        System.out.println("location id" + location.getId());

        System.out.println("time " + location.getName());
        System.out.println("address " + location.getAddress());
        System.out.println("open " + location.getOpen());
        System.out.println("close " + location.getClose());
        System.out.println("mon " + location.getMon());
        System.out.println("tues " + location.getTues());
        System.out.println("wed " + location.getWed());
        System.out.println("thurs " + location.getThurs());
        System.out.println("fri " + location.getFri());
        System.out.println("sat " + location.getSat());
        System.out.println("sun " + location.getSun());

        System.out.println("Method call ");

        return locationRepository.save(location);
    }

    public Location update(Long locId, Location location) {
        location.setId(locId);
        return locationRepository.save(location);
    }

    public void delete(Long locId) {
        try {
            locationRepository.deleteById(locId);
        } catch (InvalidDataAccessResourceUsageException | EmptyResultDataAccessException ex) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Appointment with id " + locId + " doesn't exist, and could not be deleted");
        }
    }

}
