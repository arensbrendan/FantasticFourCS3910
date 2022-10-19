package com.example.commerce.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String address;

    private LocalDateTime open;

    private LocalDateTime close;

    @OneToMany
    private Set<Service> purpose;

    private Boolean mon;

    private Boolean tues;

    private Boolean wed;

    private Boolean thurs;

    private Boolean fri;

    private Boolean sat;

    private Boolean sun;
    //Embedded , Embeddable


    //@OneToMany( mappedBy = "customer" )
    //private List<Appointment> appointments = new ArrayList<>();

}
