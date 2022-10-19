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
public class Services {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // use the auto increment of the database
    private Long id;

    private Long locationId;

    private String service;

}
