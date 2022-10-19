package com.example.commerce.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NonNull
    private Long id;

    private String name;

    private String address;

    private LocalDateTime open;

    private LocalDateTime close;

    @OneToMany(mappedBy = "location")
    private List<Service> services = new ArrayList<>();

    private Boolean mon;

    private Boolean tue;

    private Boolean wed;

    private Boolean thu;

    private Boolean fri;

    private Boolean sat;

    private Boolean sun;

    @OneToMany(mappedBy = "location")
    private List<Appointment> appointments = new ArrayList<>();

}
