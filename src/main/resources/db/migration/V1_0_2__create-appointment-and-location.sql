CREATE TABLE location
(
    id      int primary key auto_increment not null,
    name    varchar(32),
    address varchar(128),
    open    datetime,
    close   datetime,
    mon     boolean,
    tues    boolean,
    wed     boolean,
    thurs   boolean,
    fri     boolean,
    sat     boolean,
    sun     boolean
);

create table appointment
(
    id          int primary key auto_increment not null,
    location_id int                            not null,
    time        datetime,
    customer_id int                            not null,
    purpose     varchar(16),
    FOREIGN KEY (location_id) REFERENCES location (id),
    FOREIGN KEY (customer_id) REFERENCES customer (id)
);

create table services
(
    id          int primary key auto_increment not null,
    location_id int                            not null,
    purpose     varchar(16),
    FOREIGN KEY (location_id) references location (id)
)