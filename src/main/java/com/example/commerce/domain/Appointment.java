package com.example.commerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
    @JoinColumn(name = "id")
    private Location location;

    private String time;

    private Long customer_id;

    private String purpose;



    @ManyToOne
    @JoinColumn(name = "id")
    @JsonIgnore
    private Customer customer;


}


