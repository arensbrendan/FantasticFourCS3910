insert into customer (id, first_name, last_name, email, phone)
values (111, 'Brendan', 'Arens', 'arensbrendan@gmail.com', '8161234567'),
       (112, 'john', 'doe', 'johndoe@gmail.com', '1234567890');

alter table location
    alter column open time;
alter table location
    alter column close time;

insert into location(id, name, address, open, close, mon, tue, wed, thu, fri, sat, sun)
values (111, 'red st', '12345 red st KC MO', '08:00:00', '18:00:00', true, true, true, true, true, false, false),
       (112, 'blue st', '14235 blue st KC MO', '08:00:00', '18:00:00', true, false, false, true, true, true, true),
       (113, 'green st', '15423 green st KC MO', '08:00:00', '18:00:00', true, true, true, false, false, true, true);

insert into services(location_id, service)
values (111, 'Savings'),
       (112, 'Checking'),
       (113, 'Mortgage');

insert into appointment(location_id, time, customer_id, purpose)
values (111, '2022-11-11 09:00:00', 111, 'Savings'),
       (112, '2022-11-12 09:00:00', 112, 'Checking'),
       (113, '2022-11-13 09:00:00', 111, 'Mortgage');