package com.example.commerce.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Book {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // use the auto increment of the database
    private Long id;
    private String title;
    private String author;

}
