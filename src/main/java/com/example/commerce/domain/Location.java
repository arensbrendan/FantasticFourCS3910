package com.example.commerce.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "customer_id")
    private Long id;

    private String name;

    private String address;

    private LocalDateTime open;

    private LocalDateTime close;

    private Boolean mon;

    private Boolean tues;

    private Boolean Wed;

    private Boolean thurs;

    private Boolean fri;

    private Boolean sat;

    private Boolean sun;

    //Embedded , Embeddable


    //@OneToMany( mappedBy = "customer" )
    //private List<Appointment> appointments = new ArrayList<>();

}
