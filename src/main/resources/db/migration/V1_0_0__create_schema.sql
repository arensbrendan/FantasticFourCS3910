create table customer
(
    id         int primary key auto_increment not null,
    first_name varchar(32),
    last_name  varchar(32),
    email      varchar(64),
    phone      varchar(16)
)