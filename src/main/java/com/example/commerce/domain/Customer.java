package com.example.commerce.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "customer_id")
    private Long id;

    private String fname;

    private String lname;

    private String email;

    private String phone;

    //Embedded , Embeddable


    @OneToMany( mappedBy = "id" )
    private List<Appointment> appointments = new ArrayList<>();

}

