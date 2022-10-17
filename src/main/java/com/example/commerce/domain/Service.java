package com.example.commerce.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "services")
@Entity
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // use the auto increment of the database
    private Long id;

    @ManyToOne
    private Location location;

    private String purpose;

}
