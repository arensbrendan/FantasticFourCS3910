package com.example.commerce.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "appointment_id")
    private Long id;

    @ManyToOne
    private Location location;

    private LocalDateTime time;

    private String purpose;

    @ManyToOne
    private Customer customer;

}


